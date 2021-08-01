import React from 'react';
import { Link } from 'react-router-dom';

import navStyles from './styles';

const Nav = (): JSX.Element => {
  return (
    <nav className={navStyles}>
      <div>
        <Link to="/">Parking Lot</Link>
        <Link to="/spa/soft-drinks">Soft Drinks</Link>
        <Link to="/spa/hard-drinks">Hard Drinks</Link>
        <Link to="/spa/hot-dogs">Hot Dogs</Link>
        <Link to="/spa/hamburgers">Hamburgers</Link>
      </div>
    </nav>
  );
};

export default Nav;
