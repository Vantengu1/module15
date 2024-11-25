import React, { useState } from "react";
import style from "./style.module.css";
import PostMenu from "../PostMenu/PostMenu";

interface PostCardProps {
    id: number;
    title: string;
    description: string;
    link?: string;
    oneDelete: (id: number) => void;
}


const PostCard: React.FC<PostCardProps> =({id, title, description, link, oneDelete}) => {

    const [isFavorite, setisFavorite] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [postContent, setPostContent] = useState<string>(description)

    const toggleMenu = () => {
        setMenuVisible(!menuVisible)
    };

    const toggleFavorite = () => {
        setisFavorite(!isFavorite);
    };

    const deleteCard = () => {
        if (window.confirm('Вы уверены?')) {
            oneDelete(id);
        }
    };

    const editCard = () => {
        const newContent = prompt('Введите новый текст поста:', postContent);
        if (newContent) {
            setPostContent(newContent);
        }
    };

    return(
        <div className={style.card}>
            <h2>{title}</h2>
            <p>{postContent}</p>
            <p>{isFavorite ? '⭐ in favorite' : ''}</p>
            <a href="https://doka.guide/" target="_blanck">{link}</a>
            <button className={style.button} onClick={toggleMenu}>⋮</button>
            {menuVisible && <PostMenu
            oneFavorite={toggleFavorite}
            oneDelete={deleteCard}
            oneEdit={editCard} />}
        </div>
    )
}

export default PostCard;