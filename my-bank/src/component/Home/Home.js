import React, { Component } from 'react'
// import {makeStyles} from '@material-ui/core/styles'
import NavBar from './NavBar'
import './Home.css';
// const useStyles = makeStyles((them)=>({}));

export default class Home extends Component{
    render() {
        return (
            <div >
                <div><NavBar/></div>
                <div className="bg_image"> 
                {/* <h1 style={{marginTop:'20%',marginLeft:'25%',marginRight:'10%'}}>Welcome To MY Home page</h1> */}
                <h1 className="text">Welcome to my Home page</h1>
            </div>
            </div>
        )
    }
}
