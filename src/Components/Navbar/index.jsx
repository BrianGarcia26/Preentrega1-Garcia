import './style.css';
import { useEffect, useState } from 'react';
import { MailOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Cart from '../cartWidget';
import { Link } from "react-router-dom";

const items = [
  {
    label: 'Arañita',
    key: 'logo',
    className: 'logo',
    href: '/',
  },
  {
    label: 'Inicio',
    key: 'Inicio',
    className: 'inicio',
    href: '/',
  },
  {
    label: 'Productos',
    key: 'SubMenu',
    icon: <ShoppingOutlined />,
    className: 'submenu',
    children: [
        {
            label: 'BEBÉS',
            key: 'submenu:bebes',
            href: '/bebes',
        },
        {
            label: 'NIÑOS',
            key: 'submenu:niños',
            href: '/niños',
        },
        {
            label: 'ADULTOS',
            key: 'submenu:adultos',
            href: '/adultos',
        },
        {
            label: 'PREMIUM',
            key: 'submenu:premium',
            href: '/premium',
        },
        {
            label: 'DECO',
            key: 'submenu:deco',
            href: '/deco',
        },
        {
            label: 'TODOS LOS PRODUCTOS',
            key: 'submenu:todo',
            href: '/todo',
        },
    ],
  },
  {
    label: 'Contacto',
    key: 'mail',
    icon: <MailOutlined />,
    className: 'contacto',
    href: "/mail",
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
      <Link to="/Cart"><Cart/></Link>
    </div>
  )
};

export default Navbar;