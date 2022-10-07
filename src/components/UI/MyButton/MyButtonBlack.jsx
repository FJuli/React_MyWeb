import React from 'react';
import s from './MyButton.module.css'

const MyButtonBlack = ({ children, ...props }) => {
    return (
        <button {...props} className={s.myByttonBlack}>
            {children}
            <div className={s.btn_line}></div>
        </button>
    );
}

export default MyButtonBlack;