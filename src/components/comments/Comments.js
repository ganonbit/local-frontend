import React from 'react'

import CommentsHeader from './CommentsHeader'
import CommentsFooter from './CommentsFooter'

Comments.defaultProps = {
    author: 'James',
    time: '',
    body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.'
}
export default function Comments(props) {
    return (
        <>
            <ul className="comments-list">
                {/*TODO: for More comments loop over the data and render below code */}
                {
                    props.comments ? props.comments.map(comment => {
                        return <li className="comment-item">
                            <CommentsHeader />
                            <p>{props.body}</p>
                            <CommentsFooter />
                        </li>
                    }) : null
                }
            </ul>
        </>
    )
}
