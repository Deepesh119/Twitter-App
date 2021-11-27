import React from 'react';
import './App.css';
import Register from './pages/register';
import Login from './pages/login';
import { BrowserRouter, Route } from 'react-router-dom';
import User from './pages/user';

function App() {
    return ( <
        div className = "App" >
        <BrowserRouter >
        <switch >
        <Route path = { '/' } exact component = { User }/> 
        <Route path = { '/Register' } component = { Register }/> 
        <Route path = { '/Login' } component = { Login }/>
         </switch>
          </BrowserRouter> 
        </div>
    );
}

export default App;