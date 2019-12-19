import React from 'react';
import Left from './LeftSidebar';
import ProfileHeader from './ProfileHeader';
import CreatePost from 'components/CreatePost';
import Right from './RightSidebar';
import Post from 'components/Post';
import { Query } from 'react-apollo';
import { GET_USER_POSTS, GET_USER } from 'graphql/user';
import { useStore } from 'store';

export default function Profile(props) {
  const queryOptions = {
    query: GET_USER_POSTS,
    variables: { username: props.match.params.username, skip: 0, limit: 15 },
    callback: 'getUserPosts',
  };
  return (
    <Query
      query={GET_USER}
      variables={{ username: props.match.params.username }}
      notifyOnNetworkStatusChange
    >
      {({ data, loading }) => {
        return loading ? (
          <h1></h1>
        ) : (
          <div className='container'>
            <div className='row ' style={{ paddingLeft: 0, paddingRight: 0 }}>
              <ProfileHeader user={data.getUser} refetch={props.refetch} />
              <Left user={data.getUser}/>
              <div className='col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 order-md-1 order-sm-1 col-xs-12 order-xs-1 col-12'>
                <div id='newsfeed-items-grid'>
                {/* until we make logic to make it only to the current logged in users profile we'll leave this off
                <CreatePost /> */}

                  <Post queryOptions={queryOptions} isAuth={true} />
                </div>
              </div>
              <Right user={data.getUser} />
            </div>
          </div>
        );
      }}
    </Query>
  );
}
