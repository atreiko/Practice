import React from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to)

    return (
        <Link
            to={to}
            style={{
                color: match ? '#f00' : '#000'
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export { CustomLink } 
