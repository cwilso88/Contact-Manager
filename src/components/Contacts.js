import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

class Contacts extends Component {

  render() {
      const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                contact={contact}
            />
        ))}
      </React.Fragment>
    )
  }
}

export default Contacts;
