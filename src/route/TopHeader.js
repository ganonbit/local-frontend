import React, { Component } from 'react'

import AuthorPage from '../pages/Header/AuthorPage'
import Notifications from '../pages/Header/Notifications'

import '../assets/svg-icons/back-to-top.svg'

import HeaderTitle from '../pages/Header/HeaderTitle'
import SearchBar from '../pages/Header/SearchBar'
import FriendRequest from '../pages/Header/FriendRequest'
import ChatNotifications from '../pages/Header/ChatNotifications'
export default class TopHeader extends Component {
    render() {
        return (
            <header class="header" id="site-header">


                <HeaderTitle />
                <div class="header-content-wrapper">
                    <SearchBar />

                    <div class="control-block">

                        <FriendRequest />
                        <ChatNotifications />
                        <Notifications />
                        <AuthorPage />

                    </div>

                </div>
                <div className="nav-right-section">

                    {/* 
                    <Notifications />
                    <AuthorPage /> */}

                </div>






            </header>


        )
    }
}
