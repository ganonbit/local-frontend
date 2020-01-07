import React from 'react';
import { PlayIcon } from 'assets/svg-icons';

PostVideo.defaultProps = {
  title: 'Iron Maid - ChillGroves',
  video_desc:
    'Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  link: 'http://www.youtube.com',
  tag: '',
};

export default function PostVideo(props) {
  return (
    <>
      <p>
        Hey{' '}
        <a
          href
          onClick={e => {
            e.preventDefault();
          }}
        >
          {props.tag}
        </a>
        {props.body}
      </p>
      <div className='post-video'>
        <div className='video-thumb'>
          <img
            src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/video-youtube1.jpg'
            alt='video-icon'
          />
          <a href={props.link} className='play-video'>
            <PlayIcon />
          </a>
        </div>
        <div className='video-content'>
          <a
            href
            onClick={e => {
              e.preventDefault();
            }}
            className='h4 title'
          >
            {props.title}
          </a>
          <p>{props.video_desc}</p>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={props.link}
            className='link-site'
          >
            {props.link}
          </a>
        </div>
      </div>
    </>
  );
}
