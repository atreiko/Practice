import React from 'react'
import styled from 'styled-components'
import SellersHead from './SellersHead'

const SellersContent = () => {
    return (
        <SellersContentWrapper>
            <SellersHead />
        </SellersContentWrapper>
    )
}

const SellersContentWrapper = styled.div`
    padding: 1rem;
    width: 100%;
`;

export default SellersContent
