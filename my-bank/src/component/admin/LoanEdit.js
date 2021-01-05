import React, { Component } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

export default class LoanEdit extends Component {
    constructor(props) {
    super(props)
     this.onChangeCid = this.onChangeCid.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangePhNo = this.onChangePhNo.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeCustLoanId = this.onChangeCustLoanId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
    //  cid:'',
     firstname:'',
     lastname:'',
     age:'',
     phno:'',
     email:'',
     address:'',
     custLoanid:''
    }
  }
  componentDidMount() {
      console.log(this.props.match.params.cid);

    axios.get(`http://localhost:8080/cust_info/`+this.props.match.params.cid)
      .then((res) => {
          console.log(res.data);
        this.setState({
            cid:res.data.customer[0].cid,
          firstname: res.data.customer[0].firstname,
          lastname:res.data.customer[0].lastname,
          age:res.data.customer[0].age,
          phno:res.data.customer[0].phno,
          email: res.data.customer[0].email,
          address:res.data.customer[0].address,
          custLoanid:res.data.customer[0].custLoanid
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeCid(e) {
    this.setState({ custLoanid: e.target.value })
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
    e.preventDefault()

    const customerObject = {
        // cid:this.state.cid,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      age: this.state.age,
      phno: this.state.phno,
      email: this.state.email,
      address:this.state.address,
      custLoanid:this.state.custLoanid
          };
    console.log(customerObject);
    axios.put(`http://localhost:8080/cust_info/'${this.props.match.params.cid}'`, customerObject)
      .then((res) => {
        console.log(res.data.customer)
        alert('Beneficiaries successfully updated')
        console.log('customer successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/LoanAproval')
  }
  
  componentDidMount(){
  axios.get('http://localhost:8080/cust_info')
  .then(res => {
       console.log(res.data);
      this.setState({ customerObject: res.data.customer });
  })
  .catch(function (error) {
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
        <ul>
            <li><Link to="/adminHome">Home</Link></li>
            <li><Link to="/LoanAproval">LoanAproval</Link></li>
            <li><Link to="/LoanCreate">LoanCreate</Link></li>
            <li><Link to="/LoanEdit/:cid">LoanEdit</Link></li>
            <li><Link to="/PostNews">PostNews</Link></li>
        </ul> 
        </ul> 

      </div>
      </div>
      
               
<div className="row" style={{marginLeft:"15%"}}>
                            <div className="col-2"></div>
                            <div className="col-8">

                            <div className="jumbotron mt-5">
      <div>
        <h3>Edit/Update Customer detail</h3>

        

        <form onSubmit={this.onSubmit}>
        <div className="form-row">
            <div className="col">
              <label htmlFor="cid">cid<span className="required">*</span></label>
              <input type="text" required  id="cid" name="cid" value={this.state.cid} onChange={this.onChangeCid}   className="form-control" />
            </div>

          <div className="form-row">
            <div className="col">
              <label htmlFor="firstName">First Name<span className="required">*</span></label>
              <input type="text" required  id="firstName" name="firstname" value={this.state.firstname} onChange={this.onChangeFirstName}   className="form-control" />
            </div>

            <div className="col">
              <label htmlFor="lastName">Last Name<span className="required">*</span></label>
              <input type="text" required name="lastName"
               id="lastName"  value={this.state.lastname} onChange={this.onChangeLastName} className="form-control" />
              </div>
          </div>

          <div className="form-row">
            <div className="col">
            <label htmlFor="age">Age<span className="required">*</span></label>
            <input type="text" 
            value={this.state.age} onChange={this.onChangeAge} name="age"
            id="age"  className="form-control" />
            </div>

            {/* <div className="col">
              <label htmlFor="email">Email <span className="required"></span></label>
              <input type="text"  id="email" readOnly disabled
              value={this.state.email} onChange={this.onChangeUserEmail} name="email"
              maxLength="30" readOnly  className="form-control" placeholder="ex: abc@gmail.com" />
            </div> */} 
            <div className="col">
              <label htmlFor="phoneNumber">Phone Number<span className="required">*</span></label>
              <input type="text" className="form-control" name="phno"
              value={this.state.phno} onChange={this.onChangePhNo}  maxLength="10" placeholder="Phone Number"
                id="phoneNumber" />
          </div>
          <div className="col">
              <label htmlFor="Address">Address<span className="required">*</span></label>
              <input type="text" className="form-control" name="address"
              value={this.state.address} onChange={this.onChangeAddress} placeholder="Address"
                id="address" />
          </div>
          
             </div>
             <div className=" text-left ">
            <button type="submit" className="btn btn-outline-success m-2 p-2"> Update Beneficiaries </button>
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
        )
    }
}
