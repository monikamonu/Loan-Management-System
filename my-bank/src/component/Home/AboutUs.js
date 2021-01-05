import React, { Component } from 'react'
import NavBar from './NavBar'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
               <NavBar/>
               <div>
               <h1 style={{marginLeft:'30%'}}>Welcome About US!!</h1>
            <p>fast Loans is the largest Mortage Lender in india,Home Loans is the largest Mortgage Lender in India,
                 which has helped over 30 lakh families to achieve the dream of owning a home.</p>
                 <section class="about-content">
                 <div class="container">
                <div class="row">
                  <div class="col-lg">
                    <div class="card text-dark bg-info mb-3" style={{maxWidth: "30rem"}}>
                      <div class="card-body">
                        <h3 class="card-title">Our Values</h3>
                        <ul class="listing" style={{textAlign:'left'}}>
                            <li>Trust</li>
                            <li>Transparency</li>
                            <li>Integrity</li>
                            <li>Excellence</li>
                            <li>Good customer service</li>
                            <li>Plethora of options</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg">
                    <div class="card text-dark bg-info mb-3" style={{maxWidth: "30rem"}}>
                      <div class="card-body">
                        <h3 class="card-title">Value to customer</h3>
                        <p class="card-text">
                        <ul class="listing">
                            <li>Wide Product Range</li>
                            <li>Interest Calculation on Daily Reducing Balance</li>
                            <li>Low Interest Rates</li>
                            <li>Low Processing Fees</li>
                            <li>No Hidden Costs</li>
                            <li>No Pre-payment penalty</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                  <div class="col-lg">
                    <div class="card text-dark bg-info mb-3" style={{maxWidth: "30rem"}}>
                      <div class="card-body">
                        <h3 class="card-title">Our Presence</h3>
                        <p class="card-text">
                        <ul class="listing">
                            <li>24,000+ branches</li>
                            <li>56,000+ mini branches</li>
                            <li>1600+ member strong dedicated Sales Team</li>
                            <li>254+ Care centers across India</li>
                            <li>3+ care centers in Karnataka</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg">
                    <div class="card text-dark bg-info mb-3" style={{maxWidth: "30rem"}}>
                      <div class="card-body">
                        <h3 class="card-title">Recognitions</h3>
                        <p class="card-text">
                        <ul class="listing">
                            <li>Winner of the “Best Home Loan Provider “at the CNBZ Awaaz Real Estate Awards 2016</li>
                            <li>Winner of the “Best Home Loan Provider “at the Bankers summit 2017</li>
                        </ul>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </section><br></br>
               </div>
            </div>
        )
    }
}
