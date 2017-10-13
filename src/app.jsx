import React from 'react';
import '../styles/index.scss';
import Header from './components/header';
import ContactGrid from './components/contact-grid';
import MockData from '../__mocks__/fileMock';

//Load fileMock data into contact-grid

class App extends React.Component {
  constructor() {
   super();
    this.state = { contacts: [] };
  }

  componentWillMount() {
    this.loadContacts();
  }

  loadContacts(){
    this.setState({
      contacts: MockData.contacts
    })
  }

  render() {
    return (
      <div>
        <Header />
        <ContactGrid contacts={this.state.contacts} />
      </div>
    )
  }
}

export default App;
