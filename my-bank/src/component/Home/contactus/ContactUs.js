import React, { Component } from 'react'
import NavBar from '../NavBar'

import './ContactUs.css'

export default class ContactUs extends Component {
    render() {
        return (
            <div>
             <NavBar/>
                <div>
            <div class="container" style={{borderColor:'black',marginTop:'5%'}}>
  <div style={{textAlign:'center'}}>
    <h2>Contact Us</h2>
    <p>If you any queries ContactUs</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="/assets/contact-us-1769323__340.jpg" style={{width:'100%'}}/>
    </div>
    <div class="column">
      <form action="/">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>
        <label for="country">branch</label>
        <select id="country" name="branch">
          <option value="banglore">Banglore</option>
          <option value="Tamilnadu">TamilNadu</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </select><br/>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'170px'}}></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
</div>
</div>
        )
    }
}
