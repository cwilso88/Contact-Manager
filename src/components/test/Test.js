import React, { Component } from 'react'

class Test extends Component {

  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => 
            this.setState({
          title: data.title,
          body: data.id
        })
      );   
  }
  
  render() {
    const { title, body }  = this.state;
    return (
      <div>
        <ul>
          <li> This is the title: {title}</li>
          <li>This is the id: {body}</li>
        </ul>
      </div>
    )
  }
}

export default Test;
