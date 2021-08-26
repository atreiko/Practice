import React from 'react'
import s from './Tab.module.css'

const Tab = ({ toggleState, index, toggleTab, title }) => {
    console.log(toggleState, index, toggleTab, title);

    
    return (
        <>
            <div className={toggleState === index ? [s.btn, s.btnActive].join(' ') : s.btn} onClick={() => toggleTab(index)}>{title}</div>
        </>
    )
}

export default Tab
