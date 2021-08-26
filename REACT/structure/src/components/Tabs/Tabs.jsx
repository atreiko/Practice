import React, { useState, useEffect } from 'react'
import s from './Tabs.module.css'
import Tab from './Tab';

const Tabs = ({ sellerData, sellerTabs }) => {
    const [toggleState, setToggleState] = useState(1)
    const [tabButtons, setTabButtons] = useState()
    const [tabPanels, setTabPanels] = useState()

    // console.log(sellerData);
    // console.log(sellerTabs);

    // useEffect(() => {
    //     setSellerTabs(sellerData.products)
    // }, [sellerData.products])

    useEffect(() => {
        setTabElements(sellerTabs)
    }, [sellerTabs])

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const setTabElements = (tabs) => {
        if (!!tabs) {
            tabs.forEach(tab => {
                setTabButtons(tab.tabs)
                setTabPanels(tab.panels)
            })
        }
    }

    console.log(tabButtons);
    console.log(tabPanels);


    // { sellerTabs ? sellerTabs.map((tab, index) => (
    //     <Tab key={tab} toggleState={toggleState} index={index + 1} toggleTab={toggleTab} title={tab} />
    // )) : 'empty' }

    return ( 
        <div className={s.wrapper}>
            <div className={s.buttons}>
                {
                    tabButtons ?
                        tabButtons.map((tab, index) => {
                            <Tab key={tab} toggleState={toggleState} index={index + 1} toggleTab={toggleTab} title={tab} /> 
                        })
                                :
                        'empty'
                }
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
