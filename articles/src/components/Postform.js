import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

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
      this.props.createPost(post)
         this.setState({
           title: "",
           body: ""
         });
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

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);