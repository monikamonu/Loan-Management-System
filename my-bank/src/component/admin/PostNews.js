import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class PostNews extends Component {
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
                <div className="row p-2">
                    <div className="col-2"></div>
                    <div className="col-10">
                       {/* <h1>Post News page </h1> */}
                       <div class="card text-center col-8 m-3 p-3 card_section">
                            <div className="card-header col-12">
                            <h3> Fill Latest News details...</h3>
                            </div>
                             <div className="card-body m-2 p-2">
                                <form>
                                    <div class="form-row">
                                        <div class="col">
                                        <input type="text" class="form-control" placeholder="Write News HeadLine"/>
                                        </div>   
                                    </div>
                                    <br/> 
                                    <div class="form-group">
                        <textarea class="form-control" rows="5" placeholder="Write the Details.. " id="comment"></textarea>
                        </div>  
                                </form>
                        </div>
                        
                       <div className="card-footer text-left">
                            <button type="submit" className="btn btn-outline-info"> Post News </button>
                       </div>
                        </div>
</div>
</div>
            </div>
        )
    }
}
