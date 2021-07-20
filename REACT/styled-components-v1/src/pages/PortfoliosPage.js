import React, { useState } from 'react'
import { MainLayout, InnerLayout } from '../styles/Layouts'
import Title from '../components/Title'
import styled from 'styled-components'
import portfolios from '../data/portfolios'
import Menu from '../components/Menu'
import Button from '../components/Button'

const allButtons = ['All', ...new Set(portfolios.map(item => item.category))]

const PortfoliosPage = () => {
    const [menuItem, setMenuItems] = useState(portfolios)
    const [button, setButton] = useState(allButtons)

    const filter = (button) => {
        if (button === 'All') {
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter(item => item.category === button);
        setMenuItems(filteredData)
    }

    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'Portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={button} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

const PortfoliosPageStyled = styled.section`

`;

export default PortfoliosPage
