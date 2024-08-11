import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart ({cartCount})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
