import React from 'react'
import s from './TabPanels.module.css'

const TabPanels = ({ toggleState, index, children }) => {
    return (
        <div className={s.wrapper}>
            <div className={toggleState === index ? [s.content, s.contentActive].join(' ') : s.content}>

            </div>
        </div>
    )
}

export default TabPanels

                {/* {
                    tabPanels !== undefined ?
                        tabPanels.map((panel, index) => (
                            <Tab key={panel} toggleState={toggleState} index={index + 1} toggleTab={toggleTab}>
                                
                            </Tab> 
                        )) : 'empty'
                } */}
