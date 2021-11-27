import React from 'react';
import "../App.css";
import Dummy from '../component/Dummy'; 


const Right = () => {
    return (
        <>
        <div className="InsideRight">
            <div className="Inputclass"> <input type="text" placeholder="Search"/></div>
            <div className="Inputclassone">
                <h3 className="Insideonemarginone"><b>What's Happening</b></h3>
            </div>
            <div className="Advertisement">
              <h3> <strong> Accounts you may know</strong></h3>
            </div>
            <Dummy/>
        </div>
       </> 
    )
}

export default Right ;
 