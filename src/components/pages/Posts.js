import React, { Component } from 'react';
import Header from '../components/Header';
import PostArea from '../components/PostArea';

class Posts extends Component {
  render() {
    return (
      <div>
        <Header title='Post List' />
        <PostArea
          url='http://localhost:3001/api/posts'
          pollInterval={2000}
          value={this.props.value}         
        />
      </div>
    );
  }
}

export default Posts;
