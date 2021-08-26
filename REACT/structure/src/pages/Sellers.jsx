import React, { useState, useEffect } from 'react'
import s from './Sellers.module.css'
import Sidebar from '../components/Sidebar/Sidebar'
import Seller from './Seller'
import SellerHome from '../components/SellerHome/SellerHome'
import { useParams } from 'react-router-dom'

const Sellers = () => {
	const { id } = useParams()

	return (
		<div className={s.wrapper}>
			<Sidebar />
			{id !== undefined ? <Seller id={id} /> : <SellerHome />}
		</div>
	)
}

export default Sellers
