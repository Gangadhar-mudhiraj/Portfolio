import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../views/Navbar'
const MainLayout = () => {
    return (

        <>
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout