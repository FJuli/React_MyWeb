import React from 'react';
import ContactsPage from './ContactsPage';
import NotFindPage from '../components/NotFindPage';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Main from './Main';
import MyStory from './MyStory';
import AboutPage from './AboutPage';


const Routers = (props) => {

    return (
        <div>
            <Routes>
                <Route path='/*' element={<Main iam={props.iam} />} >
                    <Route index element={<MainPage />} />
                    <Route path='main' element={<MainPage modal={props.modal} setModal={props.setModal} />}></Route>
                    <Route path='about' element={<AboutPage />}></Route>
                    <Route path='about/mystory' element={<MyStory />} />
                    <Route path='contacts' element={<ContactsPage iam={props.iam} modal={props.modal} setModal={props.setModal} />} />
                    <Route path='*' element={<NotFindPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default Routers;
