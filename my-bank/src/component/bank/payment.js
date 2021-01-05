import React, { Component } from 'react';
//import './payment.css';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

export default class payment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const container={
            marginTop:"100%",
            width:"500px",
            padding:"10px",
            position:"center", 
            justifyContent:"center",  
            top:"50%"    
            }
            // onSubmit=()=>{
                
            //    this.props.history.push('/TransactionSuccesful');
            // }
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
                <div class="container mt-1 d-flex" style={container}>
        <div class="card " style={{backgroundColor:'primary'}} >
            <div class="d-flex justify-content-between px-3 pt-4">
                <span class="pay">Pay amount</span>
                <div class="amount">
                    <div class="inner">
                        <span class="dollar">$</span>
                        <span class="total">999</span>
                    </div>
                </div>
            </div>
            <div class="px-3 pt-3">
                <label for="card number" class="d-flex justify-content-between">
                    <span class="labeltxt">CARD NUMBER</span>
                    <img src="assets/240_F_97001150_ICOeBF13dsWDsqHWOTCg2GwS87jA7Y9F.jpg" width="25" class="image"/>
                </label>
                <input type="number" name="number" class="form-control inputtxt" placeholder="8881 2545 2545 2245"/>
            </div>
            <div class="d-flex justify-content-between px-3 pt-4">
                 <div>
                     <label for="date" class="exptxt">Expiry</label>
                     <input type="number" name="number" class="form-control expiry" placeholder="MM / YY"/>
                 </div>
                 <div>
                    <label for="cvv" class="cvvtxt">CVV /CVC</label>
                    <input type="number" name="number" class="form-control cvv" placeholder="123"/>
                </div>
            </div>
            <div class="d-flex align-items-center justify-content-between px-3 py-4">
                <div>
                    <button type="button" class="btn btn-primary">Cancel</button>
                </div>
                <div>
                  <Link to="/TransactionSuccess"><button type="button" class="btn btn-primary" onClick={this.onSubmit}>Make Payment</button></Link>
                </div>

            </div>
        </div>
    </div>
            </div>
        )
    }
}
