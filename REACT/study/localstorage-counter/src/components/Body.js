import React from 'react'
import Button from './Button'

const Body = ({ decrementAge, incrementAge }) => {
    return (
        <div>
            <Button onClick={decrementAge} title={'Decrement Age'} />
            <Button onClick={incrementAge} title={'Increment Age'} />
        </div>
    )
}

export default Body
