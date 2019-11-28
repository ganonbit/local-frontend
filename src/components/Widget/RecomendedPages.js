import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faStar } from "@fortawesome/free-solid-svg-icons";
export default function RecomendedPages() {
  return (
    <div className="ui-block">
      <div className="ui-block-title block-title-bg">
        <h6 className="title">Pages You May Like</h6>

        <FontAwesomeIcon icon={faEllipsisV} color="white" />
      </div>

      <ul className="widget w-friend-pages-added notification-list friend-requests">
        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar41-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              The Marina Bar
            </a>
            <span className="chat-message-item">Restaurant / Bar</span>
          </div>
          <span
            className="notification-icon"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="ADD TO YOUR FAVS"
          >
            <a href="#1">
              <FontAwesomeIcon icon={faStar} color="white" />
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar42-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Tapronus Rock
            </a>
            <span className="chat-message-item">Rock Band</span>
          </div>
          <span
            className="notification-icon"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="ADD TO YOUR FAVS"
          >
            <a href="#1">
              <FontAwesomeIcon icon={faStar} color="white" />
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar43-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Pixel Digital Design
            </a>
            <span className="chat-message-item">Company</span>
          </div>
          <span
            className="notification-icon"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="ADD TO YOUR FAVS"
          >
            <a href="#1">
              <FontAwesomeIcon icon={faStar} color="white" />
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar44-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Thompson’s Custom Clothing Boutique
            </a>
            <span className="chat-message-item">Clothing Store</span>
          </div>
          <span
            className="notification-icon"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="ADD TO YOUR FAVS"
          >
            <a href="#1">
              <FontAwesomeIcon icon={faStar} color="white" />
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar45-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Crimson Agency
            </a>
            <span className="chat-message-item">Company</span>
          </div>
          <span
            className="notification-icon"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="ADD TO YOUR FAVS"
          >
            <a href="#1">
              <FontAwesomeIcon icon={faStar} color="white" />
            </a>
          </span>
        </li>

        <li className="inline-items">
          <div className="author-thumb">
            <img src="img/avatar46-sm.jpg" alt="author" />
          </div>
          <div className="notification-event">
            <a href="#1" className="h6 notification-friend">
              Mannequin Angel
            </a>
            <span className="chat-message-item">Clothing Store</span>
          </div>
          <span
            className="notification-icon"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="ADD TO YOUR FAVS"
          >
            <a href="#1">
              <FontAwesomeIcon icon={faStar} color="white" />
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}
