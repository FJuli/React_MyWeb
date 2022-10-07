import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../styles/About.module.css'

const AboutPage = () => {
    
const title = 'обо мне'
const titleFirstBlock = 'мне 27 лет'
const textFirstBlock = 'Родилась я в г.Тюмени некоторое время проживала в Сургуте далее переехала в Турцию г. Мерсин'
const titleSecondBlock = 'знакомсто с IT'
const textSecondBlock = 'Произошло это в 2021 году. Компании, в которой я работала на тот момент, потребовался сайт... '
const linkReadMore = 'Читать дальше'
const titleThirdBlock = 'cтек'
const textThirdBlock = 'На сегодняшний день я работаю с html, CSS, SASS, JavaScript, Typescript, React, GitHub, Node.js'

    return (
        <div className={s.body}>
            <div>
                <div className={s.title}>{title}</div>
                <div className={s.icon}>
                </div>
            </div>
            <div className={s.block}>
                <div className={s.items}>
                    <div className={s.titleInBlock}> {titleFirstBlock}</div>
                    <div className={s.textInBlock}> {textFirstBlock} </div>
                </div>
                <div className={s.items}>
                    <div className={s.titleInBlock}> {titleSecondBlock} </div>
                    <div className={s.textInBlock}> {textSecondBlock} </div>
                    <NavLink to='mystory'> {linkReadMore} </NavLink>
                </div>
                <div className={s.items}>
                    <div className={s.titleInBlock}> {titleThirdBlock} </div>
                    <div className={s.textInBlock}> {textThirdBlock} </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
