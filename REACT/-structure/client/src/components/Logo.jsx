import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <LogoWrapper>
            <span style={{fontWeight: '400', fontSize: '.975rem'}}>GET</span><Link to='/home'>HOOK</Link>    
        </LogoWrapper>
    )
}

const LogoWrapper = styled.div`
    font-weight: bold;
`;

export default Logo
