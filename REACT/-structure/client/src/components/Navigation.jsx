import React from 'react'
import Loader from './Loader';
import { useQuery, gql } from '@apollo/client'
import styled from 'styled-components';
import NavItem from './NavItem';

const QUERY_NAV_ITEMS = gql`
    query GetNavItems {
        nav {
            id
            title
            path
        }
    }
`;

const Navigation = () => {
    const { data, loading, error } = useQuery(QUERY_NAV_ITEMS);

    if (loading) {
        return <Loader />
    }

    return (
        <NavList>
            {
                data &&
                data.nav.map((item) => {
                    return (
                        <NavItem key={item.id} item={item} />
                    )
                })
            }
        </NavList>
    )
}

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    width: 25%;
`

export default Navigation
