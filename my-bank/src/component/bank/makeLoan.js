import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class makeLoan extends Component {
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
<div className="row p-2 center" style={{marginLeft:'25%'}}>
                    <div className="col-10">
                   
                    <div class="card text-center col-8 m-3 p-3 card_section position_center">
                        <div className="card-header col-12 text-info">
                        <h3>Please Fill in the following details...</h3>
                        </div>
                        <div className="card-body m-2 p-2">
                        <form>
                        <div class="form-row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="First name"/>
                            </div>
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Last name"/>
                            </div>
                        </div> 
                            
                            <div className="row m-1 p-1">
                                <label class="form-check-label m-2">   Gender :  </label> <br/>
                                <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="gender"/> Male
                                    </label>
                                    </div>
                                    <div class="form-check-inline">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="gender"/> Female
                                    </label>
                                    </div>
                                    <div class="form-check-inline ">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="gender" /> Other
                                    </label>
                                    </div>
                            </div>

                            <div class="form-group">
                                <input type="email" placeholder="Enter ur Email " class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        
                            <div class="form-row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Enter ur Aadhar no"/>
                            </div>
                            <div class="col">
                            <input type="text" class="form-control" placeholder="Enter ur Phone no"/>
                            </div>
                        </div> <br/>

                        <div class="form-group">
                        <textarea class="form-control" rows="3" placeholder="Enter ur Address. " id="comment"></textarea>
                        </div> 

                        <div class="form-row  center">
                           
                            <div class="col">
                                <select>
                            <option value="HomeLoan">HomeLoan</option>
                            <option value="VehicleLoan">VehicleLoan</option>
                            <option value="BusinessLoan">BusinessLoan</option>
                            </select>
                            <input type="submit" value="submit"></input>
                            </div>
                        </div>  <br/>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
</div>
        )
    }
}
