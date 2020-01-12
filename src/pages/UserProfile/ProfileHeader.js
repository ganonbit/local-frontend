import React, { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import UploadProfileImage from './UploadProfileImage';
import UploadCoverImage from './UploadCoverImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import * as Routes from 'routes';

const ProfileHeader = ({ user, refetch, auth, username, isOwner, isSelma }) => {
  const [isProfileShowing, setProfileIsShowing] = useState(false);
  const [isCoverShowing, setCoverIsShowing] = useState(false);
  const [ImagesContent, setImagesContent] = useState({
    title: '',
    image: user.image,
    isCover: false,
    coverImage: user.coverImage,
  });
  let { title, image, isCover, coverImage } = ImagesContent;
  let toggleProfile = (title, isCover, image) => {
    setImagesContent({
      ...ImagesContent,
      title: title,
      isCover: isCover,
      image: image,
    });
    setProfileIsShowing(true);
  };
  let toggleCover = (title, isCover, coverImage) => {
    setImagesContent({
      ...ImagesContent,
      title: title,
      isCover: isCover,
      coverImage: coverImage,
    });
    setCoverIsShowing(true);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
          <div className='ui-block'>
            <div className='top-header'>
              <div className='top-header-thumb'>
                {user.coverImage ? (
                  <img src={user.coverImage} alt='cover' />
                ) : (
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576214852/static/profile-bg_edozor.png'
                    alt='nature'
                  />
                )}
              </div>
              <div className='top-header-author'>
                <Link
                  className='author-thumb'
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  {user.image ? (
                    <img src={user.image} alt='profile' />
                  ) : (
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                      alt='nature'
                    />
                  )}
                </Link>
                <div className='author-content'>
                  <Link to={Routes.HOME} className='h4 author-name'>
                    {`${user.firstName} ${user.lastName}`}
                  </Link>
                  <div className='author-location'>{user.username}</div>
                </div>
              </div>

              <div className='profile-section'>
                {isOwner || isSelma ? (
                  <UploadProfileImage
                    show={isProfileShowing}
                    onHide={() => setProfileIsShowing(false)}
                    user={user}
                    isCover={isCover}
                    image={image}
                    title={title}
                    refetch={refetch}
                  />
                ) : null}
                {isOwner || isSelma ? (
                  <UploadCoverImage
                    show={isCoverShowing}
                    onHide={() => setCoverIsShowing(false)}
                    user={user}
                    isCover={isCover}
                    coverImage={coverImage}
                    title={title}
                    refetch={refetch}
                  />
                ) : null}
                {isOwner || isSelma ? (
                  <div className='control-block-button'>
                    {isSelma && (
                      <div className='btn btn-control bg-primary more'>
                        <Link
                          to={generatePath(Routes.MESSAGES, {
                            userId: user.id,
                          })}
                        >
                          <FontAwesomeIcon
                            size='xl'
                            color='white'
                            icon={faEnvelope}
                            style={{ fontSize: '25px', height: '25px' }}
                          />
                        </Link>
                      </div>
                    )}
                    <div className='btn btn-control bg-primary more'>
                      <FontAwesomeIcon
                        size='xl'
                        color='white'
                        icon={faCog}
                        style={{ fontSize: '25px', height: '25px' }}
                      />
                      <ul className='more-dropdown more-with-triangle triangle-bottom-right'>
                        <li>
                          <Link
                            data-toggle='modal'
                            data-target='#update-header-photo'
                            onClick={e => {
                              e.preventDefault();
                              toggleProfile(
                                'Edit Profile Photo',
                                false,
                                user.image
                              );
                            }}
                          >
                            Update Profile Photo
                          </Link>
                        </li>
                        <li>
                          <Link
                            data-toggle='modal'
                            data-target='#update-header-photo'
                            onClick={e => {
                              e.preventDefault();
                              toggleCover(
                                'Edit Cover Photo',
                                true,
                                user.coverImage
                              );
                            }}
                          >
                            Update Cover Image
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
