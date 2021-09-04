import React from 'react'
import s from './Card.module.css'


const Card = ({ title, url, desc, tags }) => {

    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                <img src={url} alt={title}/>
            </div>
            <div className={s.cardContent}>
                <div className={s.title}>{title}</div>
                <div className={s.body}>
                    <p className={s.description}>{desc}</p>
                    {/* <p className={s.tags}>{tags.join(' ')}</p> */}
                    <a className={s.link} href='#' alt={title}>
                        ADD
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card
