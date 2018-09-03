import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/notes" exact>Notes</NavLink>
      </div>
    </nav>
  )
}

export default NavBar
