import React, { Component } from 'react'
import { Consumer }  from '../../context'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    //All of the functions 
    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
    }

    render() {
        const { name, email, phone } = this.state;

        return(
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input onChange={this.onChange} type="text" name="name" value={name} className="form-control form-control-lg" placeholder="Enter Name Here..."/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input onChange={this.onChange} type="email" name="email" value={email} className="form-control form-control-lg" placeholder="Enter Email Here..."/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input onChange={this.onChange} type="text" name="phone" value={phone} className="form-control form-control-lg" placeholder="Enter Phone Number..."/>
                                        </div>
                                        <input type="submit" value="Add Contact" className="btn btn-dark btn-block"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact