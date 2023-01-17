import { NavLink, Link } from "react-router-dom";

function Menu() {
    return (
      <div className="menu-prueba">
        <ul className="menu-prueba-ul">
            <li><NavLink to="/categoria/bebes">BEBES</NavLink></li>
            <li><NavLink to="/categoria/niños">NIÑOS</NavLink></li>
            <li><Link to="/categoria/adultos">ADULTOS</Link></li>
            <li><Link to="/categoria/premium">PREMIUM</Link></li>
            <li><Link to="/categoria/deco">DECO</Link></li>
            <li><Link to="/">TODOS LOS PRODUCTOS</Link></li>
        </ul>
      </div>
    )
  };
  export default Menu;