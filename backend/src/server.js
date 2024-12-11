require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const jwt = require('jsonwebtoken'); // JWT handling

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri);
let database;

// Connect to MongoDB once
async function connectToDatabase() {
  try {
    await client.connect();
    database = client.db('QuizMaster');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process on connection failure
  }
}

connectToDatabase();



// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const usersCollection = database.collection('users');

    // Find the user by email and password
    const user = await usersCollection.findOne({ email, password });

    if (user) {
      // Create a JWT token with user email and role
      const token = jwt.sign(
        { email: user.email, role: user.role }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
      );
      
      res.status(200).json({
        message: "Login successful",
        role: user.role,
        token: token,
        email: user.email
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Sign Up route
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  if (!firstName || !lastName || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const usersCollection = database.collection('users');

    // Check if the email already exists
    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Insert the new user into the database
    const newUser = { firstName, lastName, email, password, role };
    const insertResult = await usersCollection.insertOne(newUser);

    // Create a JWT token with user email and role
    const token = jwt.sign(
      { email: email, role: role }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.status(201).json({ 
      message: 'User registered successfully', 
      role, 
      token,
      email 
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create quiz route
app.post('/create-quiz', async (req, res) => {
  const quizData = req.body;

  try {
    const quizzesCollection = database.collection('quizzes');
    await quizzesCollection.insertOne(quizData);

    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    console.error('Error inserting quiz:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Get user's quizzes route
app.get('/quiz-maker-dashboard', async (req, res) => {
  try {
    // Verify the token
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userEmail = decoded.email;

    const quizzesCollection = database.collection('quizzes');
    
    // Find quizzes created by the user
    const userQuizzes = await quizzesCollection.find({ userEmail }).toArray();

    res.status(200).json(userQuizzes);
  } catch (error) {
    console.error('Error fetching user quizzes:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
// Quiz stats route
app.get('/quiz-stats/:quizId', async (req, res) => {
  try {
      const quizId = req.params.quizId;
      const { ObjectId } = require('mongodb');

      // Verify the token
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
          return res.status(401).json({ message: 'No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decoded.email;

      const quizzesCollection = database.collection('quizzes');
      
      // Find the specific quiz and verify it belongs to the user
      const quiz = await quizzesCollection.findOne({
          _id: new ObjectId(quizId),
          userEmail: userEmail
      });

      if (!quiz) {
          return res.status(404).json({ message: 'Quiz not found' });
      }

      // Return quiz stats
      res.status(200).json({
          quizName: quiz.name,
          totalQuestions: quiz.numberOfQuestions,
          difficulty: quiz.difficulty,
          // Add other stats you want to track
      });
  } catch (error) {
      console.error('Error fetching quiz stats:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Get specific quiz route
app.get('/edit-quiz/:quizId', async (req, res) => {
  try {
      const { ObjectId } = require('mongodb');
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
          return res.status(401).json({ message: 'No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decoded.email;

      const quizzesCollection = database.collection('quizzes');
      const quiz = await quizzesCollection.findOne({
          _id: new ObjectId(req.params.quizId),
          userEmail
      });

      if (!quiz) {
          return res.status(404).json({ message: 'Quiz not found' });
      }

      res.status(200).json(quiz);
  } catch (error) {
      console.error('Error fetching quiz:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Update quiz route
app.put('/edit-quiz/:quizId', async (req, res) => {
  try {
      const { ObjectId } = require('mongodb');
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
          return res.status(401).json({ message: 'No token provided' });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decoded.email;

      const quizzesCollection = database.collection('quizzes');
      const result = await quizzesCollection.updateOne(
          {
              _id: new ObjectId(req.params.quizId),
              userEmail
          },
          { $set: req.body }
      );

      if (result.matchedCount === 0) {
          return res.status(404).json({ message: 'Quiz not found' });
      }

      res.status(200).json({ message: 'Quiz updated successfully' });
  } catch (error) {
      console.error('Error updating quiz:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
module.exports = app;