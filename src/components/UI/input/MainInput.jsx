import React from 'react';
import cls from './MainInput.module.css';
const MainInput = ({ ...props }) => {
    return (
        <input className={cls.mainInput} {...props} />
    )
}
export default MainInput;