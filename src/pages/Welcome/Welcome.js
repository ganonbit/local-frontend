import React from 'react'

export default function Welcome() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9 m-auto">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ui-block py-5 px-4 welcome-block">
                                <h2>Welcome!</h2>

                                <p>Avocado Nation is the first of its kind social media network to connect you with fellow avocado-lovers! </p>

                                <p>Join today and get rewarded for your contributions and engagement with other community members! Get inspiration for your next meal or party, and learn how others use this versatile fruit in everyday life - all from fellow avocado fans, just like you.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ui-block join-us">
                                <span>Join the Nation</span>
                                <h2>Create your own Profile!</h2>
                                <div className="text-center">
                                    <a href="#">Start Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
