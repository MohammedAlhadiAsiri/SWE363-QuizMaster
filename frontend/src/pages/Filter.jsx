import { useState } from "react";
import Header from "../components/Header";
import End from "../components/End";
import style from "../styles/questions-quizzes-style.module.css";

export default function Filter() {
    const [selectedOption, setSelectedOption] = useState("");

    const handleButtonClick = (value) => {
        setSelectedOption(value);
    };
    return (
        <>
            <Header />
            <div className={style.question_main}>
                <div className={style.question_title}>Filter</div>
                <section className={style.question}>
                    <div className={style.question_number}>
                        <p className={style.question_number_text}>Question 1</p>
                        <p className={style.question_number_text}>1/20</p>
                    </div>
                    <div className={style.question_text}>Difficulty</div>
                    <div className={style.field}>
                        {/* First Option */}
                        <button
                            type="button"
                            className={`${style.field_choise} ${
                                selectedOption === "hard" ? style.selected : ""
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
                            <label
                                htmlFor="hard"
                                className={style.field_choise_text}
                            >
                                Hard
                            </label>
                        </button>

                        {/* Second Option */}
                        <button
                            type="button"
                            className={`${style.field_choise} ${
                                selectedOption === "easy" ? style.selected : ""
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
                            <label
                                htmlFor="easy"
                                className={style.field_choise_text}
                            >
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
