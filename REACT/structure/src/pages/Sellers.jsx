import React, { useState, useEffect } from 'react'
import s from './Sellers.module.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Seller from './Seller';
import SellerHome from '../components/SellerHome/SellerHome'
import { useParams } from 'react-router-dom';
import { shops } from '../shops'

const Sellers = () => {
    const { id } = useParams();
    const [filteredShop, setFilteredShop] = useState()
    
    // console.log(id);

    const getShopById = (id) => {
        const shopId = shops.filter(shop => shop.id === id)
        setFilteredShop(shopId[0])
        console.log(shopId[0]);
    }

    useEffect(() => {
        getShopById(id)
    }, [id])

    return (
        <div className={s.wrapper}>
            <Sidebar />
            { id !== undefined ? <Seller filteredShop={filteredShop} /> : <SellerHome /> }
        </div>
    )
}

export default Sellers
