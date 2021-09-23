import React from 'react'
import styled from 'styled-components'

const Button = ({ title }) => {
    return (
        <Btn>{title}</Btn>
    )
}

const Btn = styled.button`
    padding: .5rem 1rem;
    border: none;
    border-radius: 15px;
    font-weight: bold;
`;

export default Button
