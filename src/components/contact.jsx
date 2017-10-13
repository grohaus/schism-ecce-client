import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render(){
    const { name, photo, id } = this.props.details;
    return(
      // TODO - add route for single contact
      <Link to={`/contacts/${id}`}>
        <div className='contact-item'>
            <p className='contact-name'>{name}</p>
            <div className='emoji-container'>
              <img src={photo} alt={name}></img>
            </div>
        </div>
      </Link>
    )
  }
}

Contact.propTypes = {
  details: PropTypes.object
}

export default Contact;
