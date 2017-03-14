import React, { Component } from 'react'
import { Router, browserHistory,Route, hashHistory, IndexRoute } from 'react-router'
import { HomeContainer, MainContainer, PostContainer } from '../Containers'

    
const routes = (  
  <Router history = {browserHistory}>
    <Route path="/" component={MainContainer}>
      <IndexRoute component={HomeContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/post" component={PostContainer} />
    </Route>
  </Router>
)

export default routes