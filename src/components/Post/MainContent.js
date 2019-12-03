import React from 'react';

<<<<<<< HEAD
const MainContent = ({ content, image }) => {
	return (
		<div className='postContainer'>
			{content && <p>{content}</p>}
			<div className='post-img'>
				{image && (
					<img className='postImage' alt='postImage' src={image} />
				)}
			</div>
		</div>
	);
};
export default MainContent;
=======
export default function MainContent(props) {
  return (
    <div className='postContainer'>
      <p>{props.content}</p>
      {props.image && (
        <div className='post-img'>
          <img className='postImage' alt='postImage' src={props.image} />
        </div>
      )}
    </div>
  );
}
>>>>>>> master
