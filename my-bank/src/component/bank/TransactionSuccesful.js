import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class TransactionSuccesful extends Component {
    
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                  <a class="navBar-brand" href="#">
          <img src="https://tse1.mm.bing.net/th?id=OIP.492azWciznHm45olw25eXwHaF7&pid=Api&rs=1&c=1&qlt=95&w=143&h=114" width="30" height="30" alt=""></img>
        </a>
  <Link class="navbar-brand" href="#"><b>Loan details</b></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/makeLoan">makeLoan</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/TransactionList">TransactionList</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/payment">payment</Link>
      </li>

    </ul>
      <ul className="navbar-nav ml-auto">
      <li class="nav-item7 active">
        <Link class="nav-link" to="/">Logout</Link>
      </li>
      </ul>
  </div>
</nav>
                <h1>Transaction is Succesful!..</h1>
            </div>
        )
    }
}
