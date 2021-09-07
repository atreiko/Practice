import React, { useState, useEffect } from 'react'
import BrandItemBtn from './BrandItemBtn';
import s from './BrandList.module.css'

const BrandList = ({ product, selectBrand, toggleBrand }) => {
    const [brands, setBrands] = useState([])
    
    // console.log(product);

    useEffect(() => {
        setBrands(product)
    }, [product])

    return (
        <ul className={s.wrapper}>
            {
                brands?.length > 0 ?
                brands.map((brand, index )=> (
                    <BrandItemBtn key={brand.id} title={brand.title} toggleBrand={toggleBrand} index={index + 1} selectBrand={selectBrand} />
                )) : null
            }
            {/* <li className={s.item}>Buta</li>
            <li className={s.item}>Adalya</li>
            <li className={s.item}>Arawak</li>
            <li className={s.item}>Banger</li>
            <li className={s.item}>Cult</li>
            <li className={s.item}>DarkSide</li>
            <li className={s.item}>Element</li>
            <li className={s.item}>Gixmom</li>
            <li className={s.item}>Haze</li>
            <li className={s.item}>M16</li>
            <li className={s.item}>Nakhla</li>
            <li className={s.item}>Sebero</li>
            <li className={s.item}>Serbetli</li>
            <li className={s.item}>Smoke Mafia</li>
            <li className={s.item}>Tangiers</li>
            <li className={s.item}>Afzal</li>
            <li className={s.item}>Alwaha</li>
            <li className={s.item}>Azure</li>
            <li className={s.item}>Basio</li>
            <li className={s.item}>D-mini</li>
            <li className={s.item}>Dead Horse</li>
            <li className={s.item}>Fantasia</li>
            <li className={s.item}>Fumari</li>
            <li className={s.item}>Glitch</li>
            <li className={s.item}>Honey Badger</li> */}
        </ul>
    )
}

export default BrandList
