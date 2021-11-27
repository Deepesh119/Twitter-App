import React from 'react';
import "../App.css";
import {CardContent,Card, Typography} from '@material-ui/core';
import { FaHeart,FaRetweet} from "react-icons/fa";
import {BiCommentDetail} from "react-icons/bi";
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {AiFillDelete} from "react-icons/ai";
import Feeds from '../component/feeds';
import { useState } from 'react';
import Comment from '../component/comment';

const Middle = ({post}) => {
  const [data,setData] = useState("")
  const [tweet,setTweet] = useState([])
  const [show,setShow]= useState(false); 
  
  const ShowComment =()=>{
    setShow(!show)
  }

  const SetTweet =(event)=>{
    setData(event.target.value);
  }
 
  const PostTweet=()=>{
    setTweet((olditems)=>{
      return [data,...olditems]
    })
   }

return (
    <>
        <div className="InsideMiddle">
            <div className="InsideChildOne">
                <h3><strong>Home</strong></h3>
            </div>
        <div className="InsideChildTwo">
              <h2 className="Headingtweet"><strong>D</strong></h2>
              <input id="placeholder" placeholder= "Whats is Happening" type="text" value={data} onChange={(event)=>{setData(event.target.value)}}  />
             <h3 className="buttonclass"> <button id="idbutton" onClick={PostTweet}>Tweet</button></h3>
        </div>
      <div className="Postbarone">
        {tweet.map((data,id)=>{
          return(
          <>  
           <ol>
              <li>    
                <Card sx={{ maxWidth: 345 }}>         
                  <CardContent>
                    <h2 className="Headingtweet"><strong>D</strong></h2>
                      <Typography gutterBottom variant="h5" component="div">
                        {data.id} DeepeshGiri@29
                      </Typography>
                      <Typography>
                         {data} 
                      </Typography> 
                  </CardContent>          
                  <CardActionArea>
                    <CardActions>
                      <Button>
                        <FaRetweet/>
                      </Button>
                      <Button onClick={ShowComment}>
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
                <Comment number= {show ? <input type="text" placeholder="Comment" className="CommentingIcon" />:null}/>
              </li>
            </ol>
          </>  
        )})}
           
      </div>
      <div>
      <Feeds/>
      </div>
  </div>
 </>
)}  

export default Middle;

