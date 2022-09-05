import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import PageSwitch from './components/app-router';
import React from 'react';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Header />
       <PageSwitch/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
