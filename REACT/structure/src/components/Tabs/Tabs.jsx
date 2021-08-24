import React, { useState, useEffect } from 'react'
import s from './Tabs.module.css'
import { shops } from '../../shops'
import Tab from './Tab';

const Tabs = () => {
    const [toggleState, setToggleState] = useState(1)
    const [tabTitles, setTabTitles] = useState([])

    useEffect(() => {
        getObjects()
    }, [])

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const getObjects = () => {
        const shopProducts = shops.map(({products}) => products)
        setTabTitles(shopProducts);
    }

    const renderTabs = tabTitles.map((tabTitle, index) => {
        return <Tab key={tabTitle} toggleState={toggleState} index={index + 1} toggleTab={toggleTab} title={tabTitle} />
    })

    return ( 
        <div className={s.wrapper}>
            <div className={s.buttons}>
                {/* {renderTabs} */}
                <div className={toggleState === 1 ? [s.btn, s.btnActive].join(' ') : s.btn} onClick={() => toggleTab(1)}>Tobacco</div>
                <div className={toggleState === 2 ? [s.btn, s.btnActive].join(' ') : s.btn} onClick={() => toggleTab(2)}>Coal</div>
                <div className={toggleState === 3 ? [s.btn, s.btnActive].join(' ') : s.btn} onClick={() => toggleTab(3)}>Mouthpieces</div>
                <div className={toggleState === 4 ? [s.btn, s.btnActive].join(' ') : s.btn} onClick={() => toggleTab(4)}>Equipment</div>
            </div>
            <div className={s.contents}>
                <div className={toggleState === 1 ? [s.content, s.contentActive].join(' ') : s.content}>Tobacco Content</div>
                <div className={toggleState === 2 ? [s.content, s.contentActive].join(' ') : s.content}>Coal Content</div>
                <div className={toggleState === 3 ? [s.content, s.contentActive].join(' ') : s.content}>Mouthpieces Content</div>
                <div className={toggleState === 4 ? [s.content, s.contentActive].join(' ') : s.content}>Equipment Content</div>
            </div> 
        </div>
    )
}

export default Tabs
