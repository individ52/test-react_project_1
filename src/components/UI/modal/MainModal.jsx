import React, { useContext } from 'react';
import { PostsContext } from '../../../context';
import MainInput from '../input/MainInput';
import cls from './MainModal.module.css';
const MainModal = ({ children, isVisiable, setVisiable }) => {

    const rootClasses = [cls.back];

    if (isVisiable) rootClasses.push(cls.active);
    console.log(rootClasses)
    return (
        <div className={rootClasses.join(" ")} onClick={() => { setVisiable(false); }}>
            <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default MainModal;