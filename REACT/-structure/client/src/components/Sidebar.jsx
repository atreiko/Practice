import React from 'react'
import styled from 'styled-components'
import { useQuery, gql } from '@apollo/client'
import SidebarItem from './SidebarItem';

// const QUERY_SHOPS = gql`
//     query getSidebarTitles {
//         shops {
//             id
//             title
//         }
//     }
// `;

const Sidebar = ({ data }) => {
    // const { data, loading, error } = useQuery(QUERY_SHOPS);
    console.log(data);
    return (
        <SidebarWrapper>
            <ul>
                {/* {
                    data &&
                    data.shops.map(item => (
                        <SidebarItem item={item} key={item.id} />
                    ))
                } */}
            </ul>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    background-color: #eee;
    padding: 1rem;
    height: 100vh;
    width: 200px;
`;

export default Sidebar

