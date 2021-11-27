import React from 'react';
import "../right.css";
import { FaAngleLeft,FaAngleRight} from "react-icons/fa";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Page from '../page/page';
import {Link} from 'react-router-dom';

function Top() {
    return (
      
        <div>
          <div className="right_top">
            <h5 className="right_color"> <FaAngleLeft className="size"/><FaAngleRight className="size"/></h5>
            <ButtonGroup disableElevation variant="contained" color="primary" id="button_ui">
            <Button id="one"><Link to="/Register">SIGN UP </Link></Button>
            <Button><Link to="/Login">Log-In </Link></Button>
            </ButtonGroup>
          </div> 
          <div className="grey">
              <Page className="card_one"/>
          </div>
        </div>
        
    )
}

export default Top;

