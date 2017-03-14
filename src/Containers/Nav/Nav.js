import React, { Component, PropTypes } from 'react'
import styles from './Nav.css'
import { Button } from '../../Components'
import { SignInContainer } from '../../Containers'
import { connect } from 'react-redux'
import { authUser, unauthUser } from '../../Redux'

class Nav extends Component {
  PropTypes: {
    isAuthed: PropTypes.bool.isRequired
  }

  login() {
    if (!this.props.isAuthed) {
      document.getElementById("modal-signin").style.display = "block";
    } else {
      this.props.dispatch(unauthUser())
      var welcomeText = document.getElementById('welcomeText').style.display = "none"
    }
  }

  getText() {
    if (this.props.isAuthed) {
      return 'log out'
    } else return 'log in'
  }

  render() {
    return (
      <div className="header">

        <div className="headerText">
          <span>
            {"Intreddit"}
          </span>
        </div>

        <div className="login">
          <div id="welcomeText">
            {"Welcome " + this.props.id}
          </div>
          <Button text={this.getText()} classes="loginButton" ids="loginButton" onClick={this.login.bind(this)} />
        </div>
        <SignInContainer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthed: state.users.isAuthed,
    id: state.users.id
  }
}

export default connect(mapStateToProps)(Nav)