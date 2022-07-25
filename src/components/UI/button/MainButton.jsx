import React from 'react';
import cls from "./MainButton.module.css";
const MainButton = ({ children, ...params }) => {
    return (
        <button className={cls.mainButton} {...params}>
            {children}
        </button>
    )
}
export default MainButton;