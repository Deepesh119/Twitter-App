import React from 'react'
import {AiOutlineClose } from "react-icons/ai";


const Todolist = (props) => {
    const DeleteList=(id)=>{
        console.log("Deleted");
        props.setList((olditems)=>{
            return olditems.filter((arrElem,index)=>{
             return index !== id ;
            })
        })
   }
    return (
    <>
    <div className="signcss">
        <button onClick={()=>{
            props.onSelect(props.id);
        }}><AiOutlineClose/></button>
        <li>{props.text}</li>
     </div>   
    </>
    )
}
export default Todolist ;