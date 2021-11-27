import React from 'react';
import "./App.css";
import { useState } from 'react';
import {AiFillPlusCircle} from "react-icons/ai";
import Todolist from './todolist';

const App = () => {
  const [items,setItems] = useState(" ");
  const[list,setList] = useState([]);

  const SetList = (event) =>{
        setItems(event.target.value)
}

const listofitems = () =>{
   setList((olditems)=>{
     return ([...olditems,items])
   })
   setList("");
  }

const DeleteList = (id)=>{
    console.log("Deleted");
    setList((olditems)=>{
        return olditems.filter((arrElem,index)=>{
         return index !== id ;
        })
    })
}


  return(
    <>
    <h1 className="coloroftopheading "> HELLO! Write Your Task Here</h1>
    <div className="parents">
      <div className="children_one">
        <div className="children_one_one">
        <input type="text" value={items}  onChange={(event)=>{setItems(event.target.value)}}/><button onClick={listofitems} ><AiFillPlusCircle/></button>
       
        </div>
        <div className="listofitem">
          <h2 className="backgroundcolorshouldbegievn"> Tasks </h2>
          <ol>
            {items.map((itemsval,index)=>{
           return(
             <>
            <Todolist 
            key={index}
            id={index}
            text={itemsval}
            onSelect={ listofitems}
            />
            </>
            )})};
          </ol>
        </div>
      </div>
    </div>
   </> 
  )
}
export default App ;

