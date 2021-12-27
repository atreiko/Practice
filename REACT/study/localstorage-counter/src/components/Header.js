import React from 'react'

const Header = ({ user }) => {
    return (
        <header>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
        </header>
    )
}

export default Header
