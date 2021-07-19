import React from 'react'
import styled from 'styled-components';
import resume from '../img/personsmoke.jpg';
import PrimaryButton from './PrimaryButton';

const ImageSection = () => {
    return (
        <ImageSectionStyled>
            <div className='left-content'>
                <img src={resume} alt='resume image' />
            </div>
            <div className='right-content'>
                <div className='sub-title'>
                    <h4>I am <span>Lorem Ipsum</span></h4>
                </div>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ut sit accusantium impedit aliquid vero, ipsum itaque reiciendis 
                    fugiat magni, quibusdam porro nisi odio nulla. Earum in ipsam 
                    temporibus omnis eligendi consequatur voluptates quidem!
                </p>
                <div className='about-info'>
                    <div className='info-title'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className='info'>
                        <p>:Lorem Ipsum</p>
                        <p>:29</p>
                        <p>:Ukrainian</p>
                        <p>:Ukrainian, Russian, English</p>
                        <p>:Kiev, Ukraine</p>
                        <p>:Freelance</p>
                    </div>
                </div>
                <PrimaryButton title={'Download CV'}/>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content {
        width: 100%;
        height: 55vh;
        img {
            width: 95%;
            height: 100%;
            object-fit: cover;
            z-index: 11;
        }
    }
    .right-content {
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span {
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                padding-right: 3rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p {
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection
