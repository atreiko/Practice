import React from 'react'
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/gamedev.svg';


const ServiceSection = () => {
    return (
        <InnerLayout>
            <ServiceSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className='services'>
                    <ServiceCard 
                        image={design} 
                        title={'Hookah Master'} 
                        paragraph={'I am a hookah master from Energodar. I have been living in Kiev for two years and working in the "ToBe" establishment.'}
                    />
                    <ServiceCard 
                        image={intelligence} 
                        title={'Artificial Intelligence'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit accusantium impedit aliquid vero, ipsum itaque reiciendis fugiat magni, quibusdam porro nisi odio nulla.'}
                    />
                    <ServiceCard 
                        image={gamedev} 
                        title={'Working'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sit accusantium impedit aliquid vero, ipsum itaque reiciendis fugiat magni, quibusdam porro nisi odio nulla.'}
                    />
                </div>
            </ServiceSectionStyled>
        </InnerLayout>
    )
}

const ServiceSectionStyled = styled.section`
    .services {
        display: flex;
        justify-content: space-between;
    }  
`;

export default ServiceSection
