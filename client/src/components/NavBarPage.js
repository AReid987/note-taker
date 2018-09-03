import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarPage = () => {
  return (
    <nav>
      <div>
        <NavLink
          style={{ marginRight: '12px' }}
          to="/" exact className="btn btn-primary">Home</NavLink>
        <NavLink
          style={{ marginRight: '12px' }}
          to="/notes" exact className="btn btn-primary">Notes</NavLink>
      </div>
    </nav>
  )
}

export default NavBarPage
