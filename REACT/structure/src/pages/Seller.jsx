import React, { useState, useEffect } from 'react'
import s from './Seller.module.css'
import Tabs from '../components/Tabs/Tabs'

const Seller = ({ filteredShop }) => {
    const [sellerData, setSellerData] = useState(null)
    
    useEffect(() => {
        setSellerData(filteredShop)
    }, [filteredShop])
    console.log(sellerData);
    // const {link, delivery, id} = sellerData;

    // console.log(sellerData);

    return (
        <div className={s.wrapper}>
            <div className={s.inner}>
                <div className={s.left}>
                    <h1 className={s.title}>{sellerData.id}</h1>
                    <div className={s.link}>
                        <div className={s.subtitle}>Site: </div>
                        <a href={sellerData.link}>{sellerData.link}</a>
                    </div>
                    <div className={s.info}>
                        <div className={s.subtitle}>Delivery terms: </div>
                        <div className={s.delivery}>
                            {sellerData.delivery}
                        </div>
                    </div>
                </div>
                <div className={s.right}>
                    <div className={s.logo}>LOGO</div>
                </div>
            </div>
            <Tabs />
        </div>
    )
}

export default Seller

