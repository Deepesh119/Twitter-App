import React from 'react'
import "../App.css";
import {CardContent,Card, Typography} from '@material-ui/core';
import { useState,useEffect } from 'react';
import { FaHeart,FaRetweet} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {AiFillDelete} from "react-icons/ai";
import { Gettweet } from '../Apis/apis';
import Comment from './comment';


const Feeds = () => {
  const[posts,setPosts]=useState([]);
  const [showcomment,Setshowcomment] = useState(false);
  
  const Commenting =()=>{
    Setshowcomment(!showcomment);
  }


   const fetchPost = async ()=>{
       
        const {data,status} = await Gettweet()
        setPosts(data)
        console.log(setPosts)
        
    }
    useEffect(() => {
        fetchPost()
        return () => {
            
        }
    }, [])


    

    return (
      <>
      {posts.map((val,id)=>{
        return (<div>
             <Card sx={{ maxWidth: 345 }}>         
                  <CardContent>
                    <h2>{val.id}<img src={val.avatar} className="imageheight" alt="photos" /> {val.name}</h2>
                      <Typography gutterBottom variant="h5" component="div">
                      {val.article}
                      </Typography>
                      <Typography>
                        
                      </Typography> 
                  </CardContent>          
                  <CardActionArea>
                    <CardActions>
                      <Button>
                        <FaRetweet/>
                      </Button>
                      <Button onSelect={val.id} onClick={Commenting}>
                        
                        <BiCommentDetail />
                      </Button>
                      <Button>
                        <FaHeart/>
                      </Button>
                      <Button>
                        <AiFillDelete/>
                      </Button>   
                    </CardActions>
                  </CardActionArea>
                    
                </Card>
                <Comment number= {showcomment ? <input type="text" placeholder="Comment" className="CommentingIcon" />:null}/>
        </div>)
      })} 
      </>  
    )
}

export default Feeds;
