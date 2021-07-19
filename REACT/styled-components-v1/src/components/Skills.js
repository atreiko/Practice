import React from 'react'
import styled from 'styled-components'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import ProgressBar from './ProgressBar'
import Title from './Title'

const Skills = () => {
    return (
        <SkillsStyled>
                <Title title={'My Skills'} span={'My Skills'} />
                <InnerLayout>
                    <div className='skills'>
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JavaScript'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'React'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'Java'}
                            width={'50%'}
                            text={'50%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;

export default Skills
