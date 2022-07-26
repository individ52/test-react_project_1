import React from 'react';
import cls from './MainModal.module.css';
const MainModal = ({ children, isVisiable, setVisiable }) => {

    const rootClasses = [cls.back];

    if (isVisiable) rootClasses.push(cls.active);
    return (
        <div className={rootClasses.join(" ")} onClick={() => { setVisiable(false); }}>
            <div className={cls.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default MainModal;