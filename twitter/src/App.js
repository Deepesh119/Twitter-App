import React from 'react'
import Front from './Pages/Front';
import { BrowserRouter, Route } from 'react-router-dom';
import {Switch} from "react-router-dom";
import Final from './Inside/Final';

const App = () => {
  return (
  <>  
   <div> 
    <BrowserRouter>
    <Switch>
       <Route path = { '/' } exact component = {Front}/> 
       <Route path={'/Final'}  component ={Final}/>
    </Switch>  
    </BrowserRouter>
   </div>
  </>  
  )
}

export default App;

