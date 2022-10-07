import React from 'react';
import s from './MyButton.module.css'

const MyButtonWhite = ({ children, ...props }) => {
    return (
        <button {...props} className={s.myByttonWhite}>
            {children}
            <div className={s.btn_line}></div>
        </button>
    );
}

export default MyButtonWhite;
