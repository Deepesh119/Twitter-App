import React from 'react';
import "../App.css";
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { AiFillFastBackward,AiFillCaretRight,AiFillFastForward} from "react-icons/ai";

const Cardfour = () => {
    return (
        <>
        <div className="music">
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
        <CardContent>
                <img text="ELLISH" src="https://tse2.mm.bing.net/th?id=OIP.g8CFwX-KQsbVhZsASEKOMgHaKX&pid=Api&P=0&w=550&h=200"></img>
        </CardContent>
        </Card>
        </div>
        <div className="musicplayer">
         <h1 className="height_one">   <AiFillFastBackward/> <AiFillCaretRight/> <AiFillFastForward/></h1>
        </div>
        </>
    )
}
export default Cardfour ;