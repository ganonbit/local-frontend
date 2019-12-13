import React from 'react';

export default function LastPhotos() {
  return (
    <div className='ui-block'>
      <div className='ui-block-title ui-block-photos'>
        <h6 className='title'>Latest Photos</h6>
      </div>
      <div className='ui-block-content'>
        {/* <!-- W-Latest-Photo --> */}

        <ul className='widget w-last-photo js-zoom-gallery'>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-1.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-2.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-3.jpg'
                alt='friends-icons'
              />
            </a>
          </li>

          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-4.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-5.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-6.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-7.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-8.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
          <li>
            <a href='/'>
              <img
                src='http://lorempixel.com/output/food-q-c-600-600-9.jpg'
                alt='friends-icons'
              />
            </a>
          </li>
        </ul>

        {/* <!-- .. end W-Latest-Photo --> */}
      </div>
    </div>
  );
}
