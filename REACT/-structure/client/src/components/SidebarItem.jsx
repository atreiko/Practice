import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({ item }) => {
    
    return (
        <>
            <SidebarListItem>
                <NavLink 
                    to={`/sellers/${item.id}`} 
                    activeStyle={{ color: '#acab' }}
                >{item.title}
                </NavLink>
            </SidebarListItem>
        </>
    )
}

const SidebarListItem = styled.li`
    font-size: .9rem;
    padding: .2rem 0;
`;

export default SidebarItem
