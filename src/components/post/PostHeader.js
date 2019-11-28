import React from 'react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
export default function PostHeader(props) {
  const { author, postId, user } = props
  let postDate = moment(1519129853500).format('YYYYMMDD')
  console.log('--------------------user', user)
  let isUserPost = () => {
    let result = user.posts.find(x => x.id === postId)
    console.log('---------result', result)
  }
  isUserPost()
  return (
    <div className="post__author author vcard inline-items">
      <img src={author.image} alt="author" />
      <div className="author-date">
        <a className="h6 post__author-name fn" href="#1">
          {author.fullName}
        </a>
        <div className="post__date">
          <time className="published" dateTime="2004-07-24T18:18">
            {moment(postDate, 'YYYYMMDD').fromNow()}
          </time>
        </div>
      </div>

      <div className="more">
        <FontAwesomeIcon
          className="olymp-three-dots-icon"
          size="lg"
          color="black"
          icon={faEllipsisV}
          style={{ height: '8px' }}
        />
        <ul className="more-dropdown">
          <li>
            <a href="#2">Edit Post</a>
          </li>
          <li>
            <a href="#2">Delete Post</a>
          </li>
          <li>
            <a href="#2">Turn Off Notifications</a>
          </li>
          <li>
            <a href="#2">Select as Featured</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
