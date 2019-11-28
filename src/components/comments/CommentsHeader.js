import React from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default function CommentsHeader({ author }) {
  const { firstName, lastName, image } = author;
  var commentDate = moment(1573580476000).format("YYYYMMDD");
  return (
    <>
      <div className="post__author author vcard inline-items">
        <img src={image} alt="author" />
        <div className="author-date">
          <a className="h6 post__author-name fn" href="#1">
            {firstName} &nbsp; {lastName}
          </a>
          <div className="post__date">
            <time className="published" dateTime="2004-07-24T18:18">
              {moment(commentDate, "YYYYMMDD").fromNow()}
            </time>
          </div>
        </div>

        <a onClick={() => alert("Hey..")} href="#1" className="more">
          <FontAwesomeIcon size="sm" color="black" icon={faEllipsisV} />
        </a>
      </div>
    </>
  );
}
