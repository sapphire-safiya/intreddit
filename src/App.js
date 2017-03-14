import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import routes from "./Config/Routes"
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { users, posts, comments } from './Redux'

const store = createStore(combineReducers({ users, posts, comments}));

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document.getElementById('main'))