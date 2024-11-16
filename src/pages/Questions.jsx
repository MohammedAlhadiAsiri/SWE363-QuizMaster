import { useState } from "react";
import Header from "../components/Header";
import End from "../components/End";
export default function Questions() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleButtonClick = (value) => {
        setSelectedOption(value);
    };
    return (
        <>
            <Header />
            <div className="question-main">
                <div className="question-title">World Geography</div>
                <section className="question">
                    <div className="question-number">
                        <p className="question-number-text">Question 1</p>
                        <p className="question-number-text">1/20</p>
                    </div>
                    <div className="question-text">
                        What is the longest river in the world?
                    </div>
                    <div className="field">
                        {/* First Option */}
                        <button
                            type="button"
                            className={`field-choise ${
                                selectedOption === "theOffice" ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick("theOffice")}
                        >
                            <input
                                type="radio"
                                name="sitcom"
                                value="The Office"
                                id="theOffice"
                                checked={selectedOption === "theOffice"}
                                onChange={() => setSelectedOption("theOffice")}
                            />
                            <label
                                htmlFor="theOffice"
                                className="field-choise-text"
                            >
                                The Office
                            </label>
                        </button>

                        {/* Second Option */}
                        <button
                            type="button"
                            className={`field-choise ${
                                selectedOption === "community" ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick("community")}
                        >
                            <input
                                type="radio"
                                name="sitcom"
                                value="Community"
                                id="community"
                                checked={selectedOption === "community"}
                                onChange={() => setSelectedOption("community")}
                            />
                            <label
                                htmlFor="community"
                                className="field-choise-text"
                            >
                                Community
                            </label>
                        </button>
                    </div>
                </section>
            </div>
            <End />
        </>
    );
}
