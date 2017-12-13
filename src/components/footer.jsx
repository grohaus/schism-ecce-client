import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component{
  render () {
    return (
      <div className="footer">
        <Link className="footer" to='/nav'>
          <div>
            <h3>Nav, yall</h3>
          </div>
        </Link>
      </div>
    );
  }
}
