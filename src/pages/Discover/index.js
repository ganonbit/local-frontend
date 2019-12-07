import React from 'react';
import Isotope from 'isotope-layout';

const IsotopeReact = () => {
  const [isotope, setIsotope] = React.useState(null);
  const [filterKey, setFilterKey] = React.useState('*');
  React.useEffect(() => {
    setIsotope(
      new Isotope('.sorting-container', {
        itemSelector: '.sorting-item',
        layoutMode: 'fitRows',
      })
    );
    if (isotope) {
    }
  }, []);

  React.useEffect(() => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <>
      <div class='container'>
        <div class='row'>
          <div class='col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
            <div class='clients-grid'>
              <ul class='align-items-center cat-list-bg-style d-flex flex-wrap justify-content-center sorting-menu'>
                <li
                  class='cat-list__item active'
                  data-filter='*'
                  onClick={() => setFilterKey('*')}
                >
                  <a href='#' class=''>
                    ALL CATEGORIES
                  </a>
                </li>
                <li
                  class='cat-list__item'
                  data-filter='.community'
                  onClick={() => setFilterKey('vege')}
                >
                  <a href='#' class=''>
                    content filter
                  </a>
                </li>
                <li
                  class='cat-list__item'
                  data-filter='.news'
                  onClick={() => setFilterKey('fruit')}
                >
                  <a href='#' class=''>
                    content filter
                  </a>
                </li>
                <li class='cat-list__item' data-filter='.inspiration'>
                  <a href='#' class=''>
                    content filter
                  </a>
                </li>
                <li class='cat-list__item' data-filter='.news'>
                  <a href='#' class=''>
                    content filter
                  </a>
                </li>
                <li class='cat-list__item' data-filter='.inspiration'>
                  <a href='#' class=''>
                    content filter
                  </a>
                </li>
              </ul>

              <div
                class='sorting-container'
                id='clients-grid-1'
                data-layout='masonry'
              >
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail1.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item news'>
                  <div class='ui-block'>
                    {/* <!-- end Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail2.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail3.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail4.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail5.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail6.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item community'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail7.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail8.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item inspiration'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail9.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail10.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item inspiration'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail11.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
                <div class='col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 sorting-item fruit'>
                  <div class='ui-block'>
                    {/* <!-- Post --> */}
                    <article class='hentry blog-post'>
                      <div class='post-thumb'>
                        <img src='img/avocado-thumbnail12.png' alt='photo' />
                      </div>
                    </article>
                    {/* <!-- ... end Post --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IsotopeReact;
