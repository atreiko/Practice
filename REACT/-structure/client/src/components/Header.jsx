import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import Navigation from './Navigation'
import Button from './UI/Button'

const Header = () => {

    return (
        <HeaderWrapper>
            <Logo />
            <Navigation />
            <Button title='Login' />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .5rem 1rem;
    border: 1px solid black;
`;

export default Header
