import React from 'react';
import { Link } from 'react-router-dom'
import "../user.css";

const User = () => {
    return ( <
        div >
        <
        div className = "hahaha" >
        <
        h5 id = "font_style" > Surfer Paradise < /h5> <
        /div> <
        div className = "Entry" >
        <
        /div> <
        div className = "Entry_point" >
        <
        div >
        <
        button > < Link to = "/register" > REGISTER < /Link></button >
        <
        /div> <
        div >
        <
        button > < Link to = "/login" > LOGIN < /Link> </button >
        <
        /div>  <
        /div> <
        /div> 
    )
}

export default User;