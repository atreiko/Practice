import React, { useState, useEffect } from 'react'
import s from './Seller.module.css'
import Tabs from '../components/Tabs/Tabs'
import { shops } from '../shops'


const Seller = ({ id }) => {
	const [sellerData, setSellerData] = useState({})
    const [tabButtons, setTabButtons] = useState()
    const [accessoryTabButtons, setAccessoryTabButtons] = useState()

    useEffect(() => {
        // console.log(id);
		getShopById(id)
        // setSellerData(shops.filter(shop => shop.id === id)[0])
        setTabButtons(sellerData.tabs)
        setAccessoryTabButtons(sellerData.accessory)
	}, [id])

	const getShopById = id => {
		const shopId = shops.filter(shop => shop.id === id)
        
		setSellerData(shopId[0])
	}

 
    // console.log(sellerData.id !== undefined);
    // console.log(id);

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
						<div className={s.delivery}>{sellerData.delivery}</div>
					</div>
				</div>
				<div className={s.right}>
					<div className={s.logo}>LOGO</div>
				</div>
			</div>
		{sellerData.id !== undefined	&& <Tabs tabButtons={tabButtons} accessoryTabButtons={accessoryTabButtons} sellerData={sellerData} />}
		</div>
	)
}

export default Seller


