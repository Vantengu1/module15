import React from "react";
import style from "./style.module.css";

interface PostMenuProps {
    oneFavorite: () => void;
    oneDelete: () => void;
    oneEdit: () => void;
}


const PostMenu: React.FC<PostMenuProps> = ({ oneFavorite, oneDelete, oneEdit}) => {
    return(
        <div className={style.menuContainer}>
            <button className={style.menuItem} onClick={oneEdit}>Редактировать</button>
            <button className={style.menuItem} onClick={oneDelete}>Удалить</button>
            <button className={style.menuItem} onClick={oneFavorite}>Добавить в избранное</button>
        </div>
    );
};

export default PostMenu;