import React from 'react';
import 'antd/dist/reset.css';
import Navbar from './Components/Navbar';
import itemListContainer from './Components/itemListContainer';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
    <itemListContainer tienda="Arañita" escuela="Coderhouse" />
  </div>
);

export default App;
