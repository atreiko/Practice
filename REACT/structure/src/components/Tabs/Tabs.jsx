import React, { useState, useEffect } from 'react'
import s from './Tabs.module.css'
import Tab from './Tab';
import Select from 'react-select'
import { 
    sort, 
    choseStrength, 
    customStyles, 
    coalForm, 
    mouthpiecesFrom, 
    mouthpiecesColor, 
    hookahsCount,
    hookahBrands,
    hookahSet,
    sortByTag,
    packing50g1000g
} from './selects/selects';
import AccessoryTabs from './AccessoryTabs/AccessoryTabs';
import CardsContainer from '../CardsContainer/CardsContainer';
import BrandList from '../BrandList/BrandList';


const Tabs = ({ tabButtons, accessoryTabButtons, sellerData }) => {
    const [toggleState, setToggleState] = useState(1)
    const [product, setProduct] = useState()
    const [selectBrand, setSelectBrand] = useState(1)
    const [brand, setBrand] = useState()

    useEffect(() => {
        watchTheProduct(toggleState)
    }, [toggleState])

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const toggleBrand = (index) => {
        setSelectBrand(index)
        watchTheBrand(product.id)
    }

    const watchTheProduct = (index) => {
        switch (index) {
            case 1:
                setProduct(sellerData.tobacco)
                break;
            case 2:
                setProduct(sellerData.coal)
                break;
            case 3:
                setProduct(sellerData.mouthpieces)
                break;
            case 4:
                setProduct(sellerData.equipment)
                break; 
            case 5:
                setProduct(sellerData.hookahs)
                break;  
            default:
                setProduct(sellerData.tobacco)
                break;
        }
    }

    const watchTheBrand = (id) => {
        setBrand(product.filter(p => p.id === id))
    }
    
    console.log(brand);

    return ( 
        <div className={s.wrapper}>
            <div className={s.buttons}>
                {
                    tabButtons !== undefined ?
                        tabButtons.map((tab, index) => (
                            <Tab key={tab} toggleState={toggleState} index={index + 1} toggleTab={toggleTab} title={tab} /> 
                        )) : null
                }
            </div>
            <div>
                <BrandList product={product} selectBrand={selectBrand} toggleBrand={toggleBrand} />
            </div>
            <div className={s.contents}>
                <div className={toggleState === 1 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={choseStrength} placeholder='Tobacco Strength'/>
                        <Select styles={customStyles} options={sortByTag} placeholder='Tag'/>
                        <Select styles={customStyles} options={packing50g1000g} placeholder='Packing'/>
                    </div>
                </div>
                <div className={toggleState === 2 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={coalForm} placeholder='Coal Form' />
                    </div>
                </div>
                <div className={toggleState === 3 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={mouthpiecesFrom} placeholder='Mouthpieces Form' />
                        <Select styles={customStyles} options={mouthpiecesColor} placeholder='Mouthpieces Color' />
                    </div>
                </div>
                <div className={toggleState === 4 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.accessory}>
                        <AccessoryTabs accessoryTabButtons={accessoryTabButtons} />
                    </div>
                </div>
                <div className={toggleState === 5 ? [s.content, s.contentActive].join(' ') : s.content}>
                    <div className={s.selectsWrapper}>
                        <Select styles={customStyles} options={sort} placeholder='Sort' />
                        <Select styles={customStyles} options={hookahsCount} placeholder='Count' />
                        <Select styles={customStyles} options={hookahBrands} placeholder='Brand' />
                        <Select styles={customStyles} options={hookahSet} placeholder='Set' />
                    </div>
                </div>
            </div> 
            <div>
                <CardsContainer product={product} />
            </div>
        </div>
    )
}

export default Tabs
