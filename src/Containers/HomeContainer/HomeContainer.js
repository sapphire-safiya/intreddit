import React, { Component } from 'react'
import styles from './HomeContainer.css'
import { Button } from '../../Components'
import { PostsContainer, PostContainer, Ctrls } from '../../Containers'
import * as _ from 'lodash'

export default class HomeContainer extends Component {

  onChange() {}
  componentDidMount(){
  }
  render() {
    return (
      <div className="homeContainer">
        <Ctrls />
        <PostsContainer />
        <PostContainer />
      </div>
    )
  }
}