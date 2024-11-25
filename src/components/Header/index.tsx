import style from "./styles.module.css";


const Header = () => {
    return(
        <header className={style.header}>
            <div className={style.header__logo}>
                <a href="#" className={style.doka_url}>
                    <span>{'U•ᴥ•U'}</span>
                </a>
                <a href="#" className={style.page_url}>
                    <span>Дока</span>
                </a>
            </div>
            <div className={style.slash}>
                <span></span>
            </div>
            <div className={style.header__input}>
                <label htmlFor="">
                    <input type="text" placeholder="Поиск"/>
                </label>
            </div>
        </header>
    );
};

export default Header;