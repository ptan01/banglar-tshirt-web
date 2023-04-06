import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
const Main = () => {
    return (
        <div style={{maxWidth:'1440px', margin: '0 auto'}}>
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;