import { useState } from "react";
import Header from "../components/Header";
import End from "../components/End";
export default function Filter() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleButtonClick = (value) => {
        setSelectedOption(value);
    };
    return (
        <>
            <Header />
            <div className="question-main">
                <div className="question-title">Filter</div>
                <section className="question">
                    <div className="question-number">
                        <p className="question-number-text">Question 1</p>
                        <p className="question-number-text">1/20</p>
                    </div>
                    <div className="question-text">Difficulty</div>
                    <div className="field">
                        {/* First Option */}
                        <button
                            type="button"
                            className={`field-choise ${
                                selectedOption === "hard" ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick("hard")}
                        >
                            <input
                                type="radio"
                                name="sitcom"
                                value="Hard"
                                id="hard"
                                checked={selectedOption === "hard"}
                                onChange={() => setSelectedOption("hard")}
                            />
                            <label htmlFor="hard" className="field-choise-text">
                                Hard
                            </label>
                        </button>

                        {/* Second Option */}
                        <button
                            type="button"
                            className={`field-choise ${
                                selectedOption === "easy" ? "selected" : ""
                            }`}
                            onClick={() => handleButtonClick("easy")}
                        >
                            <input
                                type="radio"
                                name="sitcom"
                                value="Easy"
                                id="easy"
                                checked={selectedOption === "easy"}
                                onChange={() => setSelectedOption("easy")}
                            />
                            <label htmlFor="easy" className="field-choise-text">
                                Easy
                            </label>
                        </button>
                    </div>
                </section>
            </div>
            <End />
        </>
    );
}
