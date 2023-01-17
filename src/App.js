import React from 'react';
import 'antd/dist/reset.css';
import Navbar from './Components/Navbar';
import Menu from './Components/menu';
import ItemListContainer from './Components/itemListContainer';
import ItemDetailContainer from './Components/itemDetailContainer';
import {Products} from './Components/products';
import Cart from './Components/cart';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Menu />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo="Bienvenidos a la tienda"/>} />
        <Route path='/categoria/:categoryId' element={<ItemListContainer saludo="Bienvenidos a la categoria seleccionada"/>} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='/Cart' element={<Cart/>} />
        <Route path='/Products' element={<Products/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}
