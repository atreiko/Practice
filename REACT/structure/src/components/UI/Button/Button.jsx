import React from 'react'
import s from './Button.module.css'

const Button = ({title}) => {

    return (
        <button className={s.button}>
            <div className={s.pattern}>
                <div className={[s.target, s.inner, s.bg4].join(' ')}></div>
            </div>
            <div className={s.text}>{title}</div>
        </button>
    )
}

export default Button
