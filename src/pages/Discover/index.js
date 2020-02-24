import React, { useState } from 'react';
import Masonry from 'react-masonry-component';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_POSTS } from 'graphql/user';

import DiscoverCard from './DiscoverCard';
import DiscoverModal from './DiscoverModal';
const masonryOptions = {
  transitionDuration: 1000,
};

const Discover = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState(null);

  const { loading, data } = useQuery(GET_USER_POSTS, {
    variables: { username: 'selma', skip: 0, limit: 25 },
  });

  let onClickHandler = (image, description) => {
    setIsShowing(true);
    setImage(image);
    setDescription(description);
  };
  return (
    <>
      <DiscoverModal
        show={isShowing}
        onHide={setIsShowing}
        image={image}
        description={description}
      />
      <div className='container-fluid px-4'>
        {!loading && (
          <Masonry
            className={'row my-2'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {data &&
              data.getUserPosts.posts.map((post, index) => {
                return (
                  post.image && (
                    <DiscoverCard
                      image={post.image}
                      description={
                        post.content ? post.content : 'Avocado Nation'
                      }
                      onClickHandler={onClickHandler}
                    />
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
