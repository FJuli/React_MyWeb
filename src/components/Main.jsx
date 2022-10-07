import React from 'react';
import { NavLink, Outlet, } from 'react-router-dom';
import s from '../styles/Layer.module.css'
import img_i from '../img/icon_i.png'
import img_t from '../img/icon_t.png'
import img_hh from '../img/hh.png'
import img_git from '../img/git.png'
import { useMemo } from 'react';

const Main = ({ iam }) => {

    const network = useMemo(() => ([
        { id: 1, name: 'instagram', src: img_i, url: 'https://www.instagram.com/s0.mimi/' },
        { id: 2, name: 'telegram', src: img_t, url: 'http://t.me/Yuliia_Furashova' },
        { id: 3, name: 'hh', src: img_hh, url: 'https://hh.ru/resume/fb9f320aff0290ffff0039ed1f68514c643953' },
        { id: 4, name: 'gitHub', src: img_git, url: 'https://github.com/FJuli'}]),
        []
    )
    const menu = useMemo(() => ([
        { url: 'main', item: 'Главная' },
        { url: 'about', item: 'обо мне' },
        /* { url: 'portfolio/post', item: 'Портфолио' }, */
        { url: 'contacts', item: 'Контакты' }]),
        []
    );

    return (
        <div className={s.maim_layer}>
            <div className={s.header}>
                <div className={s.items}>
                    {menu.map(menu =>
                        <div key={menu.url} className={s.item}>
                            <NavLink to={menu.url} > {menu.item} </NavLink>
                        </div>)}
                </div>
            </div>
            <Outlet />
            <div className={s.footer}>
                <div className={s.footer_body} >
                    <div key={iam.name}>
                        <div className={s.text_name}>{iam.name} {iam.surname}</div>
                        <div className={s.text_phone}>{iam.phone} - {iam.email}</div>
                    </div>
                    {network.map(network =>
                        <div key={network.id} className={s.icon_items}>
                            <img className={s.img} src={network.src} linkto={network.url} alt='упс' onClick={() => window.open(network.url)} />
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default Main;
