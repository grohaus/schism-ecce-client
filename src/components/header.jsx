import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
  render () {
    return (
      <div className="header">
        <Link to='/'>
          <h3 className="header-text">ECCE</h3>
        </Link>
      </div>
    );
  }
}
