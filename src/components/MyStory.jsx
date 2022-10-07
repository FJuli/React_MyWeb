import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import s from '../styles/MyStory.module.css'
import img from '../img/IMG_I.jpeg'
import MyButtonBlack from './UI/MyButton/MyButtonBlack';

const MyStory = () => {
    const navigate = useNavigate();
    const title = 'Знакомство с IT';
    const textBeggin = `Произошло это в 2021 году. Компании, в которой я работала на тот момент, потребовался сайт. `
    const textMore = ` О процессе создания сайтов, на тот момент, я знала приблизительно... ничего! Первый же поиск информации 
    в google привел меня на конструктор Wix, там был создан мой первый сайт. Приблизительно в это же время, по счастливой случайности 
    мне попадается информация о курсах "Web-разработка и дизайн" в колледже г.Сургута.
    Я без малейшего раздумья я записываюсь, но к сожалению, курс оказался очень плохим, 
    по этому своим обучением я начала заниматься самостоятельно, спасибо - YouTube.`
    const textSkills = `В первую очередь были изучены: html, css, sass, далее я начала изучать js, react, умею работать с gitHub 
    и планирую дальше развиваться и обучаться.`
    const buttonText = 'Вернуться назад '

    return (
        <div className={s.body}>
            <div className={s.block_item}>
                <div className={s.block_text}>
                    <h1> {title} </h1>
                    <h3>
                        {textBeggin}
                    </h3>
                    <h3>
                        {textMore}
                    </h3>
                    <h3>
                        {textSkills}
                    </h3>
                    <MyButtonBlack onClick={() => navigate('/about')}> {buttonText} </MyButtonBlack>
                </div>
                <div className={s.block_img}>
                    <img src={img} alt='Упс!' />
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default MyStory;
