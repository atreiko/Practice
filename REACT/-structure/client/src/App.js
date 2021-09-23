import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes/AppRoutes';

function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
