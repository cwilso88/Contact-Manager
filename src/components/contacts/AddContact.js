import React, { Component } from 'react'

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }
    render() {
        const { name, email, phone } = this.state;
        return (
            <div className="card mb-3">
                <div className="card-header">
                    Add Contact
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" value={name} className="form-control form-control-lg" placeholder="Enter Name Here..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" value={email} className="form-control form-control-lg" placeholder="Enter Email Here..."/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" name="phone" value={phone} className="form-control form-control-lg" placeholder="Enter Phone Number..."/>
                            </div>
                            <input type="submit" value="Add Contact" className="btn btn-dark btn-block"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact