import React from 'react'

export default function BirthdaysAlert() {
  return (
    <div className="widget w-birthday-alert">
      <div className="icons-block">
        {/* <svg className="olymp-cupcake-icon">
                    <use xlink: href="svg-icons/sprites/icons.svg#olymp-cupcake-icon"></use>
							</svg> */}
        <a href="#1" className="more">
          {/* <svg className="olymp-three-dots-icon">
                <use xlink: href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
								</svg> */}
        </a>
      </div>

      <div className="content">
        <div className="author-thumb">
          <img src="img/avatar48-sm.jpg" alt="author" />
        </div>
        <span>Today is</span>
        <a href="#1" className="h4 title">
          Marina Valentine’s Birthday!
        </a>
        <p>Leave her a message with your best wishes on her profile page!</p>
      </div>
    </div>
  )
}
