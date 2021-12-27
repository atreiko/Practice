import React from 'react'
import Button from './Button'

const Numbers = ({ numbers, deleteNumber }) => {

    let generatedNumbers = numbers.map((number, index) => (
        <li key={Date.now() + `${index}`}>
            <div>{number} <Button title={'X'} clickHandler={() => deleteNumber(number)} /></div>
        </li>
    ))
        

    return (
        <ul>
            <li><h3>Numbers : </h3></li>
            {generatedNumbers}
        </ul>
    )
}

export default Numbers
