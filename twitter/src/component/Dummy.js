import React from 'react';
import "../App.css";
import { Petstore } from '../Apis/apis';
import{useState,useEffect} from 'react';
import {Card,CardActionArea} from '@material-ui/core';

const Dummy = () => {
  const[array,setArray] = useState([]);

  const FetchArray = async() =>{
      const {data,my} = await Petstore()
      setArray(data)
    }
  useEffect(() => {
      FetchArray()    
      return () => {
          
      }
  }, [])  


    return (
      <>
        <div>
         {array.map((den)=>{
            return(
                <div className="Montylist">
                  <div className="margindalobhaiko"><Card><CardActionArea><h5><img src={den.avatar} alt="image" className="imageofright"/>{den.name}</h5></CardActionArea></Card></div>
                </div>
            )
          })}
          </div>  
    </>
    
    )

}

export default Dummy;
