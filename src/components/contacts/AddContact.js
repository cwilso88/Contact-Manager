import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import uuid from 'uuid'



class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {
            name: 'Name is required'
        }
    };

    //All of the functions 
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const {
            name,
            email,
            phone
        } = this.state;

        // Check fields for errors
        if(name === '') {
            this.setState({errors: {name: 'Please enter name'}});
        }

        if(email === '') {
            this.setState({errors: {email: 'Please enter email'}});
        }

        if(phone === '') {
            this.setState({errors: {phone: 'Please add phone number'}});
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        });

        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    };

    render() {
        const {
            name,
            email,
            phone
        } = this.state;

        return ( 
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header text-center">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup 
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup 
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone Number..."
                                        value={phone}
                                        onChange={this.onChange}
                                    />
                                    <input 
                                        type="submit" 
                                        value="Add Contact"
                                        className="btn btn-dark btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                 }}

            </Consumer>
        );
    }
}

export default AddContact;