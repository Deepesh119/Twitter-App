import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Register = () => {
    return (
        <div className="Login_form">
            <form class="row g-3">
  <div class="Login_form_one ">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="Login_form_one ">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  
 
  <div class="Login_form_one ">
    <label for="inputCity" class="form-label">Country</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="Login_form_one ">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      
    </select>
  </div>
  
  <div class="Login_form_one ">
    <div class="Login_form_one ">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="Login_form_one ">
    <button type="submit" class="btn btn-primary"><Link to="/Login">Sign in </Link></button>
  </div>
</form>
        </div>
    )
}

export default Register;





