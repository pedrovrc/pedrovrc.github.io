import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <>
            <Navbar className="sticky top-0 z-50" />
            <Outlet />
            <ToastContainer />
        </>
    )
}

export default MainLayout