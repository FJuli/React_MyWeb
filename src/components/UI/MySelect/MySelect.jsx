import React from 'react';
import s from './MySelect.module.css'

const MySelect = ({ option, defaultValue, value, onChange }) => {
    return (
        <div >
            <select className={s.select}
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option disabled value=''>{defaultValue}</option>
                {option.map(option =>
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>)}
            </select>
        </div>
    );
}

export default MySelect; 
