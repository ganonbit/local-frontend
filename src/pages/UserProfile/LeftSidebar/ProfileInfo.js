import React from 'react';

export default function Intro() {
  return (
    <>
      <div class='ui-block'>
        <div class='ui-block-title ui-block-post'>
          <h6 class='title'>About</h6>
          {/* <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a> */}
        </div>
        <div class='ui-block-content'>
          {/* <!-- W-Personal-Info --> */}
          <ul class='widget w-personal-info item-block'>
            <li>
              <span class='text'>
                I am an avocado expert who’s goal is to spread my love of
                avocados from Mexico!
              </span>
            </li>
            <li>
              <span class='title'>Created:</span>
              <span class='text'>December 5th, 2019</span>
            </li>
            <li>
              <span class='title'>Based in:</span>
              <span class='text'>Dallas, TX</span>
            </li>
            <li>
              <span class='title'>Favourites:</span>
              <span class='text'>85,630</span>
            </li>
          </ul>
          {/* <!-- W-Socials --> */}
          <div class='widget w-socials'>
            <h6 class='title'>Other Networks:</h6>
            <a href='#' class='social-item bg-facebook'>
              {/* <svg class="svg-inline--fa fa-facebook-f fa-w-9" aria-hidden="true" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512" data-fa-i2svg=""><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg><!-- <i class="fab fa-facebook-f" aria-hidden="true"></i> --> */}
              Facebook
            </a>
            <a href='#' class='social-item bg-twitter'>
              {/* <svg class="svg-inline--fa fa-twitter fa-w-16" aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i class="fab fa-twitter" aria-hidden="true"></i> --> */}
              Twitter
            </a>
            <a
              href='#'
              class='social-item bg-dribbble d-flex justify-content-center align-items-center'
            >
              <img class='mr-2' src='img/spotify-img.png' alt='' />
              {/* </path></svg><!-- <i class="fab fa-dribbble" aria-hidden="true"></i> --> */}
              Dribbble
            </a>
          </div>
          {/* <!-- ... end W-Socials --> */}
        </div>
      </div>

      <div class='ui-block-menu ui-block-menu-left'>
        <ul class='d-flex'>
          <li>
            <a href='#'>Privacy</a>
          </li>
          <li>
            <a href='#'>Terms</a>
          </li>
          <li>
            <a href='#'>Cookies</a>
          </li>
          <li>
            <div class='dropdown'>
              <button
                type='button'
                class='dropdown-toggle'
                data-toggle='dropdown'
              >
                More
              </button>
              <div class='dropdown-menu'>
                <a class='dropdown-item' href='#'>
                  Link 1
                </a>
                <a class='dropdown-item' href='#'>
                  Link 2
                </a>
                <a class='dropdown-item' href='#'>
                  Link 3
                </a>
              </div>
            </div>
          </li>
        </ul>
        <h5>Avocado Nation © 2019</h5>
        <img
          src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-primary-logo.png'
          alt=''
        />
      </div>
    </>
  );
}
