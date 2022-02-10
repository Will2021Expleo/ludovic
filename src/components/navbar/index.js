import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {navItems} from '../data/NavItems' //import des datas pour le menu
import Button from './Button'
import Dropdown from './Dropdown'


const Navbar = () => {

  const [dropdown, setDropdown] = useState(false)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          Mage Mandrak
          {/* Voir comment rajouter un icone */}
        </Link>
        <ul className="nav-items">
          {navItems.map((item, index) => {
            if(item.title === "Mes services"){
              return (
                <li
                  key={index}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button />
      </nav>
      
    </>
  );
}

export default Navbar