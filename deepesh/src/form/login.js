import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


const Login = () => {
    return (
        <div className="Login_form" >
            <form>
<div >
    <label for="inputEmail3" className="Login_form_one ">Email</label>
     <div className="Login_form_one ">
       <input type="email" className="Login_form_one " id="inputEmail3"/>
     </div>
    </div>
    <div >
    <label for="inputPassword3" className="Login_form_one ">Password</label>
    <div>
      <input type="password" className="Login_form_one " id="inputPassword3"/>
    </div>
    </div>
    <button type="submit" className="Login_form_one "><Link to="/">Sign in</Link></button>
    </form>
</div>
    )
}

export default Login;
