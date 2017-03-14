import React, { Component } from 'react'
import styles from './PostsContainer.css'
import { Post, Button } from '../../Components'
import { connect } from 'react-redux'
import { updateVotes, navigatePost } from '../../Redux'
import * as _ from 'lodash'

export default class PostsContainer extends Component {
  PropTypes: {
    
  }
    
  onChange() {}
    
  navigatePost(e){
      e.preventDefault();
      document.getElementById("postsContainer").style.display = "none";
      document.getElementById("postDetailsContainer").style.display = "block";
      this.props.dispatch(navigatePost(findParent(e.target,'postContainer').getAttribute('id')))
  } 
    
  onVote(e){
      if(!this.props.isAuthed)
          {
              alert("You need to login to vote for this post.");
          }
      else
          {
              var vote = "dec";
              if(e.target.className.indexOf("fa-angle-up")>=0)
                  vote = "inc";
              this.props.dispatch(updateVotes(findParent(e.target,'postContainer').getAttribute('id'),vote))
          }
  } 
  render() {
    return (
      <div className="postsContainer" id="postsContainer">
        {
           _.map(_.reverse(_.sortBy(this.props.posts,['votes','time'])),function(post){
            return (
                <Post key={post.postId} dataId={post.postId} onVote={this.onVote.bind(this)} onClick={this.navigatePost.bind(this)} text={post.title} time={post.time} author={post.author} votes={post.votes} comments={post.comments.length}>
                    {false}
                </Post>
                 )      
            }.bind(this))
        }
      </div>
    )
  }
}

function findParent(node,className)
{
    while(node.parentElement.className != className){
        node = node.parentElement   
    }
    
    return node.parentElement;
}


function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    isAuthed: state.users.isAuthed,
    comments:  state.comments  
  }
}

export default connect(mapStateToProps)(PostsContainer)