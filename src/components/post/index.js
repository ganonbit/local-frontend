import React, { useState } from 'react'
import PostControlButton from '../Common/PostControlButton'
// import { GooglePlay } from '../../assets/svg-icons'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import PostContent from './MainContent'
import Comments from 'components/Comments/Comments'
import AddComment from 'components/Comments/AddComment'
import { useStore } from '../../store/index'
import { Query } from 'react-apollo'
import { GET_FOLLOWED_POSTS } from '../../graphql/post'

export default function MainContent(props) {
  const [{ auth }] = useStore()
  const [isCommentOPen, setCommentOPen] = useState(false)

  let showCommentHandler = show => {
    setCommentOPen(show)
  }
  const articleClass = props.newPost ? 'hentry post' : 'hentry post video'
  return (
    <Query
      query={GET_FOLLOWED_POSTS}
      variables={{
        userId: auth.user.id,
        skip: 0
        // limit: 15
      }}>
      {({ data, loading }) => {
        return loading === true ? (
          <h1>loading...!</h1>
        ) : (
          data.getFollowedPosts.posts.map(post => {
            return (
              <div key={post.id} className="ui-block">
                <article className={articleClass}>
                  <PostHeader
                    author={post.author}
                    image={post.image}
                    user={auth.user}
                    postId={post.id}
                  />
                  {/* {props.newPost ? <NewPost contnet={props.content} /> : <PostVideo tag={props.tag} body={props.body} />} */}
                  <PostContent content={post.content} image={post.image} />
                  <PostFooter
                    showCommentHandler={showCommentHandler}
                    post={post}
                  />
                  <PostControlButton />
                </article>
                {isCommentOPen && (
                  <AddComment
                    authorId={auth.user.id}
                    postId={post.id}
                    onCancle={showCommentHandler}
                  />
                )}

                <Comments comments={post.comments} />
              </div>
            )
          })
        )
      }}
    </Query>
  )
}
