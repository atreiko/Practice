import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layouts'
import Title from './Title'
import SmallTitle from './SmallTitle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import SchoolIcon from '@material-ui/icons/School'
import ResumeItem from './ResumeItem'

const Resume = () => {
    const businessCenterIcon = <BusinessCenterIcon />
    const schoolIcon = <SchoolIcon />

    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'Resume'} />
            <InnerLayout>
                <div className='small-title'>
                    <SmallTitle icon={businessCenterIcon} title={'Working Experience'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Success University'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!'}
                    />
                    <ResumeItem 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!'}
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Goggle Inc'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!'}
                    />
                </div>
                <div className='small-title u-small-title-margin'>
                    <SmallTitle icon={schoolIcon} title={'Education Qualification'} />
                </div>
                <div className='resume-content'>
                    <ResumeItem 
                        year={'2018 - 2022'} 
                        title={'Computer Science Degree'}
                        subTitle={'Success University'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!'}
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'A - Levels'}
                        subTitle={'Church Hill High'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!'}
                    />
                    <ResumeItem 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!Perspiciatis dolore exercitationem, nobis vitae adipisci nemo rerum explicabo provident. Quaerat, numquam!'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>
    )
}

const ResumeStyled = styled.section`
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

export default Resume
