import React from 'react';
import "../App.css";
import Card from '@material-ui/core/Card';

import { CardContent } from '@material-ui/core';
import { AiFillFastBackward,AiFillCaretRight,AiFillFastForward} from "react-icons/ai";

const Cardtwo = () => {
    return (
        <>
        <div className="music">
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="2 STATE" src="https://tse1.mm.bing.net/th?id=OIP.vQWf9KaqL6KRxlohP1K5sgHaFj&pid=Api&P=0&w=250&h=250"></img>
            </CardContent>
         
        </Card>
        </div>
        <div className="musicplayer">
         <h1 className="height_one">   <AiFillFastBackward/> <AiFillCaretRight/> <AiFillFastForward/></h1>
        </div>
        </>
    )
}
export default Cardtwo ;