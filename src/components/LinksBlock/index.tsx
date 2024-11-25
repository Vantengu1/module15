import style from './styles.module.css'

const LinksBlock = () => {
    return(
        <div className={style.baner}>
            <div className={style.html__link}>
                <a href="#" className={style.html}>HTML</a>
            </div>
            <div className={style.css__link}>
                <a href="#" className={style.css}>CSS</a>
            </div>
            <div className={style.js__link}>
                <a href="#" className={style.js}>JavaScript</a>
            </div>
            <div className={style.access__link}>
                <a href="#" className={style.access}>Доступность</a>
            </div>
            <div className={style.web__link}>
                <a href="#" className={style.web}>Веб-платформа</a>
            </div>
            <div className={style.recipts__link}>
                <a href="#" className={style.recipts}>Рецепты</a>
            </div>
        </div>
    );
}; 

export default LinksBlock;