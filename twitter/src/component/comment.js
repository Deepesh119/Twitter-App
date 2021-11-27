import React from 'react';
import { useState } from 'react';

const Comment = (props) => {
    return (
        <>
        <div>
           {props.number}{props.id}
        </div>
        </>
    )
}

export default Comment;
