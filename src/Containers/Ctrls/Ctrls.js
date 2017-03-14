import React, { Component } from 'react'
import styles from './Ctrls.css'
import { Button } from '../../Components'
import { NewPostContainer } from '../../Containers'
    
var isSignnedIn = false;

export default class Ctrls extends Component {

  componentDidMount() {
    var component = (document.getElementById('filter'));

    document.addEventListener("click", function(e) {
      if (component.style.display === "block" && e.target.className !== "filterDropdown"
                                              && e.target.className !== "filterWrapper"
                                              && e.target.className !== "isFilterDrop"
                                              && e.target.className !== "filterType") {
        console.log(e)
        component.style.display = "none";
      }
    });

  }

  displayMenu() {
    var component = (document.getElementById('filter'));
    console.log(component);
    if (component.style.display !== "block") {
      component.style.display = "block";
    } else {
      component.style.display = 'none'
    }
  }
    
  createNewPost(){
      document.getElementById("modal-createPost").style.display = "block";
  }     

  render() {
    return (
     <div>    
      <div className="ctrl">
        <div className="filter">
          <span className="filterHeader">{"posts from: "}</span>
          <div className="filterDropdown">
            <div className="filterWrapper" onClick={this.displayMenu.bind(this)}>
              <span className="filterType">{" past 24 hours  "}</span>
              <i className="fa fa-angle-down fa-lg">
              </i>
            </div>
            <ul className="isFilterDrop" id="filter">
              <li>{"past hour"}</li>
              <li>{"past day"}</li>
              <li>{"past week"}</li>
              <li>{"past month"}</li>
              <li>{"past year"}</li>
            </ul>
          </div>
        </div>
        <Button className="createButton" text="create" onClick={this.createNewPost.bind(this)} />
      </div>
        <NewPostContainer />
     </div>
    )
  }
}