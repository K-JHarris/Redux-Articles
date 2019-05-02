import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'


import { Card } from 'reactstrap';

class Post extends Component {

  componentWillMount(){
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost)
    }
  }

  render() {

    const postItems = this.props.posts.map(post => (
        <Card className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </Card>
    ))

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

Post.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Post);