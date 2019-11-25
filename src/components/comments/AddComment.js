import React from 'react'

export default function AddComment() {
    return (
        <form className="comment-form inline-items">

            <div className="post__author author vcard inline-items">
                <img src="img/author-page.jpg" alt="author" />

                <div className="form-group with-icon-right ">
                    <textarea className="form-control" placeholder=""></textarea>
                    <div className="add-options-message">
                        <a href="#1" className="options-message" data-toggle="modal"
                            data-target="#update-header-photo">
                            {/* <svg className="olymp-camera-icon">
                                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
											</svg> */}
                        </a>
                    </div>
                </div>
            </div>

            <button className="btn btn-md-2 btn-primary">Post Comment</button>

            <button
                className="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>

        </form>
    )
}
