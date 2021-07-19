import React from 'react'
import Skills from '../components/Skills'
import { InnerLayout, MainLayout } from '../styles/Layouts'
import Title from '../components/Title'
import Resume from '../components/Resume'

const ResumePage = () => {
    return (
        <MainLayout>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
