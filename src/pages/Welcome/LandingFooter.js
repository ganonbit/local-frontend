import React from 'react'

export default function LandingFooter() {
    return (
        <div className="container">
            <div className="row mb-5 mt-4 mt-xl-0">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-auto">
                    <div className="row">
                        <div className="col-6">
                            <h5 className="mb-1">Avocado Nation © 2019</h5>
                            <span>English (US)</span>
                        </div>
                        <div className="col-6 text-right">
                            <img src="img/avocado-primary-logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 m-auto">
                    <div className="ui-block-menu border-top pt-2">
                        <ul className="d-flex ftr-menu flex-wrap mb-5">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Account Security</a></li>
                            <li><a href="#">Login Help</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
