import './style.css';
import React, { useState } from 'react';
import { MailOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Cart from '../cartWidget';

const items = [
  {
    label: 'Arañita',
    key: 'logo',
    className: 'logo',
  },
  {
    label: 'Inicio',
    key: 'Inicio',
    className: 'inicio',
  },
  {
    label: 'Productos',
    key: 'SubMenu',
    icon: <ShoppingOutlined />,
    className: 'jelou',
    children: [
        {
            label: 'BEBÉS',
            key: 'setting:1',
        },
        {
            label: 'NIÑOS',
            key: 'setting:2',
        },
        {
            label: 'ADULTOS',
            key: 'setting:3',
        },
        {
            label: 'PREMIUM',
            key: 'setting:4',
        },
        {
            label: 'DECO',
            key: 'setting:5',
        },
        {
            label: 'TODOS LOS PRODUCTOS',
            key: 'setting:6',
        },
    ],
  },
  {
    label: 'Contacto',
    key: 'mail',
    icon: <MailOutlined />,
    className: 'contacto',
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('Inicio');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return ( 
    <div>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
      <Cart/>
    </div>
  )
};

export default Navbar;