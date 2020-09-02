import React from 'react';
import './style.css'

const Comment = (props) => {
    return (
        <>
            <p>{props.text}</p>
        </>
    );
}

export default Comment;