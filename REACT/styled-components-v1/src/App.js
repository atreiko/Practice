import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Route, Switch as Switching } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Switch from '@material-ui/core/Switch';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';

function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if(theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false)
    }
    else {
      setTheme('light-theme');
      setChecked(true)
    }
  }

  return (
    <div>
      <Sidebar navToggle={navToggle} />

      <div className='theme'>
        <div className='light-dark-mode'>
            <div className='left-content'>
              <Brightness4Icon />
            </div>
            <div className='left-right'>
              <Switch 
                value=''
                checked={checked}
                inputProp={{ 'aria-label': '' }}
                size='medium'
                onClick={themeToggler}
             />
           </div>
         </div>
      </div>

      <div className='hamburger-menu'>
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

      <MainContentStyled className='main-content'>
        <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div>

        <Switching>
            <Route path='/' exact>
              <HomePage checked={checked} />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/resume' exact>
              <ResumePage />
            </Route>
            <Route path='/portfolios' exact>
              <PortfoliosPage />
            </Route>
            <Route path='/blogs' exact>
              <BlogsPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
        </Switching>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -11;
    .line-1, .line-2, .line-3, .line-4 {
      width: .5px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
