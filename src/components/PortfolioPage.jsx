import React from 'react';
import { NavLink, Outlet, Route, Routes, useMatch } from 'react-router-dom';
import s from '../styles/Portfolio.module.css'

const PortfolioPage = () => {
    return (
        <div className={s.body}>
            <div className={s.items}>
                <NavLink to='post'>пост</NavLink>
                <NavLink to='search'>поиск</NavLink>
                 <Outlet />
            </div>
        </div>
    );
}

export default PortfolioPage;
