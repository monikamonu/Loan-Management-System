import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class TransactionList extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
<table class="table" style={{borderColor:"black",width:"700px",marginLeft:"20%",marginRight:"30%",marginTop:"10%",color:'white'}}>
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">DATE</th>
      <th scope="col">Amount</th>
      <th scope="col">Interest</th>
      <th scope="col">Balalnce</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>19/12/2018</td>
      <td>15,00,000</td>
      <td>20,000</td>
      <td>14,50,000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>21/01/2019</td>
      <td>15,00,000</td>
      <td>24,000</td>
      <td>14,30,000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>22/02/2019</td>
      <td>15,00,000</td>
      <td>19,940</td>
      <td>14,19,000</td>
    </tr>

    <tr>
      <th scope="row">4</th>
      <td>26/07/2019</td>
      <td>15,00,000</td>
      <td>15,564</td>
      <td>14,00,000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>30/08/2019</td>
      <td>15,00,000</td>
      <td>15,764</td>
      <td>13,80,000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>30/09/2019</td>
      <td>15,00,000</td>
      <td>15,764</td>
      <td>13,50,900</td>
    </tr>
    
  </tbody>
</table>
</div>

            
        )
    }
}
