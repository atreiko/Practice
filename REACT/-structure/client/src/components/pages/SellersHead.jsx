import React from 'react'
import styled from 'styled-components'
import './SellerHead.css'

const SellersHead = () => {
    return (
        <HeadWrapper>
            <div className='left'>
                <h1 className='title'>TITLE</h1>
                <div className='contacts'>
                    <a>www.shopssite.com</a>
                    <a>instagram</a>
                    <span>tel</span>
                    <span>adress</span>
                </div>
            </div>
            <div className='right'>
                <img  alt='logo' />
            </div>
        </HeadWrapper>
    )
}

const HeadWrapper = styled.div`
    display: flex;
`;

export default SellersHead
