import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import Sidebar from '../components/Sidebar'
import { useParams } from 'react-router-dom';
import SellersContent from '../components/pages/SellersContent'
import styled from 'styled-components'

const QUERY_SHOPS = gql`
    query getSidebarTitles {
        shops {
            id
            title
        }
    }
`;

const Sellers = () => {
    const [ shopList, setShopList ] = useState([])
    const { data, loading, error } = useQuery(QUERY_SHOPS)

    // const params = useParams()
    // console.log(params);

    // console.log(data);
    // console.log(shopList);

    // useEffect(() => {
    //     getShopNames()
    // }, [])

    // const getShopNames = () => {
    //     if (data?.length > 0) {
    //         data.shops.map((shop) => {
    //             setShopList(shop.title)
    //         })
    //     }
    // }

    return (
        <SellersWrapper>
            <Sidebar data={
                data?.length > 0 ?
                data.shops.map(shop => shop.title)
                : 'WHY?'
            } />
            <SellersContent />
        </SellersWrapper>
    )
}

const SellersWrapper = styled.div`
    display: flex;
`;

export default Sellers


    // const selectShop = (id) => {
    //     setSelectedShop(data?.length > 0 ? data.shops.filter(shop => shop.id === id) : 'WHY?!')
    // }