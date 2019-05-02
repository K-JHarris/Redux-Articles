import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'


import { Card } from 'reactstrap';

class Post extends Component {

  componentWillMount(){
    this.props.fetchPosts()
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

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Post);