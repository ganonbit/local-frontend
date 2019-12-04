import React from 'react'

export default function SideMenu() {
    return (
        <div className="ui-block-menu ui-block-menu-sidebar">
            <ul className="d-flex">
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Cookies</a></li>
                <li>
                    <div className="dropdown">
                        <button type="button" className="dropdown-toggle" data-toggle="dropdown">
                            More
          </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Link 1</a>
                            <a className="dropdown-item" href="#">Link 2</a>
                            <a className="dropdown-item" href="#">Link 3</a>
                        </div>
                    </div>
                </li>
            </ul>
            <h5>Avocado Nation © 2019</h5>
            <img src="img/avocado-primary-logo.png" alt="" />
        </div>
    )
}
