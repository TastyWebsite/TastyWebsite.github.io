import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tasty from "./Pages/Tasty";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Specialties from "./Pages/Specialties";
import Reservation from "./Pages/Reservation";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Tasty/>} />
                <Route path={'/home'} element={<Home/>} />
                <Route path={'/menu'} element={<Menu/>} />
                <Route path={'/specialties'} element={<Specialties/>} />
                <Route path={'/reservation'} element={<Reservation/>} />
                <Route path={'/blog'} element={<Blog/>} />
                <Route path={'/about'} element={<About/>} />
                <Route path={'/contact'} element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;