import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLink.css';

const HeaderLink = (props) => {
  return <Link {...props} className='header-link'></Link>;
};

export default HeaderLink;
