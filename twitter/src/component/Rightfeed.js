import React from 'react'; 
import "../App.css";
import { useState } from 'react';
import {CardContent,Card, Typography} from '@material-ui/core';
import { FaHeart,FaRetweet} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {AiFillDelete} from "react-icons/ai";



const Rightfeed = () => {
    const[apis,setApis]=useState([]);

   const fetchApis = async ()=>{
        const {val,status} = await  Petstore();
        console.log(val)
        setApis(val)
    }
    useEffect(() => {
        fetchApis()
        return () => {
            
        }
    }, [])
    return (
    <>
    {apis.map((data,id)=>{
        return(
            
        <Card sx={{ maxWidth: 345 }}>         
                  <CardContent>
                    
                      <Typography gutterBottom variant="h5" component="div">
                      {data.avatar} {data.name}
                      </Typography>
                      <Typography>
                         {data.article} 
                      </Typography> 
                  </CardContent>          
                  <CardActionArea>
                    <CardActions>
                      <Button>
                        <FaRetweet/>
                      </Button>
                      <Button >
                        <BiCommentDetail />
                      </Button>
                      <Button>
                        <FaHeart/>
                      </Button>
                      <Button >
                        <AiFillDelete/>
                      </Button>
                     </CardActions>
                  </CardActionArea> 
                </Card>
        
    )})}
    </>
    )
}

export default Rightfeed ;
