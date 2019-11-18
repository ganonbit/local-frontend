import React from 'react'

export default function Weather() {
    return (

        <div class="ui-block">
            <div className="widget w-wethear">
                <a href="#" class="more">
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

                    {/* <svg className="olymp-weather-partly-sunny-icon">
                    <use xlink: href="#olymp-weather-partly-sunny-icon">
								</use>
							</svg> */}
                </div >

                <div className="wethear-now-description">
                    <div className="climate">Partly Sunny</div>
                    <span>Real Feel: <span>67°</span></span>
                    <span>Chance of Rain: <span>49%</span></span>
                </div>

                <ul className="weekly-forecast">

                    <li>
                        <div className="day">sun</div>
                        {/* <svg className="olymp-weather-sunny-icon">
                        <use xlink: href="#olymp-weather-sunny-icon">
									</use>
								</svg> */}

                        <div className="temperature-sensor-day">60°</div>
                    </li>

                    <li>
                        <div className="day">mon</div>
                        {/* <svg className="olymp-weather-partly-sunny-icon">
                        <use xlink: href="#olymp-weather-partly-sunny-icon">
									</use>
								</svg> */}
                        <div className="temperature-sensor-day">58°</div>
                    </li >

                    <li>
                        <div className="day">tue</div>
                        {/* <svg className="olymp-weather-cloudy-icon">
                        <use xlink: href="#olymp-weather-cloudy-icon">
									</use>
								</svg> */}

                        <div className="temperature-sensor-day">67°</div>
                    </li >

                    <li>
                        <div className="day">wed</div>
                        {/* <svg className="olymp-weather-rain-icon">
                        <use xlink: href="#olymp-weather-rain-icon"></use>
								</svg> */}

                        <div className="temperature-sensor-day">70°</div>
                    </li >

                    <li>
                        <div className="day">thu</div>
                        {/* <svg className="olymp-weather-storm-icon">
                        <use xlink: href="#olymp-weather-storm-icon">
									</use>
								</svg> */}

                        <div className="temperature-sensor-day">58°</div>
                    </li >

                    <li>
                        <div className="day">fri</div>
                        {/* <svg className="olymp-weather-snow-icon">
                        <use xlink: href="#olymp-weather-snow-icon"></use>
								</svg> */}

                        <div className="temperature-sensor-day">68°</div>
                    </li >

                    <li>
                        <div className="day">sat</div>

                        {/* <svg className="olymp-weather-wind-icon-header">
                        <use xlink: href="#olymp-weather-wind-icon-header">
									</use>
								</svg> */}

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
