import React, { Component } from 'react'
import styles from './PostContainer.css'
import { Post } from '../../Components'
import { CommentsContainer } from '../../Containers'
import { connect } from 'react-redux'
import { updateVotes, navigatePost } from '../../Redux'
import * as _ from 'lodash'

export default class PostContainer extends Component {
 PropTypes: {
    postId: PropTypes.string.isRequired
  }
  onChange() {}
  closeModal(event){
      document.getElementById("postsContainer").style.display = "block";
      document.getElementById("postDetailsContainer").style.display = "none";
  }
    
  onVote(e){
      if(!this.props.isAuthed)
          {
              alert("You need to login to vote for this post.");
          }
      else
          {
              var action = "dec";
              if(e.target.className == "upvote")
                  action = "inc"
              this.props.dispatch(updateVotes(findParent(e.target,'postContainer').getAttribute('id')),action)         
          }
  } 
    
  render() {
    return (
       <div className="postDetailsContainer" id="postDetailsContainer">
        <i className="fa fa-times fa-lg close-modal" onClick={this.closeModal.bind(this)}>
              </i>
        {
                <Post key={this.props.post.postId} onVote={this.onVote.bind(this)} text={this.props.post.title} time={this.props.post.time} author={this.props.post.author} votes={this.props.post.votes} comments={this.props.post.comments.length}>
                  {this.props.post.details}
                </Post>
                
        }
    
        <CommentsContainer/>
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
    post: state.posts.posts[state.posts.currentPost],
    isAuthed: state.users.isAuthed
  }
}

export default connect(mapStateToProps)(PostContainer)