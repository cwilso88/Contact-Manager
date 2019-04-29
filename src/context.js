import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
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
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
