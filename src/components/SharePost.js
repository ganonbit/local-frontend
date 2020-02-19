import React from 'react';
import { Mutation, withApollo } from 'react-apollo';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share';

// import OverlayTriggers from './Common/ToolTip';
import { CREATE_SHARED_POST, DELETE_SHARED_POST } from 'graphql/shared-post';

import { useStore } from 'store';
/**
 * Component for rendering Share Post button
 */
const SharePost = ({ postId, post, postSharer, sharedPostId }) => {
  const [{ auth }] = useStore();
  if (!auth.user) {
    return null;
  }

  let hasShared = false;
  if (postSharer && sharedPostId && auth.user.id === postSharer.id) {
    postId = sharedPostId;
    hasShared = true;
  }

  let url = `https://beta.theavocadonation.com/post/${postId}`;

  const handleButtonClick = async (event, mutate) => {
    event.preventDefault();
    try {
      const { data } = await mutate();
      if (data && hasShared === false) {
        // TODO: Add better notice when someone shares a post
        alert('Successfully shared post!');
      }
      if (data && hasShared === true) {
        // TODO: Add better notice when someone un-shares a post
        alert('Successfully un-shared post');
      }
    } catch (err) {
      alert(
        'Sorry an error occurred while trying to share a post. Please try again later.'
      );
      console.log(`Error:\n ${err}`);
    }
  };

  let fbSharedButton = (
    <FacebookShareButton
      className='network__share-button'
      url={url}
      quote={post.content}
      resetButtonStyle={true}
    >
      <FacebookIcon size={25} round={true} />
      <span>Share</span>
    </FacebookShareButton>
  );

  let twitterShareButton = (
    <TwitterShareButton className='network__share-button' url={url}>
      <TwitterIcon size={25} round={true} /> <span>Share</span>
    </TwitterShareButton>
  );

  // Detect which mutation to use
  const operation = hasShared ? 'delete' : 'create';
  const options = {
    create: {
      mutation: CREATE_SHARED_POST,
      variables: { userId: auth.user.id, postId: postId },
    },
    delete: {
      mutation: DELETE_SHARED_POST,
      variables: { id: postId },
    },
  };

  return (
    <Mutation
      mutation={options[operation].mutation}
      variables={{ input: { ...options[operation].variables } }}
    >
      {mutate => {
        return (
          <div className='more more-share'>
            <a
              href='#1'
              onClick={e => handleButtonClick(e, mutate)}
              className='btn btn-control share-link'
            >
              <LazyLoadImage
                src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1575849612/static/share-icon_rkyjac.png'
                alt=''
              />
            </a>

            <ul className='more-dropdown'>
              <li>
                <Link href onClick={e => handleButtonClick(e, mutate)}>
                  <LazyLoadImage
                    src='https://res.cloudinary.com/weare270b/image/upload/f_auto,q_auto/v1575849612/static/avocado-icon_rwvve0.png'
                    alt=''
                  />
                  <span>Avocado Share</span>
                </Link>
              </li>
              <li>
                <Link href onClick={e => {}}>
                  {fbSharedButton}
                </Link>
              </li>
              <li>
                <Link
                  href
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  {twitterShareButton}
                </Link>
              </li>
            </ul>
          </div>
        );
      }}
    </Mutation>
  );
};

export default withApollo(SharePost);
