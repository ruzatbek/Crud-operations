import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Header from './Components/Header/Header';
import Hero from './Components/Main/Hero';

const App = () => {
  return (
    <main>
      <Sidebar/>
      <div className="wrappers">
      <Header/>
      <Hero/>
      </div>
    </main>
  );
}

export default App;