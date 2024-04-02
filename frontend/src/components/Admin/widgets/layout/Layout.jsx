import React from 'react'
import Navbar from './navbar'
import Sidenav from './sidenav'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto h-screen'>
                <Sidenav />
                <div className='grow'>
                    <Navbar />
                    {console.log("chidlren from layout",children)}
                    <div className='m-5'>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout
