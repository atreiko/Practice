import React from 'react'
import styled from 'styled-components';

const ServiceCard = ({ image, title, paragraph }) => {
    return (
        <ServiceCardStyled>
            <div className='container'>
                <img src={image} alt='' />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
    width: 33%;
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-top: 5px solid var(--border-color);
    margin-top: 5rem;
    transition: all .4s ease-in-out;
    &:hover {
        border-top: 5px solid var(--primary-color);
        transform: translateY(2px);
    }
    .container {
        padding: 1.2rem;
        h4 {
            color: var(--white-color);
            font-size: 1.6rem;
            padding: 1rem 0;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }
        
        p {
            padding: .8rem 0;
        }
    }
`;

export default ServiceCard
