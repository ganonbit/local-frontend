import React from 'react'
import moment from 'moment'
export default function PostHeader(props) {

    const { author } = props;

    var postDate = moment(1519129853500).format("YYYYMMDD")

    return (
        <div className="post__author author vcard inline-items">
            <img src={author.image} alt="author" />
            <div className="author-date">
                <a className="h6 post__author-name fn" href="#1">{author.fullName}</a>
                <div className="post__date">
                    <time className="published" dateTime="2004-07-24T18:18">
                        {moment(postDate, "YYYYMMDD").fromNow()}
                    </time>
                </div>
            </div>


        </div>
    )
}
