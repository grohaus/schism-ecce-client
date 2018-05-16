import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render(){
    const { name, photo, id, activity } = this.props.details;
		console.log(activity)
		console.log(photo)

		const emojiObj = {
		  // backgroundImage: "url(" + { photo } + ")"
			backgroundImage: `url(${photo})`
		}

    return(
      // TODO - add route for single contact
      <Link to={`/contacts/${id}`}>
        <div className='contact-item'>
            <p className='contact-name'>{name}</p>
						{/* <div className="activity">{activity}</div> */}
            <div className='emoji-container'
							style={ emojiObj }>
              {/* <img src={photo} alt={name}></img> */}
							<span className="activity">{activity}</span>
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
