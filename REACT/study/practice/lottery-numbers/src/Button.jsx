import React from 'react'

const Button = ({ title, clickHandler, disabled }) => {

    return (
        <button onClick={clickHandler} disabled={disabled}>
            {title}
        </button>
    )
}

export default Button
