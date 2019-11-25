import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare, faHeart } from '@fortawesome/free-solid-svg-icons'

PostFooter.defaultProps = {
    postLikes: 18,
    icons: ["img/friend-harmonic9.jpg", "img/friend-harmonic10.jpg", "img/friend-harmonic7.jpg", "img/friend-harmonic8.jpg", "img/friend-harmonic11.jpg"],
    likedBy1: 'Jenny ',
    likedBy2: 'Rohert',
    numShares: 16,


}
export default function PostFooter(props) {
    return (

        <div className="post-additional-info inline-items">
            <a href="#1" className="post-add-icon inline-items">
                <FontAwesomeIcon icon={faHeart} color='red' size="2x" />
                <span>{props.postLikes}</span>
            </a>

            <ul className="friends-harmonic">
                {props.icons.map(imageLink => {
                    return <li key={`${imageLink}`}>
                        <a href="#1">
                            <img src={imageLink} alt="friend" />
                        </a>
                    </li>
                })}
            </ul>

            <div className="names-people-likes">
                <a href="#1">{props.likedBy1}</a>, <a href="#1">{props.likedBy2}</a> {props.postLikes && 'and'}
                <br />{props.postLikes} {props.postLikes && 'more liked this'}

            </div>

            <div className="comments-shared">
                <a href="#1" className="post-add-icon inline-items">
                    <FontAwesomeIcon icon={faComment} />

                    <span>0</span>
                </a>

                <a onClick={() => { alert('share') }} href="#1" className="post-add-icon inline-items">

                    <FontAwesomeIcon icon={faShare} />

                    <span>{props.numShares}</span>
                </a>
            </div>


        </div >
    )
}
