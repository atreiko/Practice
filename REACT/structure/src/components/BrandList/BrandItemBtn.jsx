import React from 'react'
import s from './BrandItemBtn.module.css'

const BrandItemBtn = ({ title, toggleBrand, index, selectBrand }) => {
    return (
        <li className={selectBrand === index ? [s.item, s.itemActive].join(' ') : s.item} onClick={() => toggleBrand(index)}>
            {title}    
        </li>
    )
}

export default BrandItemBtn
