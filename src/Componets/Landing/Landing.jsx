import React from 'react'
import imgLanding from '../../Imges/Rick&Morty.jpg'
import estilos from './landing.module.css'
import { NavLink } from 'react-router-dom'

const Landing = () => {
return (
    <>
			<img className={estilos.fondo} src={imgLanding} alt={'background'}/>
      <NavLink to={"/home"}>
        <button>Go to another dimension</button>
      </NavLink>
		</>
  )
}

export default Landing