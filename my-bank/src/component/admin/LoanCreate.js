import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
// import Form from 'react/bootstrap/Form';
// import Button from 'react/bootstrap/Button'

export default class LoanCreate extends Component {
    constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeCid = this.onChangeCid.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePhNo = this.onChangePhNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    // this.onChangeCustLoanId = this.onChangeCustLoanId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    // this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      custLoanId:'',
     firstname:'',
     lastname:'',
     age:'',
     phno:'',
     email:'',
     address:'',
    //  custLoanid:''
    }
  }
  onChangeCid(e) {
    this.setState({ custLoanId: e.target.value })
  }

  onChangeFirstName(e) {
    this.setState({ firstname: e.target.value })
  }
  onChangeLastName(e) {
    this.setState({ lastname: e.target.value })
  }
  onChangeAge(e) {
    this.setState({ age: e.target.value })
  }
  onChangePhNo(e) {
    this.setState({ phno: e.target.value })
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeAddress(e) {
    this.setState({ address: e.target.value })
  }
  // onChangeCustLoanId(e) {
  //   this.setState({ custLoanid: e.target.value })
  // }
onSubmit(e) {
    e.preventDefault();

    const customerObject = {
      // cid: this.state.cid,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      age: this.state.age,
      phno: this.state.phno,
      email: this.state.email,
      address:this.state.address,
      custloanid:this.state.custLoanId
          };
          console.log(customerObject);
axios.post('http://localhost:8080/cust_info/', customerObject)
      .then((res)=>{
        console.log(res.data)
        // alert(res.data.message);
        alert('Beneficiaries details added Successfully');
      }).catch((error) => {
          console.log(error)
      });

    this.setState({ firstname:'',lastname:'',age:'',phno:'',email:'',address:'',custLoanId:'' })
    // Redirect to Student List 
    this.props.history.push('/LoanAproval')
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
            <div className="col-10" style={{marginLeft:"15%"}}>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">

                            <div className="jumbotron mt-5">
      <div>
        <h3>Customer details</h3>
        <form onSubmit={this.onSubmit}>

        <div className="form-row">
            <div className="col">
              <label htmlFor="cid">cid<span className="required text-danger">*</span></label>
              <input type="text" required name="custLoanId" id="cid" value={this.state.custLoanId} onChange={this.onChangeCid}   className="form-control" />
            </div>
          <div className="form-row">
            <div className="col">
              <label htmlFor="firstName">First Name<span className="required text-danger">*</span></label>
              <input type="text" required name="firstname" id="firstName" value={this.state.firstname} onChange={this.onChangeFirstName}   className="form-control" />
            </div>

            <div className="col">
              <label htmlFor="lastName">Last Name<span className="required text-danger">*</span></label>
              <input type="text" required 
              name="lastname" id="lastName"  value={this.state.lastname} onChange={this.onChangeLastName} className="form-control" />
              </div>
          </div>

          <div className="form-row">
            <div className="col">
            <label htmlFor="age">Age<span className="required text-danger">*</span></label>
            <input type="text"  name="age" 
            value={this.state.age} onChange={this.onChangeAge} 
            id="age"  className="form-control" />
            </div>

            <div className="col">
            <label htmlFor="Phno">Phno<span className="required text-danger">*</span></label>
            <input type="text"  name="phno" maxLength="10"
            value={this.state.phno} onChange={this.onChangePhNo} 
            id="phno"  className="form-control" />
            </div>

            <div className="col">
              <label htmlFor="email">Email <span className="required text-danger">*</span></label>
              <input type="text" name="email" id="email" 
              value={this.state.email} onChange={this.onChangeEmail} 
              maxLength="30"   className="form-control" placeholder="ex: abc@gmail.com" />
            </div>
        
            <div className="col">
              <label htmlFor="address">Address<span className="required text-danger "></span></label>
              <input type="text" className="form-control" name="Address"
              value={this.state.address} onChange={this.onChangeAddress} placeholder="Address"
                id="Address" />
          </div>
          
             </div>
             <div className=" text-left ">
                            <button type="submit" className="btn btn-outline-success m-2 p-2"> Submit</button>
                            {/* <button type="reset" className="btn btn-outline-info m-2 p-2"> Reset</button> */}
                       </div>
                       </div>
       </form>
      </div>
     </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
            </div>        

        );
    }
}
