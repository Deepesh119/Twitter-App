import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './form/login';
import Register from './form/register'; 
import Finalproject from './finalproject';
import Home from './pages/home';
import Searchbar from './pages/searchbar';
import Playlist from './pages/playlist';
import Liked from './pages/likedsongs';
import Library from './pages/library';
import Cardone from './pages/cardone';
import Cardtwo from './pages/cardtwo';
import Cardthree from './pages/cardthree';
import Cardfour from './pages/cardfour';


function App() {
  return (
    <div>
     
     <BrowserRouter >
        <switch >
        <Route path = { '/' } exact component = {Finalproject}/> 
        <Route path = { '/Register' } component = { Register }/> 
        <Route path = { '/Login' } component = { Login }/>
        <Route path={'/Home'} component={Home}/>
        <Route path={'/Search'} component={Searchbar}/>
        <Route path={'/Playlist'} component={Playlist}/>
        <Route path={'/Likedsongs'} component={Liked}/>
        <Route path={'/Library'} component={Library}/>
        <Route path={'/Cardone'} component={Cardone}/>
        <Route path={'/Cardtwo'} component={Cardtwo}/>
        <Route path={'/Cardthree'} component={Cardthree}/>
        <Route path={'/Cardfour'} component={Cardfour}/>
         </switch>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
