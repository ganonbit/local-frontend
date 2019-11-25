import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export default function CommentsFooter() {
    return (
        <>
            <a href="#1" className="post-add-icon inline-items">
                <FontAwesomeIcon size="2x" color="red" icon={faHeart} />
                <span>3</span>
            </a>
            <a href="#1" className="reply">Reply</a>
        </>
    )
}
