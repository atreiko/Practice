import React from 'react'
import PropTypes from 'prop-types'
import { CustomLink } from '../CustomLink'


const Header = ({ user }) => {
    return (
        <header>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>

            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/favorites'>Favorites</CustomLink>
            <CustomLink to='/sent'>Sent</CustomLink>
            <CustomLink to='/inbox'>Inbox</CustomLink>
        </header>
    )
}

Header.propTypes = {
    user: PropTypes.object.isRequired
}

export default Header
