import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navBar-brand" href="#">
          <img src="https://tse1.mm.bing.net/th?id=OIP.492azWciznHm45olw25eXwHaF7&pid=Api&rs=1&c=1&qlt=95&w=143&h=114" width="30" height="30" alt=""></img>
        </a>
      <a class="navbar-brand" href="#">Loan Management System</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
   data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item  active">
        <Link class="nav-link" to="/ContactUs">ContactUs</Link>
      </li>
      <li class="nav-item  active">
        <Link class="nav-link" to="/AboutUs">AboutUs</Link>
      </li>

      </ul>
      <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <Link class="nav-link" to="/Login">
                  User
                </Link>
                </li>
                <li className="nav-item">
                <Link class="nav-link" to="/adminlogin">
                  admin
                </Link>
                </li>
                 </ul>
  </div> 
</nav>
            </div>
        )
    }
}
