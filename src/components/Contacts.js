import React, { Component } from 'react';

class Contacts extends Component {
constructor() {
    super();
    this.state = {
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
}
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Contacts;
