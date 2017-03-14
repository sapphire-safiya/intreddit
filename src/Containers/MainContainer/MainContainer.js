import React, { Component } from 'react'
import styles from './MainContainer.css'
import { Nav } from '../../Containers'

export default class MainContainer extends Component {

  onChange() {}

  render() {
    return (
      <div className="MainContainer">
        <Nav />
        {this.props.children}
      </div>
    )
  }
}