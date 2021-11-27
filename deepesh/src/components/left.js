import React from 'react';
import { FaSpotify, FaHome, FaSistrix, FaStackOverflow, FaPlusSquare, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


const left = () => {
    return (

        <
        div className = "left" >
        <
        h3 >

        <
        FaSpotify id = "icon_spotify" / >
        <
        /h3> <
        h1 id = "heading" > Spotify < /h1> <
        h3 className = "heading" >
        <
        Link to = "/Home" > < FaHome / > Home < /Link> <
        /h3> <
        h3 className = "heading" >
        <
        Link to = "/search" > < FaSistrix / > Search < /Link> <
        /h3> <
        h3 className = "heading" >
        <
        Link to = "/library" > < FaStackOverflow / > Your Library < /Link> <
        /h3> <
        h3 className = "heading_one" >
        <
        Link to = "/Playlist" > < FaPlusSquare / > Create Playlist < /Link> <
        /h3> <
        h3 className = "heading" >
        <
        Link to = "/Liked" > < FaRegHeart / > Liked Song < /Link> <
        /h3> <
        h4 className = "heading_two" >

        Cookies <
        /h4> <
        h4 className = "heading_two_one" >
        Privacy Policy <
        /h4> <
        /div>
    )
}

export default left;