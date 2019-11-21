import React from 'react'

export default function MainContent(props) {
    return (<div className="postContainer">
        <p>{props.content}    </p>
        <img className="postImage" alt="postImage" src={props.image} />
    </div>
    )
}
