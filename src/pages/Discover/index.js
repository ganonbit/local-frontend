import React, { useState } from 'react';
import Masonry from 'react-masonry-component';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_POSTS } from 'graphql/user';

import DiscoverCard from './DiscoverCard';
import DiscoverModal from './DiscoverModal';
const masonryOptions = {
  transitionDuration: 1000,
  // resize: true,
  // initLayout: true,
};

const Discover = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [isIndex, setIndex] = useState(0);
  const { loading, data } = useQuery(GET_USER_POSTS, {
    variables: { username: 'admin', skip: 0, limit: 25 },
  });
  let onClickHandler = index => {
    setIsShowing(true);
    setIndex(index);
  };
  return (
    <>
      <div className='container-fluid px-4'>
        {!loading && (
          <Masonry
            className={'row my-2'}
            elementType={'div'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            enableResizableChildren={true}
          >
            {data &&
              data.getUserPosts.posts.map((post, index) => {
                return (
                  post.image && (
                    <>
                      {isIndex === index && isShowing && (
                        <DiscoverModal
                          show={isShowing}
                          onHide={setIsShowing}
                          image={post.image}
                          description={post.content ? post.content : ''}
                          bio={post.author.bio}
                          post={post}
                        />
                      )}
                      <DiscoverCard
                        image={post.image}
                        description={post.content ? post.content : ''}
                        bio={post.author.bio}
                        onClickHandler={onClickHandler}
                        post={post}
                        index={index}
                        key={index}
                      />
                    </>
                  )
                );
              })}
          </Masonry>
        )}
      </div>
    </>
  );
};

export default Discover;
