import { Button } from '@material-ui/core';
import React from 'react';
import "../App.css";

const Searchbar = () => {
    return (
        <div className="searchbaroption">
          <input id="searchkro" type="text" placeholder="search"/>
          <Button id="buttonhumein"> GO </Button>
            
        </div>
    )
}

export default Searchbar ;