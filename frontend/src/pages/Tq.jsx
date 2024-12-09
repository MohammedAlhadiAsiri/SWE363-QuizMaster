import { useState } from "react";
import Header from "../components/Header";
import End from "../components/End";
import style from "../styles/questions-quizzes-style.module.css";
import examData from "../Json/questions.json"; // Import the JSON file

export default function Tq() {
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options per question

    const handleOptionChange = (questionId, choiceId) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [questionId]: choiceId,
        }));
    };

    return (
        <>
            <Header />
            <div className={style.question_main}>
                {/* Display Exam Title */}
                <div className={style.question_title}>{examData.title}</div>

                {/* Loop Through Questions */}
                {examData.questions.map((question, index) => (
                    <section key={question.id} className={style.question}>
                        {/* Display Question Number */}
                        <div className={style.question_number}>
                            <p
                                className={style.question_number_text}
                            >{`Question ${index + 1}`}</p>
                            <p className={style.question_number_text}>{`${
                                index + 1
                            }/${examData.questions.length}`}</p>
                        </div>

                        {/* Display Question Text */}
                        <div className={style.question_text}>
                            {question.text}
                        </div>

                        {/* Display Choices */}
                        <div className={style.field}>
                            {question.choices.map((choice) => (
                                <div
                                    key={choice.id}
                                    className={`${style.field_choise} ${
                                        selectedOptions[question.id] ===
                                        choice.id
                                            ? style.selected
                                            : ""
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        value={choice.id}
                                        id={`${question.id}-${choice.id}`}
                                        checked={
                                            selectedOptions[question.id] ===
                                            choice.id
                                        }
                                        onChange={() =>
                                            handleOptionChange(
                                                question.id,
                                                choice.id
                                            )
                                        }
                                    />
                                    <label
                                        htmlFor={`${question.id}-${choice.id}`}
                                        className={style.field_choise_text}
                                    >
                                        {choice.text}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
            <End />
        </>
    );
}
