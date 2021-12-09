import React from 'react';
import "../App.css";
import { useState } from 'react';
import { Button, Card, CardActionArea, Typography, CardContent } from "@material-ui/core";
import Searchbar from "./Searchbar";



const Ui = () => {

        const [post, setPost] = useState("")
        const [list, setList] = useState([])
        const [bar, setBar] = useState(false);
        const [comment, setComment] = useState("");

        const Searchcomment = (event) => {
            setComment(event.target.value);
        }

        const SearchBar = () => {
            setBar(!bar);
        }

        const SetList = (event) => {
            setList(event.target.value)
        }
        const ListOpen = () => {
            setList((olditems) => {
                return [post, ...olditems]
            })
        }
        return ( <
            >
            <
            div className = "appcss" >
            <
            div >
            <
            div className = "left" >
            <
            h2 className = "facebookheading" > Facebook < /h2> <
            ul >
            <
            li > Home < /li> <
            li > Feeds < /li> <
            li > News < /li> <
            li > Help and Support < /li> <
            /ul> <
            /div> <
            /div> <
            div className = "middle" >
            <
            div >
            <
            input type = "text"
            placeholder = "Post your felling"
            id = "inputtext"
            value = { post }
            onChange = {
                (event) => { setPost(event.target.value) } }
            /> <
            div >
            <
            h4 > < Button id = "Buttonone"
            onClick = { SearchBar } > Emoji < /Button><Button id="Buttontwo" onClick={ListOpen}>Post</Button > < /h4> <
            /div> <
            Searchbar number = {
                bar ? < input type = "text"
                placeholder = "Search emoji"
                val = { comment }
                />: null}/ >
                <
                div > {
                    list.map((val, id) => {
                        return ( <
                            >
                            <
                            div id = "Card" >
                            <
                            CardActionArea >
                            <
                            Card >

                            <
                            Typography >
                            Deepesh Giri <
                            /Typography>      

                            <
                            CardContent > { val } <
                            /CardContent> <
                            /Card> <
                            /CardActionArea>  <
                            /div> <
                            />        
                        )
                    })
                } <
                /div>      <
                /div> <
                div >
                <
                /div>     <
                /div>     <
                div >


                <
                /div>      



                <
                /div> <
                />  
            )
        }
        export default Ui