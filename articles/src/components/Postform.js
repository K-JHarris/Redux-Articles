import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.setState ={
          input: ''
        }
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
      </div>
    )
  }
}

export default PostForm;