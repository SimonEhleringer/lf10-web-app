import React from 'react';
import './Header.css';
import HeaderLink from './HeaderLink';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__content-wrapper'>
        <HeaderLink to='current'>Current</HeaderLink>
        <HeaderLink to='forecast'>Forecast</HeaderLink>
      </div>
    </div>
  );
};

export default Header;
