import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = ({ user, emails }) => {

    return (
        <div>
            <Header user={user} />
            <Outlet emails={emails} />
            <Footer />
        </div>
    )
}

export default Layout
