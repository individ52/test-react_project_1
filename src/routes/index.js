import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
    { path: "/about", element: <About /> },
    { path: "/", element: <Home /> },
    { path: "/posts", element: <Posts /> },
    { path: "/*", element: <Navigate to="/" repalce /> }
];

export const publicRoutes = [
    { path: "/Login", element: <Login /> },
    { path: "/*", element: <Navigate to="/Login" /> }
];

