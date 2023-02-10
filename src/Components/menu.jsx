import { NavLink } from "react-router-dom";

function Menu() {
    return (
      <div className="menu-prueba">
        <ul className="menu-prueba-ul">
            <li><NavLink to="/categoria/bebes">BEBES</NavLink></li>
            <li><NavLink to="/categoria/niños">NIÑOS</NavLink></li>
            <li><NavLink to="/categoria/adultos">ADULTOS</NavLink></li>
            <li><NavLink to="/categoria/premium">PREMIUM</NavLink></li>
            <li><NavLink to="/categoria/deco">DECO</NavLink></li>
            <li><NavLink to="/">TODOS LOS PRODUCTOS</NavLink></li>
        </ul>
      </div>
    )
  };
  export default Menu;