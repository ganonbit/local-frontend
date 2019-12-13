import React from 'react';
import YouTubePlayer from 'react-player/lib/players/YouTube';
const VideoSection = () => {
  return (
    <div className='wrapper'>
      <YouTubePlayer 
        className='player'
        url='https://www.youtube.com/watch?v=Pz-75bV3s_w' 
        width='100%'
        height='100%'
        config={{
          youtube: {
               playerVars: { modestbranding: 1 },
               preload: true
          }
      }}
      />
    </div>
  );
};
export default VideoSection;
