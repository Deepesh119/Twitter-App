import React from 'react';
import { FaUser,FaTwitter,FaArchway,FaRegBell,FaRegEnvelope,FaRegCommentDots } from "react-icons/fa";
import {DiYii } from "react-icons/di";
import { Button } from '@material-ui/core';


const Left = () => {
    return (
        <>
        <div className="InsideLeft">
          <FaTwitter id="LeftTwitter"/>
         <ul>
           <li><FaArchway /></li>
           <li><strong>#</strong></li>
           <li><FaRegBell/></li>
           <li><FaRegEnvelope/></li>
           <li><FaUser/></li>
           <li><FaRegCommentDots/></li>
           <li><DiYii id="specialleft"/></li>
        </ul>
        </div>
        
       </> 
    )
}

export default Left;

 
