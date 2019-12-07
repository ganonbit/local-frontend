import React from 'react'

export default function BlogPost() {
    return (
        <div className="ui-block">
            <div className="ui-block-title block-title-bg">
                <h6 className="title">Blog Posts</h6>
            </div>
            {/* <!-- W-Blog-Posts --> */}

            <ul className="widget w-blog-posts">
                <li>
                    <article className="hentry post">

                        <a href="#" className="h4">My Perfect Vacations in South America and Europe</a>

                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>

                        <div className="post__date">
                            <time className="published" dateTime="2017-03-24T18:18">
                                7 hours ago
								</time>
                        </div>

                    </article>
                </li>
                <li>
                    <article className="hentry post">

                        <a href="#" className="h4">The Big Experience of Travelling Alone</a>

                        <p>Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod por incidid ut labore et.</p>

                        <div className="post__date">
                            <time className="published" dateTime="2017-03-24T18:18">
                                March 18th, at 6:52pm
								</time>
                        </div>

                    </article>
                </li>
            </ul>

            {/* <!-- .. end W-Blog-Posts --> */}
        </div>

    )
}
