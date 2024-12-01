import Header from "../components/Header";
import End from "../components/End";
export default function Questions() {
    return (
        <>
            <Header />
            <div className="main-grid">
                <div className="grid-title">
                    <p className="grid-title-text">Available Quiz/zes</p>
                    <button className="grid-filter">
                        <p className="filter-text">Filter</p>
                    </button>
                </div>
                <div className="line"></div>
                <section className="grid">
                    <div className="grid-item">
                        <div className="grid-item-header">
                            <div className="type">Multiple-Choice</div>
                            <div className="hard">Hard</div>
                        </div>
                        <div className="grid-item-main">
                            <div className="quiz-title">HTML</div>
                            <div className="dr">Dr.Ahmed</div>
                            <button className="start-button">Start</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
