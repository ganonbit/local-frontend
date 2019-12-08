import React from 'react';
import Isotope from 'isotope-layout';
import Masonry from 'react-masonry-component';

const Discover = () => {
  const [isotope, setIsotope] = React.useState(null);
  const [filterKey, setFilterKey] = React.useState('*');
  let handleImagesLoaded = () => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
      return;
    }
    setIsotope(
      new Isotope('.sorting-container', {
        itemSelector: '.sorting-item',
        layoutMode: 'fitRows',
      })
    );
  };
  return (
    <Masonry className='container' onImagesLoaded={() => handleImagesLoaded()}>
      <div className='container'>
        <div className='row'>
          <div className='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div className='clients-grid'>
              <ul className='align-items-center cat-list-bg-style d-flex flex-wrap justify-content-center sorting-menu'>
                <li
                  className='cat-list__item active'
                  data-filter='*'
                  onClick={() => setFilterKey('*')}
                >
                  <a href='#1' className=''>
                    ALL CATEGORIES
                  </a>
                </li>
                <li
                  className='cat-list__item'
                  data-filter='.community'
                  onClick={() => setFilterKey('vege')}
                >
                  <a href='#1' className=''>
                    content filter
                  </a>
                </li>
                <li
                  className='cat-list__item'
                  data-filter='.news'
                  onClick={() => setFilterKey('fruit')}
                >
                  <a href='#1' className=''>
                    content filter
                  </a>
                </li>
                <li className='cat-list__item' data-filter='.inspiration'>
                  <a href='#1' className=''>
                    content filter
                  </a>
                </li>
                <li className='cat-list__item' data-filter='.news'>
                  <a href='#1' className=''>
                    content filter
                  </a>
                </li>
                <li className='cat-list__item' data-filter='.inspiration'>
                  <a href='#1' className=''>
                    content filter
                  </a>
                </li>
              </ul>

              <div
                className='sorting-container'
                id='clients-grid-1'
                data-layout='masonry'
              >
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail1.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item news'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail2.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail3.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail4.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail5.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail6.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail7.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail8.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item inspiration'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail9.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail10.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item inspiration'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail11.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='img/avocado-thumbnail12.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Masonry>
  );
};
export default Discover;
