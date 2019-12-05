import React from 'react';
import { Link } from 'react-router-dom';
const AvocadoGame = () => {
  return (
    <div className='ui-block'>
      <div className='widget w-action'>
        <div className='ui-block-title'>
          <img src='img/star-icon2.png' alt='' />
          <Link to='' className='more'></Link>
        </div>
        <img src='img/game-remote.png' alt='Olympus' />
        <div className='content'>
          <span>Game</span>
          <h4 className='title'>
            What kind of <br />
            avocado lover are you?
          </h4>
          <Link to='/' className='btn btn-bg-secondary btn-md'>
            Play Now!
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AvocadoGame;
