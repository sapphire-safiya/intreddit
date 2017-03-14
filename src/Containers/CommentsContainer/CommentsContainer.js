import React, { Component } from 'react'
import styles from './CommentsContainer.css'
import { FormInput, Button } from '../../Components'
import { connect } from 'react-redux'
import { addComment } from '../../Redux'
import { addCommentId } from '../../Redux'
import * as _ from 'lodash'
import* as uuid from 'node-uuid'

export default class CommentsContainer extends Component {
 PropTypes: {
    postID: PropTypes.string.isRequired
  }
  onChange() {}
  getDate(date){
        var date = new Date(date.toString());
        var day = date.getDate();
        var month = date.getMonth();
        var year = date.getFullYear();
        var hours = date.getHours();
        
        var currentDate = new Date();
        var cday = currentDate.getDate();
        var cmonth = currentDate.getMonth();
        var cyear = currentDate.getFullYear();
        var chours = currentDate.getHours();
        
        if(cyear == year)
        {
            if(cmonth == month)
                {
                   if(cday == day)
                       {
                           if( chours == hours)
                               {
                                   return currentDate.getMinutes() - date.getMinutes() + " mins";
                               }
                           else
                               return chours - hours + " hours";
                       }
                    else
                        return cday - day + " days";
                    
                }
            
               else
                    return cmonth - month + " months";
        }
        else
                return cyear - year + " years";
  } 
  onClick(e){
      if(!this.props.isAuthed)
          {
              alert("You need to login to comment on this post.");
          }
      else if(document.getElementById("add-a-new-comment").value == '')
          {
              alert("Enter a valid comment.");   
          }
      else
          {
              
              var COMMENT_ID = uuid.v4()
              var text = document.getElementById("add-a-new-comment")
              var author = this.props.id
              var time = new Date()
              this.props.dispatch(addComment(COMMENT_ID,text.value,author,time))
              this.props.dispatch(addCommentId(this.props.post.postId,COMMENT_ID)) 
              text.value = ''
              alert("Comment added succesfully");
          }
  } 
    
  render() {
    return (
       <div className="commentsContainer">
        <div className='addCommentWrap'>
          <FormInput type="textarea" name="Add a new Comment" />
          <Button text="Submit" onClick={this.onClick.bind(this)} />
        </div>
        {
            _.map(this.props.post.comments,function(commentId){
               return(
                   <div className="commentWrap" key={commentId}>
                    <div className="commentText">{this.props.comments[commentId].text}</div>
                    <div className="postDetails">
                      {"submitted on " + this.getDate(this.props.comments[commentId].time) + " ago by " + this.props.comments[commentId].author + " to /i/general"}
                    </div>
                   </div>       
               )
            }.bind(this))
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.posts[state.posts.currentPost],
    isAuthed: state.users.isAuthed,
    comments: state.comments,
    id: state.users.id  
  }
}

export default connect(mapStateToProps)(CommentsContainer)