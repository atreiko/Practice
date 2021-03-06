import React from 'react'
import s from './Sidebar.module.css'
import { shops } from '../../shops'
import { NavLink, useHistory } from 'react-router-dom'

const Sidebar = ({setState}) => {
    const router = useHistory()
    // console.log(router);
    return (
        <ul className={s.wrapper}>
            {shops.map(shop => 
                <li className={s.item} key={shop.id}>
                    <NavLink onClick={() => setState(shop.id)} to={`/sellers/${shop.id}`} className={s.link}>{shop.title}</NavLink> 
                </li>
            )}
        </ul>
    )
}

export default Sidebar
 