import React from 'react';
import Card from '@material-ui/core/Card';
import { Button, CardActions } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import "../App.css";

const Liked = () => {
    return (
        <div>
        <Card className="card_one" style={{width:"300px",border:"2px solid black",margin:'45px',background:'red'}}>
            <CardContent>
                <img text="BELLIE-ELLISH" src="https://sdlhivkecdnems01.cdnsrv.jio.com/c.saavncdn.com/editorial/DarshanRavalSings_20210216161144_250x250.jpg"></img>
            </CardContent>
            <CardActions>
                <Button className="button_incline"> CLICK TO PLAY</Button>
            </CardActions>
        </Card>
        </div>
    )
}
export default Liked;
