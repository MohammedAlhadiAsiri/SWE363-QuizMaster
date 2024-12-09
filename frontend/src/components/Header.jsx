import style from "../styles/header-style.module.css";

const Header = () => {
    return (
        <>
            <header className={style.header_quiz}>
                <div className={style.left_section}>
                    <p className={style.header_logo}>QuizMaster</p>
                </div>
                <div className={style.right_section}>
                    <button className={style.right_text}>HOME</button>
                    <button className={style.right_text}>CONTACT US</button>
                    <button className={style.login}>
                        <p className={style.login_text}>Login</p>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;
