import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class LoanAproval extends Component {
    constructor(props){
  super(props);
  this.state ={
    custState:[]
  }
  this.deleteCustomer = this.deleteCustomer.bind(this);

}
 deleteCustomer = (cid) => {
  if (window.confirm('Are you sure to delete this record?')) {
  axios.delete(`http://localhost:8080/cust_info/${cid}`)
  .then((res) => {
      console.log('Beneficiaries successfully deleted!')
      alert('Deleted succesfully')
      this.setState({
          custState: this.state.custState.filter(customer => customer.cid !== cid)
      })
  }).catch((error) => {
      console.log(error)
  })
}}

  
  componentDidMount() {
    axios.get(`http://localhost:8080/cust_info`)
      .then((res)=>{
        console.log(res.data);
        this.setState({
          custState:res.data.customer
        });
        console.log(this.state.custState);
      }).catch(function(error){
        console.log(error);

      })
  }

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
      <ul className="navbar-nav ml-auto">
      <li class="nav-item7 active">
        <Link class="nav-link" to="/">Logout</Link>
      </li>
      </ul>
  </div>
</nav>  
                <div class="wrapper">
    <div class="sidebar">
        <h2>Admin</h2>
        <ul>
            <li><Link to="/adminHome">Home</Link></li>
            <li><Link to="/LoanAproval">LoanAproval</Link></li>
            <li><Link to="/LoanCreate">LoanCreate</Link></li>
            <li><Link to="/LoanEdit/:cid">LoanEdit</Link></li>
            <li><Link to="/PostNews">PostNews</Link></li>
        </ul> 

      </div>
            </div>
            
            <h1 style={{marginLeft:'30%'}}>Customer Details</h1>
       {/* <Link to={"/LoanCreate"}><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">
Add customer
</button></Link> */}
<div className="col-9" style={{marginLeft:'73%'}}>
<Link to={"/LoanCreate"}><button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false">Add customer
</button></Link>
</div>
            <table class="table" style={{width:'10%',height:'10%',alignItems:'center',marginLeft:'20%',border:'black'}}>
  <thead class="table-dark">
    <tr>
      <th scope="col">cid</th>
      <th scope="col">firstname</th>
      <th scope="col">lastname</th>
      <th scope="col">age</th>
      <th scope="col">phno</th>
      <th scope="col">email</th>
      <th scope="col">address</th>
      {/* <th scope="col">custLoanid</th> */}
      <th>action</th>
    </tr>
  </thead>
  <tbody>

  {this.state.custState.map(data=>{
           return (
            <tr class="table-primary table-hover">
           <td>{data.cid}</td>
            <td>{data.firstname}</td>
            <td>{data.lastname}</td>
            <td>{data.age}</td>
            <td>{data.phno}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
            {/* <td>{cust.custLoanid}</td> */}
            <td>
            {/* <Link to={"/LoanCreate"}><Button size="sm" style={{ cursor:"pointer"}} className="btn btn-primary">Add</Button></Link> */}
             <Link to={"/LoanEdit/"+data.cid}><Button size="sm" style={{ cursor:"pointer",}} className="btn btn-primary">Update</Button></Link>
             <Button size="sm" onClick={() => this.deleteCustomer(data.cid)} className="btn text-danger far fa-trash-alt" style={{marginTop:'4%'}}>Delete</Button>
             {/* <a className="btn text-primary">
               <i className="fas fa-pencil-alt"></i>
             </a> */}
            </td>
                                                               
          </tr>
          )}

   ) }
          </tbody>
          </table>
  
            </div>
        )
    }
}
