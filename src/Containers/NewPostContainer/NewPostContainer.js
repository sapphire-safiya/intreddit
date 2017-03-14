import React, { Component, PropTypes } from 'react'
import { FormInput, Button } from '../../Components'
import styles from './NewPostContainer.css'
import { connect } from 'react-redux'
import { addPost } from '../../Redux'
  
export default class NewPostContainer extends Component {  
  PropTypes: {
  }
    
  addPost(){
      var title = document.getElementById("title");
      var details = document.getElementById("details");
      var time = Date();
      this.props.dispatch(addPost(title.value,details.value,time,this.props.id == ""? "Anonymous" : this.props.id));
      
      title.value="";
      details.value="";
      
      document.getElementById("modal-createPost").style.display = "none";
  }    
    
  closeModal(event){
      event.target.parentElement.parentElement.style.display = "none";
  }
  render() {
    return (
      <div className="modalWrap" id="modal-createPost">   
        <div className="newPostWrapper">
           <i className="fa fa-times fa-lg close-modal" onClick={this.closeModal.bind(this)}>
              </i>
            <h2 className="newPostTitle">{"Create a new Post"}</h2>
            <div className="author-desc">
                {
                    this.props.isAuthed? "You will be posting this as " + this.props.id + ".": "Sign in or Continue to create this post anonymously."
                }
            </div>
            <FormInput type="text" name="Title"/>
            <FormInput type="textarea" name="Details"/>
            <Button text="Submit" onClick={this.addPost.bind(this)} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    posts: state.posts,
    isAuthed: state.users.isAuthed,
    id: state.users.id
  }
}

export default connect(mapStateToProps)(NewPostContainer)