import { Link } from 'react-router-dom';
import React from 'react';

import './navbar.css';

const routes = [
  { link: '/comicsPage', title: 'Comics' },
];


function navbar() {
    return (
        <nav className='nav'>
          <Link to='/' className='icon'>
            <img className='logo' src="src\assets\logo.png" alt="Logo" title="Logo"/>
          </Link>

          <ul>
            {routes.map((item, index) => (
              <li>
                <Link to={item.link} key={index}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )
}

export default navbar;