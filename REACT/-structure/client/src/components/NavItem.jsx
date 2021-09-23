import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavItem = ({ item }) => {
    return (
        <li key={item.id}>
            <LinkItem to={item.path} activeStyle={{ color: '#acab' }}>{item.title}</LinkItem>
        </li>
    )
}

const LinkItem = styled(NavLink)`
    
`;

export default NavItem
