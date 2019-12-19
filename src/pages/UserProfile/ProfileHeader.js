import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UploadProfileImage from './UploadProfileImage';
const ProfileHeader = ({ user,refetch }) => {
  const [isShowing, setIsShowing] = useState(false);
  const [ImagesContent, setImagesContent] = useState({
    title: '',
    image: '',
    isCover: false,
  });
  let { title, image, isCover } = ImagesContent;
  let toggle = (title, isCover, image) => {
    setImagesContent({
      ...ImagesContent,
      title: title,
      isCover: isCover,
      image: image,
    });
    setIsShowing(true);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
          <div className='ui-block'>
            <div className='top-header'>
              <div className='top-header-thumb'>
                {user.coverImage ? (
                  <img src={user.coverImage} alt='nature' />
                ) : (
                  <img
                    src='https://res.cloudinary.com/weare270b/image/upload/v1576214852/static/profile-bg_edozor.png'
                    alt='nature'
                  />
                )}
              </div>
              <div className='top-header-author'>
                <Link to='/' className='author-thumb'>
                  {user.image ? (
                    <img src={user.image} alt='nature' />
                  ) : (
                    <img
                      src='https://res.cloudinary.com/weare270b/image/upload/v1576220262/static/Image_from_iOS_1_bnaxnc.jpg'
                      alt='nature'
                    />
                  )}
                </Link>
                <div className='author-content'>
                  <Link to='/' className='h4 author-name'>
                    {`${user.firstName} ${user.lastName}`}
                  </Link>
                  <div className='author-location'>{user.username}</div>
                </div>
              </div>

              <div class='profile-section'>
                {
                  <UploadProfileImage
                    show={isShowing}
                    onHide={() => setIsShowing(false)}
                    user={user}
                    isCover={isCover}
                    image={image}
                    title={title}
                    refetch={refetch}
                  />
                }
                <div class='control-block-button'>
                  <div class='btn btn-control bg-primary more'>
                    {/* <svg class="olymp-settings-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-settings-icon"></use></svg> */}
                    <ul class='more-dropdown more-with-triangle triangle-bottom-right'>
                      <li>
                        <a
                          href='#'
                          data-toggle='modal'
                          data-target='#update-header-photo'
                          onClick={() =>
                            toggle('Edit Profile Image', false, user.image)
                          }
                        >
                          Update Profile Photo
                        </a>
                      </li>
                      <li>
                        <a
                          href='#'
                          data-toggle='modal'
                          data-target='#update-header-photo'
                          onClick={() =>
                            toggle('Edit cover Image', true, user.coverImage)
                          }
                        >
                          Update Cover Image
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
