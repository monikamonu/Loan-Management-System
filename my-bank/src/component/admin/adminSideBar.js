import React, { Component } from 'react'
import './adminSideBar.css';
import {Link} from 'react-router-dom';

export default class adminSideBar extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
    <div class="sidebar">
        <h2>Admin</h2>
        <ul>
            <li><Link to="/admin">Home</Link></li>
            <li><Link to="/LoanApproval">LoanApproval</Link></li>
        </ul> 
        <div class="social_media">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    
</div>
            </div>
        )
    }
}
