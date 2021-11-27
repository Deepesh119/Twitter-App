import React from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import {Link} from "react-router-dom";


function Page (){
    return( 
        <>
        <div className="ziddi"> <h2> Dil hai Ziddi</h2>
            </div>
    <div id="id_one">
      
    <div className="class_class">
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="SHERSAH" src="https://tse1.mm.bing.net/th?id=OIP.lEqxvdImR6IP4hTTGZEC5AHaF7&pid=Api&P=0&w=250&h=250"></img>
            </CardContent>
            <CardActions>
                <Button className="button_incline"><Link to="/cardone">CLICK TO PLAY </Link></Button>
            </CardActions>
        </Card>
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="2 STATE" src="https://tse1.mm.bing.net/th?id=OIP.vQWf9KaqL6KRxlohP1K5sgHaFj&pid=Api&P=0&w=250&h=250"></img>
            </CardContent>
            <CardActions>
                <Button className="button_incline"> <Link to="/cardtwo">CLICK TO PLAY </Link></Button>
            </CardActions>
        </Card>
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="Darshan" src="https://sdlhivkecdnems01.cdnsrv.jio.com/c.saavncdn.com/editorial/DarshanRavalSings_20210216161144_250x250.jpg"></img>
            </CardContent>
            <CardActions>
                <Button className="button_incline"> <Link to="/cardthree">CLICK TO PLAY </Link></Button>
            </CardActions>
        </Card>
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="ELLISH" src="https://tse2.mm.bing.net/th?id=OIP.g8CFwX-KQsbVhZsASEKOMgHaKX&pid=Api&P=0&w=550&h=200"></img>
            </CardContent>
            <CardActions>
                <Button className="button_incline"> <Link to="/cardfour">CLICK TO PLAY </Link></Button>
            </CardActions>
        </Card>
    </div>
  
  </div>
  </>
    )
}
export default Page;