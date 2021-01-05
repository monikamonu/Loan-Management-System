import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import NavBar from '../NavBar';
import {Redirect} from 'react-router-dom';
import { Avatar,Grid } from '@material-ui/core';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
//  import './Login.css';

 

export default class Login extends Component {

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
            return <Redirect to="/makeLoan"></Redirect>
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
    //   const image={
    //     backgroundImage:"url(https://cdn.pixabay.com/photo/2018/07/24/18/30/online-banking-3559760__340.jpg)",
    //     backgroundSize: "cover",
    //     width:"800px",
    //     height:"800px",
    // //     marginTop: "auto",
    // // paddingTop: "0%",
    //   }
    const paperStyle = {padding:20,height:'60vh',width:280,margin:"20px auto"}
    const avatarStyle = {backgroundColor:'green'}
        
        return (
            <div>
              <NavBar/>
<div className="image">
{/* <div className="image" style={image}> */}
<div className="container" style={container} >

 {/* <Grid>
   <Paper elevation = {10} style={paperStyle}>*/}
                 <form className="admnLogForm" onSubmit={this.submit} > 
                <Grid align="center"> 
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h3 >Login</h3>
                </Grid>
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
                <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="Success"
          />
        }
        label="Remeber me"
      /><br/>
<button type="submit"className="btn btn-success" id="Login" onClick={this.onSubmit}>Login</button> 
<Link to ="/Register">Create New Account</Link>
            </form>
            {/* </Paper>
            </Grid>
             */}
      </div>
      </div>
     </div>
                
        )
    }
    }
