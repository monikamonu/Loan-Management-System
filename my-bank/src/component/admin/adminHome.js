import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './adminHome.css';

export default class adminHome extends Component {
  constructor(props){
    super(props);
    this.state={
      title: 'Enter the employee details',
      act: 0,
      index: '',
      datas: []
    }
  }
  componentDidMount(){
    this.refs.name.focus();
  }
  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;
    let designation = this.refs.designation.value;

    if(this.state.act === 0){   //new
      let data = {
        name, address,designation
      }
      datas.push(data);
    }else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
      datas[index].designation = designation;
    }    

    this.setState({
      datas: datas,
      act: 0
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;
    this.refs.designation.value = data.designation;

    this.setState({
      act: 1,
      index: i
    });

    this.refs.name.focus();
  }  
  
    render() {
      let datas = this.state.datas;
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
                <div className="row p-2" >
                    <div className="col-2" >
                        {/* <LeftAdmin/> */}
                         </div>
                       <h1 className="fa fa-align-center" aria-hidden="true" style={{marginLeft:'20%'}}>wecome to admin page</h1>
                       
<div className="card-columns" style={{marginLeft:'20%'}} >
  <div className="card bg-primary" >
      
     <div className="card-body text-center">
      <p className="card-text">My Wallet </p>
      <p className="card-text">RS 32000</p>
    </div>
  </div>
  <div className="card bg-primary">
    <div className="card-body text-center">
      <p className="card-text">My Loan</p>
      <p className="card-text">20</p>
    </div>
  </div>
  <div className="card bg-primary">
    <div className="card-body text-center">
      <p className="card-text">Borrowers</p>
      <p className="card-text">10</p>
    </div>
    </div>
    </div> 
    </div>
    </div>
<div class="container" style={{width:"800px"}}>
<h2>{this.state.title}</h2>
<form ref="myForm" className="myForm">
          <input type="text" ref="name" placeholder="your name" className="formField" />
          <input type="text" ref="address" placeholder="your address" className="formField" />
          <input type="text" ref="designation" placeholder="designation" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="btn btn-success">submit </button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.name}, {data.address}, {data.designation}
              <button onClick={()=>this.fRemove(i)} className="btn btn-success">remove </button>
              <button onClick={()=>this.fEdit(i)} className="btn btn-success">edit </button>
            </li>
          )}
        </pre>
    </div>

            </div>
        )
    }
}
