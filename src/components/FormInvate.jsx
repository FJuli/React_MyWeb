import React from 'react';
import MyInput from './UI/MyInput/MyInput';
import s from '../styles/FormInvate.module.css';
import MyButtonBlack from './UI/MyButton/MyButtonBlack';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const YOUR_SERVICE_ID = 'service_peh1x7e'
const YOUR_TEMPLATE_ID = 'template_fe0l9au'
const YOUR_PUBLIC_KEY = 'hXjtiD17S6OcNfZuw'

const FormInvate = ({ setVisible }) => {
    const [nameCompanuForm, setNameCompanuForm] = useState('');
    const [nameManagerForm, setNameManagerForm] = useState('');
    const [phoneForm, setPhoneForm] = useState('');
    const [nameCompanuDirty, setNameCompanuDirty] = useState(false);
    const [nameManagerDirty, setNameManagerDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                Swal.fire({
                    icon: "",
                    title: 'Предложение успешно направленнно',
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: '',
                    title: 'Ошибка отправки, попробуйте снова',
                    text: error.text,
                })
            });
        e.target.reset()
        setVisible(false);
    }

    const blurDirty = (e) => {
        switch (e.target.name) {
            case 'name': setNameCompanuDirty(true)
                break;
            case 'company': setNameManagerDirty(true)
                break;
            case 'phone': setPhoneDirty(true)
                break;
        }
    }

    const btnSend = () => {
        if ((nameCompanuForm.length == 0 || null) || (nameManagerForm.length == 0 || null) || (phoneForm.length == 0 || null)) {
        } else {

        }
    }

    return (
        <div className={s.body}>
            <h3>Вы можете направить мне приглашение заполнив форму</h3>
            <form onSubmit={sendEmail}>
                {(nameCompanuDirty && ((nameCompanuForm.length < 2 || null))) && <div className={s.error}>Введите наименование компании</div>}
                <MyInput
                    name='company'
                    value={nameCompanuForm}
                    onBlur={e => blurDirty(e)}
                    onChange={e => setNameCompanuForm(e.target.value)}
                    placeholder='Введите наименование компании' />
                {(nameManagerDirty && ((nameManagerForm.length < 3 || null))) && <div className={s.error}>Введите имя</div>}
                <MyInput
                    name='name'
                    value={nameManagerForm}
                    onBlur={e => blurDirty(e)}
                    onChange={e => setNameManagerForm(e.target.value)}
                    placeholder='Введите Ваше имя' />
                {(phoneDirty && ((phoneForm.length == 0 || null))) && <div className={s.error}>Введите контактный номер телефона</div>}
                <MyInput
                    name='phone'
                    value={phoneForm}
                    onBlur={e => blurDirty(e)}
                    onChange={e => setPhoneForm(e.target.value)}
                    placeholder='Введите контактный номер телефона, добавочный если имеется' />
                <div className={s.btn}>
                    {(nameCompanuForm.length == 0 || null) || (nameManagerForm.length == 0 || null) || (phoneForm.length == 0 || null)
                        ? <MyButtonBlack disabled onClick={btnSend} type='submit'>Отправить предложение</MyButtonBlack>
                        : <MyButtonBlack onClick={btnSend} type='submit'>Отправить предложение</MyButtonBlack>
                    }
                </div>
            </form>
        </div>

    );
}

export default FormInvate;
