import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
state = {
        contacts: [
            {
                id: 1,
                name: 'Megan Ram',
                email: 'mram@gmail.com',
                phone: '555-234-1234'
            },
            {
                id: 2,
                name: 'Germy Adam',
                email: 'gram@gmail.com',
                phone: '555-634-6734'
            },
            {
                id: 3,
                name: 'Tom Banks',
                email: 'tbanks@gmail.com',
                phone: '555-894-7534'
            },
        ]
    }
  render() {
      const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
            <Contact 
                key={contact.id}
                name={contact.name}
                email={contact.email}
                phone={contact.phone}
            />
        ))}
      </div>
    )
  }
}

export default Contacts;
