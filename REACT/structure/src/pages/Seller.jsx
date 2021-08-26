import React, { useState, useEffect } from 'react'
import s from './Seller.module.css'
import Tabs from '../components/Tabs/Tabs'
import { shops } from '../shops'
const Seller = ({ id }) => {
	const [sellerData, setSellerData] = useState({})
    const [sellerTabs, setSellerTabs] = useState()
    // const [tabButtons, setTabButtons] = useState()
    // const [tabPanels, setTabPanels] = useState()

    useEffect(() => {
		getShopById(id)
        renderTabButtons()
	}, [id])

	const getShopById = id => {
		const shopId = shops.filter(shop => shop.id === id)
		setSellerData(shopId[0])
        setSellerTabs(shopId[0].prod)
	}

    const renderTabButtons = () => {
        if(sellerTabs !== undefined) {
            // setTabButtons(sellerData.tabs)
            // setTabPanels(sellerData.panels)
        }
    }

    // console.log(sellerData);
    // console.log(sellerTabs);

    // console.log(tabButtons);
    // console.log(tabPanels);

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
			<Tabs sellerTabs={sellerTabs} sellerData={sellerData} />
		</div>
	)
}

export default Seller


