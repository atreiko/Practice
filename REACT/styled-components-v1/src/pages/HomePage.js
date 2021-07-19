import React from 'react'
import styled from 'styled-components';
import ParticleBackground from '../components/particles-files/ParticleBackground';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube'


const HomePage = () => {
    return (
        <HomePageStyled>
            <div className='p-particles-js'>
                <ParticleBackground/>
            </div>
            <div className='typography'>
                <h1>Hi I'm<span> Neil deGrasse Tyson</span></h1>
                <p>
                I am an American astrophysicist, planetary scientist, author, and science communicator. 
                Tyson studied at Harvard University, the University of Texas at Austin, and Columbia University. 
                From 1991 to 1994, he was a postdoctoral research associate at Princeton University
                </p>
                <div className='icons'>
                    <a href='https://www.facebook.com' className='i-facebook icon'><FacebookIcon /></a>
                    <a href='https://github.com' className='i-github icon'><GithubIcon /></a>
                    <a href='https://https://www.youtube.com' className='i-youtube icon'><YoutubeIcon /></a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    .p-particles-js {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }

    .icons {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon {
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            border-radius: 50%;
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover {
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child) {
                margin-right: 1rem;
            }
            svg {
                margin: .5rem; 
            }
        }
        .i-youtube {
            &:hover {
                border: 2px solid red;
                color: red;
            }
        }
        .i-github {
            &:hover {
                border: 2px solid #5F4687;
                color: #5F4687;
            }
        }
    }
`;

export default HomePage
