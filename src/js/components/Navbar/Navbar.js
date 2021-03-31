import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars} from "react-icons/fa";
import {AiOutlineClose } from 'react-icons/ai'
import {SidebarData} from './SidebarData';
import './style.css'
import { IconContext } from "react-icons";


function Navbar({logout, name}) {

  const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaBars onClick={showSidebar} />
            </Link>
            <div className='user-wrapper'>
              <h4>{name}</h4>
              <div className='navbar-user-picture'></div>
            </div>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon} <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className='nav-text'>
                <a onClick={logout}><AiOutlineClose/> <span>Salir</span></a>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
