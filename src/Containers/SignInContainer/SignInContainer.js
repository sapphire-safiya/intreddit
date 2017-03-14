import React, { Component, PropTypes } from 'react'
import { FormInput, Button } from '../../Components'
import styles from './SignInContainer.css'
import { connect } from 'react-redux'
import { authUser, unauthUser } from '../../Redux'
  
export default class SignInContainer extends Component {    
  PropTypes: {
  }

  signIn(){
      var user = document.getElementById("user");
      var password = document.getElementById("password");
      if(user.value=="admin" && password.value =="admin")
          {
              this.props.dispatch(authUser('Irfan Baqui'))
              if (document.getElementById('welcomeText')) {
                document.getElementById('welcomeText').style.display = "block"
              }
              document.getElementById("modal-signin").style.display = "none";
              
              user.value = '';
              password.value ='';
          }
  }   
 closeModal(event){
      event.target.parentElement.parentElement.style.display = "none";
  }
  render() {
    return (
      <div className="modalWrap" id="modal-signin">        
        <div className="signInWrapper">
            <i className="fa fa-times fa-lg close-modal" onClick={this.closeModal.bind(this)}>
              </i>
            <h2 className="signInTitle">Log In</h2>
            <FormInput type="text" name="User"/>
            <FormInput type="password" name="Password"/>
            <Button text="Log In" onClick={this.signIn.bind(this)} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      id: state.users.id
  }
}

export default connect(mapStateToProps)(SignInContainer)