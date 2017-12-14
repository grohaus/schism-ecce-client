import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNav extends React.Component{
  render () {
    return (
      <div className="header-menu">
        <Link to='/menu'>
          <div>
            <h3>Me</h3>
            <h3>nu</h3>
          </div>
        </Link>
      </div>
    );
  }
}
