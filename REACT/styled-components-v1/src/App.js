import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <Sidebar />

      <MainContentStyled className='main-content'>
        {/* <div className='lines'>
          <div className='line-1'></div>
          <div className='line-2'></div>
          <div className='line-3'></div>
          <div className='line-4'></div>
        </div> */}

        <Switch>
            <Route path='/' exact>
              <HomePage />
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
        </Switch>

      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -11;
    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
