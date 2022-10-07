import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import s from '../styles/NotFindPage.module.css'

const NotFindPage = () => {
    return (
        <div className={s.body}>
            <Outlet />
            <div className={s.block}>
                <h1>УПС! кажется этой страницы не существует</h1>
                <NavLink to="/main" > Вернуться на главную </NavLink>
            </div>
        </div>
    );
}

export default NotFindPage;
