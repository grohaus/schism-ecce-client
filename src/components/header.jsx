import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component{
  render () {
    return (
      <div className="header">
        <Link className="header" to='/'>
          <h1>ECCE</h1>
          <h3>friends and family</h3>
        </Link>
      </div>
    );
  }
}
