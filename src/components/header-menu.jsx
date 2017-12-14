import React from 'react';
import { Link } from 'react-router-dom';

export default class HeaderNav extends React.Component{
  render () {
    return (
      <div className="header-menu">
        <Link to='/menu'>
          <div>
            <h2 className="header-menu-top">ME</h2>
            <h2 className="header-menu-bottom">NU</h2>
          </div>
        </Link>
      </div>
    );
  }
}
