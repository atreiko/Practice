import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'
import { navLinks } from './NavItems';
import Button from '../UI/Button/Button';

const  Navigation = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                HOOK
            </div>
            <ul className={s.list}>
                {navLinks.map(l => 
                <li key={l.id} className={s.item}>
                    <NavLink className={s.link} to={l.path}>{l.name}</NavLink>
                </li> 
                )}
            </ul>
            <Button title='Login'/>
        </header>
    )
}

export default Navigation
