import React, { useContext } from 'react';
import cls from './Navbar.module.css';
import { Link } from "react-router-dom";
import MainButton from '../button/MainButton';
import { setLocalstorageLogin as setLocalstorageLogin } from '../../../hooks/setLogin';
import { AuthContext } from '../../../context';
const Navbar = () => {
    const { isAuth, setAuth } = useContext(AuthContext);

    const logout = () => {
        setAuth(false);
        localStorage.removeItem('isAuth');
    }

    return (
        <div className={cls.navbar}>
            <div className={cls.meunItems}>
                {isAuth &&
                    <MainButton onClick={logout}>Log out</MainButton>
                }

            </div>
            <div className={cls.meunItems}>
                <Link className={cls.menuItem} to="/">Home</Link>
                <Link className={cls.menuItem} to="/about">About</Link>
                <Link className={cls.menuItem} to="/posts">Posts</Link>
            </div>
        </div>
    )
}
export default Navbar;