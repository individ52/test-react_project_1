import React, { useContext, useState } from 'react';
import MainButton from '../components/UI/button/MainButton';
import MainInput from '../components/UI/input/MainInput';
import { AuthContext } from '../context';
import { setLocalstorageLogin } from '../hooks/setLogin';
const Login = () => {
    const { isAuth, setAuth } = useContext(AuthContext);
    const login = () => {
        setAuth(true);
        localStorage.setItem("auth", "true");
    }
    return (
        <form>
            <h1>Form for authorizing</h1>
            <MainInput type="text" placeholder="Your login" />
            <MainInput type="Password" placeholder="Your password" />
            <MainButton onClick={login}>Submit</MainButton>
        </form>
    )
}
export default Login;