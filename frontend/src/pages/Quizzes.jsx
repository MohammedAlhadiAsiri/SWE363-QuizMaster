import Header from "../components/Header";
import style from "../styles/quizzes.module.css";
import quizData from "../Json/quizzes.json";
export default function Quizzes() {
    return (
        <>
            <Header />
            <div className={style.main_grid}>
                <div className={style.grid_title}>
                    <p className={style.grid_title_text}>Available Quiz/zes</p>
                    <button className={style.grid_filter}>
                        <p className={style.filter_text}>Filter</p>
                    </button>
                </div>
                <div className={style.line}></div>
                <section className={style.grid}>
                    {quizData.map((quiz) => (
                        <div key={quiz.id} className={style.grid_item}>
                            <div className={style.grid_item_header}>
                                <div className={style.type}>{quiz.type}</div>
                                <div className={style.hard}>{quiz.level}</div>
                            </div>
                            <div className={style.grid_item_main}>
                                <div className={style.quiz_title}>
                                    {quiz.title}
                                </div>
                                <div className={style.dr}>
                                    {quiz.instructor}
                                </div>
                                <button className={style.start_button}>
                                    Start
                                </button>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}
