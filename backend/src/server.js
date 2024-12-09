require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.jnidl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        await client.connect();
        const database = client.db("QuizMaster");
        const usersCollection = database.collection("users");

        // Find the user by email and password
        const user = await usersCollection.findOne({ email, password });

        if (user) {
            res.status(200).json({
                message: "Login successful",
                role: user.role,
            });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        await client.close();
    }
});

// Sign Up route
app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    if (!firstName || !lastName || !email || !password || !role) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        await client.connect();
        const database = client.db("QuizMaster");
        const usersCollection = database.collection("users");

        // Check if the email already exists
        const existingUser = await usersCollection.findOne({ email });

        if (existingUser) {
            return res
                .status(409)
                .json({ message: "Email already registered" });
        }

        // Insert the new user into the database
        const newUser = { firstName, lastName, email, password, role };
        await usersCollection.insertOne(newUser);

        // Respond with the new user's role
        res.status(201).json({ message: "User registered successfully", role });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        res.status(500).json({ message: "Internal server error" });
    } finally {
        await client.close();
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
