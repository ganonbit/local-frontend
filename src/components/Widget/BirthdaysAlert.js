import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
export default function BirthdaysAlert() {
  return (
    <div className="widget w-birthday-alert">
      <div className="icons-block">
        <FontAwesomeIcon icon={faBirthdayCake} size="2x" />

        <a href="#1" className="more">
          <FontAwesomeIcon icon={faEllipsisV} color="white" />
        </a>
      </div>

      <div className="content">
        <div className="author-thumb">
          <img src="img/avatar48-sm.jpg" alt="author" />
        </div>
        <span>Today is</span>
        <a href="#1" className="h4 title">
          Marina Valentine’s Birthday!
        </a>
        <p>Leave her a message with your best wishes on her profile page!</p>
      </div>
    </div>
  )
}
