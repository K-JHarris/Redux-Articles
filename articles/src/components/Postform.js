import React, { Component } from 'react'

import { Button, Form, Label, Input } from 'reactstrap';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: '',
          body: ''
        };
    }

    addPost = e => {
      e.preventDefault();
      const post = {
        title: this.state.title,
        body: this.state.body
      }

      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(post)
      })
      .then(res => res.json())
      .then(data => console.log(data)) 
    }

    handleChange = e => {
      this.setState(
        { 
          [e.target.name]: e.target.value 
        });
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <Form className="form" onSubmit={this.addPost}>
          <div className="form-input">
            <Label>Title: </Label> <br />
            <Input 
              type="text" 
              name="title" 
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-input">
            <Label>Body:</Label> <br/>
            <Input 
              name="body" 
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <Button>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default PostForm;