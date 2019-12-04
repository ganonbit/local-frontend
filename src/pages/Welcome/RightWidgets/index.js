import React from 'react'
import TrendingTopics from './TrendingTopics'
import Top20Friends from './TopFriends'

export default function RightSection() {
    return (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12 ui-block-blur">
            <TrendingTopics />
            <Top20Friends />

        </aside>
    )
}
