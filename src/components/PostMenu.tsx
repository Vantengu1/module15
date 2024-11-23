import React from "react";
import styled from "styled-components";

interface PostMenuProps {
    oneFavorite: () => void;
    oneDelete: () => void;
    oneEdit: () => void;
}

const MenuContainer = styled.div`
    position: absolute;
    max-width: 350px;
    background: var(--color);
    border: 1px solid #000;
    z-index: 100;
    padding: 8px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    right: 16px;
    top: 40px;

    @media (max-width: 768px) {
        width: 100%;
        right: 0;
    }
`;

const MenuItem = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 26px;
    padding: 8px;
    width: 100%;
    text-align: left;

    &:hover {
        background-color: gray;
        border-radius: 3px;
    }
`

const PostMenu: React.FC<PostMenuProps> = ({ oneFavorite, oneDelete, oneEdit}) => {
    return(
        <MenuContainer>
            <MenuItem onClick={oneEdit}>Редактировать</MenuItem>
            <MenuItem onClick={oneDelete}>Удалить</MenuItem>
            <MenuItem onClick={oneFavorite}>Добавить в избранное</MenuItem>
        </MenuContainer>
    );
};

export default PostMenu;