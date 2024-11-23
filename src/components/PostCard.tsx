import React, { useState } from "react";
import styled from "styled-components";
import PostMenu from "./PostMenu";

interface PostCardProps {
    id: number;
    title: string;
    description: string;
    link?: string;
    oneDelete: (id: number) => void;
}

const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 800px;
    height: 200px;
    color: var(--color);
    position: relative;
    transition: all 0.3s ease;
    background: var(--background2);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        width: 780px;
    }
    
    @media (max-width: 390px) {
        margin-left: -20%;
        width: 80%;
    }
`

const MenuButton = styled.button`
    position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 26px;
    right: 10px;
    top: 6px;
    color: var(--color);
`

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
        <Card>
            <h2>{title}</h2>
            <p>{postContent}</p>
            <p>{isFavorite ? '⭐ in favorite' : ''}</p>
            <a href="https://doka.guide/" target="_blanck">{link}</a>
            <MenuButton onClick={toggleMenu}>⋮</MenuButton>
            {menuVisible && <PostMenu 
            oneFavorite={toggleFavorite} 
            oneDelete={deleteCard}
            oneEdit={editCard} />}
        </Card>
    )
}

export default PostCard;