import React from 'react';
import { Outlet } from 'react-router-dom';
import s from '../styles/Contacts.module.css';
import img_ph from '../img/icon_ph.png'
import MyButtonBlack from './UI/MyButton/MyButtonBlack';
import Modal from './UI/Modal/Modal';
import FormInvate from './FormInvate';
import img_git from '../img/git.png'


const ContactsPage = ({ iam, modal, setModal }) => {

    const openGitHubPage = () => {
        window.open('https://github.com/FJuli')
    }

    return (
        <div className={s.body}>
            <Outlet />
            <div className={s.contact_block}>
                <div className={s.title}> Контакты </div>
                <div className={s.img_block}>
                    <img className={s.img} src={img_ph} alt='УПС!'></img>
                </div>
                <ul key={iam.name} className={s.items}>
                    <li className={s.item}> {iam.phone}</li>
                    <li className={s.item}> {iam.email}</li>
                    <li>
                        <img className={s.img} src={img_git} alt='УПС' onClick={openGitHubPage}></img>
                    </li>
                </ul>
            </div>
            <div className={s.invate_block}>
                <MyButtonBlack onClick={() => setModal(true)} className={s.btn}> пригласить на работу </MyButtonBlack>
            </div>
            <Modal visible={modal} setVisible={setModal}>
                <FormInvate setVisible={setModal} />
            </Modal>
        </div>
    );
}

export default ContactsPage;
