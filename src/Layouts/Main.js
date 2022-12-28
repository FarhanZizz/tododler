import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';

const Main = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;