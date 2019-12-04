import React from 'react'
import TopPost from './TopPost'
import AvocadoGame from './AvocadoGame'
import SideMenu from './SideMenu'

export default function LeftSideContent() {
    return (
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12 ui-block-blur">
            {/* <TopPost /> */}
            <div className="ui-block">
                <img className="health-bnr" src="img/health-bnr-img.png" alt="" />
            </div>
            <AvocadoGame />
            <SideMenu />

        </aside>
    )
}
