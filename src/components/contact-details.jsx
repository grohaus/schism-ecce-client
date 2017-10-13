import React from 'react';
import Header from './header';
import PropTypes from 'prop-types';
import MockData from '../../__mocks__/fileMock';

class ContactDetails extends React.Component {
  constructor(props){
    super(props);
    const contact = MockData.contacts.find(x=>x.id === this.props.match.params.contactId);
    this.state = {
      contact: contact
    }
  }

  render(){
    return(
      <div>
        <Header />
        <div className='contact-detail-item'>
          <div className='contact-detail-header'>
            <h1 className='contact-detail-title'>{this.state.contact.name}</h1>
            <h5 className='contact-detail-text'>{this.state.contact.description}</h5>
          </div>
            <div className='emoji-container'>
              <img src={this.state.contact.photo} alt={this.state.contact.name}></img>
            </div>
        </div>
      </div>
    )
  }
}

ContactDetails.propTypes = {
  contact: PropTypes.object
}

export default ContactDetails
