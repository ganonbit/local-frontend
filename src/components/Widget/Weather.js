import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faCloudSun, faSun, faCloudRain, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
export default function Weather() {
    return (

        <div className="ui-block">
            <div className="widget w-wethear">
                <a href="#1" className="more">
                    <FontAwesomeIcon icon={faEllipsisV} color="white" />
                    {/* <svg class="olymp-three-dots-icon">
                <use xlink:href="#olymp-three-dots-icon"></use>
							</svg> */}
                </a>

                <div className="wethear-now inline-items">
                    <div className="temperature-sensor">64°</div>
                    <div className="max-min-temperature">
                        <span>58°</span>
                        <span>76°</span>
                    </div>

                    <FontAwesomeIcon size="2x" icon={faCloudSun} color="white" />
                </div >

                <div className="wethear-now-description">
                    <div className="climate">Partly Sunny</div>
                    <span>Real Feel: <span>67°</span></span>
                    <span>Chance of Rain: <span>49%</span></span>
                </div>

                <ul className="weekly-forecast">

                    <li>
                        <div className="day">sun</div>
                        <FontAwesomeIcon size="sm" icon={faSun} color="white" />


                        <div className="temperature-sensor-day">60°</div>
                    </li>

                    <li>
                        <div className="day">mon</div>
                        <FontAwesomeIcon size="sm" icon={faCloudSun} color="white" />

                        <div className="temperature-sensor-day">58°</div>
                    </li >

                    <li>
                        <div className="day">tue</div>
                        <FontAwesomeIcon size="sm" icon={faSun} color="white" />


                        <div className="temperature-sensor-day">67°</div>
                    </li >

                    <li>
                        <div className="day">wed</div>
                        <FontAwesomeIcon size="sm" icon={faCloudRain} color="white" />


                        <div className="temperature-sensor-day">70°</div>
                    </li >

                    <li>
                        <div className="day">thu</div>
                        <FontAwesomeIcon size="sm" icon={faCloudRain} color="white" />


                        <div className="temperature-sensor-day">58°</div>
                    </li >

                    <li>
                        <div className="day">fri</div>
                        <FontAwesomeIcon icon={faCloudShowersHeavy} color="white" />

                        <div className="temperature-sensor-day">68°</div>
                    </li >

                    <li>
                        <div className="day">sat</div>

                        <FontAwesomeIcon icon={faCloudShowersHeavy} color="white" />


                        <div className="temperature-sensor-day">65°</div>
                    </li >

                </ul >

                <div className="date-and-place">
                    <h5 className="date">Saturday, March 26th</h5>
                    <div className="place">San Francisco, CA</div>
                </div>

            </div >
        </div>
    )
}
