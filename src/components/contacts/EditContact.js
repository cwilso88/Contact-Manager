import React, { Component } from 'react'
import { Consumer } from '../../context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'



class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        const contact = res.data;

        console.log(contact);

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    //All of the functions 
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const {
            name,
            email,
            phone
        } = this.state;

        // Check fields for errors
        if(name === '') {
            this.setState({errors: {name: 'Please enter name'}});
            return;
        }

        if(email === '') {
            this.setState({errors: {email: 'Please enter email'}});
            return;
        }

        if(phone === '') {
            this.setState({errors: {phone: 'Please add phone number'}});
            return;
        }


        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {
        const {
            name,
            email,
            phone,
            errors
        } = this.state;

        return ( 
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header text-center">Edit Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    <TextInputGroup 
                                        label="Email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        label="Phone"
                                        name="phone"
                                        placeholder="Enter Phone Number..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input 
                                        type="submit" 
                                        value="Update Contact"
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

export default EditContact;