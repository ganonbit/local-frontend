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
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail1_gxlj9t.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item news'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail2_qhaaym.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail3_rbctce.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail4_erjgjp.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail5_svtx5s.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail6_jgxf20.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail7_txbt3c.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail8_hie7vd.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item inspiration'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail9_wzxekz.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail10_lgm7cc.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item inspiration'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail11_s1y9za.png' alt='photo1' />
                      </div>
                    </article>
                  </div>
                </div>
                <div className='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div className='ui-block'>
                    <article className='hentry blog-post'>
                      <div className='post-thumb'>
                        <img src='https://res.cloudinary.com/weare270b/image/upload/v1575849612/static/avocado-thumbnail12_grsbnd.png' alt='photo1' />
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
