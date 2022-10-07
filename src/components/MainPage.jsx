import { Outlet } from 'react-router-dom';
import s from '../styles/Main.module.css'



const Main = ({ }) => {
    const title = 'furashova yuliia';
    const text = 'web-разработчик';

    return (
        <div className={s.main}>
            <Outlet />
            <div className={s.layers}>
                    <div className={s.layerDown}></div>
                    <div className={s.layerUp}></div>
                <div className={s.block_text}>
                    <div className={s.title}> {title} </div>
                    <div className={s.text}> {text} </div>
                    <div className={s.button_about}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
