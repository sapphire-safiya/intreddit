import React, { Component } from 'react'
import styles from './Post.css'    

export default class Post extends Component {
  onChange() {}
  render() {
    return (
    <div className="postWrap">    
      <div className="postContainer" id={this.props.dataId}>
        <Voting votes={this.props.votes} onVote={this.props.onVote} />
        <PostText id={this.props.key} onClick={this.props.onClick} time={this.props.time} author={this.props.author} comments={this.props.comments} text={this.props.text} comments={this.props.comments}>
          {this.props.children}
        </PostText>
      </div>
        {(() => {
            if(this.props.children != false)
                   return(
                       <PostDetails>
                            {this.props.children}
                       </PostDetails>
                   )
          })()}
    </div>
    )
  }
}

class PostText extends Component {
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
    
  render() {
    return (
      <div className="postText">
        <div className="mainText">
        {(() => {
            if(this.props.children != false)
                   return(
                       <h1 className="postTitle">
                            {this.props.text}
                        </h1>)
            else
                    return(
                      <a href="/post" className="postLink" onClick={this.props.onClick}>
                        {this.props.text}
                      </a>
                   )
          })()}
            
        </div>
        <div className="postDetails">
          {"submitted on " + this.getDate(this.props.time) + " ago by " + this.props.author + " to /i/general"}
        </div>
        <div className="commentsText">
          {this.props.comments+" comments"}
        </div>
      </div>
    )
  }
}

class Voting extends Component {

  onChange() {}

  render() {
    return (
      <div className="voting">
        <div href="#" className="upvote" onClick={this.props.onVote}>
          <i className="fa fa-angle-up fa-lg">
          </i>
        </div>
        <div className="voteCount">
          {this.props.votes}
        </div>
        <div className="downvote" onClick={this.props.onVote}>
          <i className="fa fa-angle-down fa-lg">
          </i>
        </div>
      </div>
    )
  }
}

class PostDetails extends Component {

  onChange() {}

  render() {
    return (
      <div className="postData">
        {this.props.children}
      </div>
    )
  }
}