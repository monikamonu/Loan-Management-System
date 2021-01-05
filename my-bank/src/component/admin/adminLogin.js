import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Avatar,Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


export default class adminLogin extends Component {
    constructor(props) {
        super(props)
        let loggedIn= false;
        this.state = {
             username:"",
             password:"",
             nameErr:"",
             pswdErr:"",
             loggedIn
        }
        
    }
    
   
     submit= (e)=>{
         e.preventDefault();
         this.setState({
            nameErr:"",
            pswdErr:""
        })
        if(this.valid()){
           alert("submitted")
           this.setState({
               loggedIn:true
           })
    
        }
     }
     valid(){
        
        if (this.state.username==="") {
            this.setState({
                nameErr:"*Name Required "
            })
            document.getElementById("adminUserName").style.borderColor="red";
        }
        else if (this.state.username.length<3) {
            this.setState({
                nameErr:"*Name Is Too Short"
            })
            document.getElementById("adminUserName").style.borderColor="red";
        }
        
    else  if (this.state.password==="") {
            this.setState({
                pswdErr:"*Password Required "
            })
            document.getElementById("adminPassword").style.borderColor="red";
        }
       else{
           return true
       }
    }
    
  
         
    render() {
      if(this.state.loggedIn){
            return <Redirect to="/adminHome"></Redirect>
        }

      const container={
        // padding:"16px",
         marginTop:"7%",
        width:"300px",
        height:"400px",
        boxshadow:"0 0 10px rgba(255,255,255,.3)",
        position:"center"
        
      }
      const heading={
        // position:"absolute",
        marginLeft:"25%"
      }
      const avatarStyle = {backgroundColor:'green'}
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
                <Link class="nav-link" to="/adminHome">
                  Logout
                </Link>
                </li>
      </ul>
  </div>
</nav>  
                 <div className="image">
{/* <div className="image" style={image}> */}
<div className="container" style={container} >
<Grid align="center"> 
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h3 >Login</h3>
                </Grid>
 
                 <form className="admnLogForm" onSubmit={this.submit} >
                {/* <h3 style={heading}>Login</h3> */}
                <div className="form-group">
                <input type="text" 
                className="form-control" 
                id="adminUserName"
                placeholder="UserName" 
                autoComplete="off"
                name="username"
                value={this.state.username}
                onChange={(e)=>{this.setState({username:e.target.value})}}
                 />
                <label className="errlabel">{this.state.nameErr}</label>
                </div>
                <div className="form-group">
                <input type="password" 
                className="form-control" 
                id="adminPassword"
                name="password"
                placeholder="Password"
                value={this.state.password}
                maxLength="10"
                onChange={(e)=>{this.setState({password:e.target.value})}}
                />
                 <label className="errlabel">{this.state.pswdErr}</label>
                </div>
<button type="submit"className="btn btn-success" id="Login" onClick={this.onSubmit}style={{width:"250px"}}>Login</button> 

            </form>
      </div>
      </div>
      </div>
        )
    }
}
