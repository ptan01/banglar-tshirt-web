import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div style={{maxWidth:'1440px', margin: '0 auto'}}>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;