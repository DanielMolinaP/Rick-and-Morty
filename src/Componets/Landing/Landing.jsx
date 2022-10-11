import React from 'react'
import { NavLink } from 'react-router-dom'
//styles
import "../../styles/landing.css"

const Landing = () => {
return (
    <div className='wallpaper'>
      <div className="landing">
        <h1>WELCOME TO RICK AND MORTY WEB</h1>
          <br />
          <NavLink to="/home">
            <button className="buttonGo"> GO TO ANOTHER DIMENSION </button>
          </NavLink>
      </div>
    </div>
  )
}

export default Landing
