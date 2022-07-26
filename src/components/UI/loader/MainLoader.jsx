import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import cls from "./MainLoader.module.css";
const MainLoader = () => {
    return (
        <div className={cls.mainLoader}></div>
    )
}
export default MainLoader;