import React from 'react'
import * as icons from '../../theme/icons'

const Icon = (props) => {
    const { type, color, filled, onClick } = props

    const iconJsx = icons[type]

    if(!iconJsx) {
        return null
    }

    return (
        <span onClick={onClick}>
            {iconJsx(color, filled)}
        </span>
    )
}

export default Icon
