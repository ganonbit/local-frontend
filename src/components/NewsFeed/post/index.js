import React from 'react'
import PostControlButton from '../../Common/PostControlButton'
// import { GooglePlay } from '../../assets/svg-icons'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import NewPost from './MainContent'
import Comments from 'components/comments/Comments'
import AddComment from 'components/comments/AddComment'
import { useStore } from '../../../store/index'
import { Query } from "react-apollo";
import { GET_POSTS } from '../../../graphql/post'


MainContent.defaultProps = {
    share: false,
    newPost: false,
    tag: 'Cindi',
    body: `, you should really check out this new song by Iron Maid. The
    next time they come to the city we should totally go!`,
    author: "Marina Valentine", image: "img/avatar7-sm.jpg"

}

export default function MainContent(props) {
    const [{ auth }] = useStore()


    const articleClass = props.newPost ? 'hentry post' : 'hentry post video'
    return (
        <Query
            query={GET_POSTS}
            variables={{
                authUserId: auth.user.id,
                skip: 1,
                limit: 15
            }}
        >
            {({ data, loading }) => {
                return (
                    loading === true ? <h1>loading...!</h1> :
                        data.getPosts.posts.map(post => {
                            return <div key={post.id} className="ui-block" >
                                <article className={articleClass}>
                                    <PostHeader author={post.author} image={props.image} />
                                    {/* {props.newPost ? <NewPost contnet={props.content} /> : <PostVideo tag={props.tag} body={props.body} />} */}
                                    <NewPost content={post.content} image={post.image} />
                                    <PostFooter />
                                    <PostControlButton />

                                </article>

                                <Comments comments={post.comments} />
                                <AddComment />
                            </div >
                        })
                )
            }}
        </Query >
    )

}
