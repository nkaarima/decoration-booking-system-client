import React from 'react';
import Navbar from '../components/Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Shared/Footer';

const MainLayout = () => {
    return (
        <div className=" w-11/12 mx-auto space-y-37.5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;