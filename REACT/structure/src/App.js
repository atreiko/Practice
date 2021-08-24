import React from "react";
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <div className='routes'>
        <BrowserRouter>
          <Navigation />
          <AppRoutes />
        </BrowserRouter> 
      </div>
    </div>
  );
}

export default App;

