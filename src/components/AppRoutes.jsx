import React, { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../routes';
import MainLoader from './UI/loader/MainLoader';
const AppRoutes = () => {
    const { isAuth, setAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <MainLoader />
    } else
        return (
            <div> {
                isAuth
                    ? //public routes
                    <Routes>
                        {
                            privateRoutes.map(route => {
                                console.log("privateRoutes")
                                return <Route
                                    key={route.path}
                                    path={route.path}
                                    element={route.element}
                                />
                            })
                        }
                    </Routes>
                    : //private routes
                    <Routes>
                        {publicRoutes.map(route => {
                            console.log("publicRoutes")
                            return <Route
                                key={route.path}
                                path={route.path}
                                element={route.element}
                            />
                        })}
                    </Routes>
            }
            </div >
        )
}
export default AppRoutes;