import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../views/Navbar'
import Contactme from '../pages/Contactme'
const MainLayout = () => {
    return (

        <>
            <Navbar />
            <main className=''>
                <Outlet />
            </main>
            <Contactme />
        </>
    )
}

export default MainLayout