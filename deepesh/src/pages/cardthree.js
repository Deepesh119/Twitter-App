import React from 'react';
import "../App.css";
import Card from '@material-ui/core/Card';

import { CardContent } from '@material-ui/core';
import { AiFillFastBackward,AiFillCaretRight,AiFillFastForward} from "react-icons/ai";

const Cardthree = () => {
    return (
        <>
        <div className="music">
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="BELLIE-ELLISH" src="https://sdlhivkecdnems01.cdnsrv.jio.com/c.saavncdn.com/editorial/DarshanRavalSings_20210216161144_250x250.jpg"></img>
            </CardContent>
            
        </Card>
        </div>
        <div className="musicplayer">
         <h1 className="height_one">   <AiFillFastBackward/> <AiFillCaretRight/> <AiFillFastForward/></h1>
        </div>
        </>
    )
}
export default Cardthree ;