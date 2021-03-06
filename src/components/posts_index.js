import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return map(this.props.posts, post => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>
            { post.title }
          </Link>
        </li>
      )
    })
  }
  
  render() { 
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a post
          </Link>
        </div>
        <h3> Post </h3>

        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);