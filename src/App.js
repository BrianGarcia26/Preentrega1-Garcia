import React from 'react';
import 'antd/dist/reset.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/itemListContainer';
import './App.css';

export default function App() {
  const [Tienda, Escuela] = ["Arañita", "Coderhouse"];
  return (
  <div className="App">
    <Navbar />
    <ItemListContainer Tienda={Tienda} Escuela={Escuela}/>
  </div>
  );
}
