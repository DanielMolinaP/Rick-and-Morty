import React from 'react'
import imagen from '../../Imges/rickAndMorty.jpg'
import linkin from '../../Imges/linkin.png'
import github from '../../Imges/github.png'
import '../../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <figure>
            <a href="/">
              <img src={imagen} alt="Logo de start" />
            </a>
          </figure>
        </div>
        <div className="box">
          <h2>ABOUT ME</h2>
          <p>
            Hi! My name is Daniel Molina Pineda I'm 22 years old, I'm from
            Mexico City. This page was created by me.
          </p>
          <p>
            If do you like and want more information about the tecnologies used
            to create this page, contact me at the links.
          </p>
        </div>
        <div className="box">
          <h2>FOLLOW ME</h2>
          <div className="red-social">
            <a
              href="https://www.linkedin.com/in/daniel-molina-a61b85236/"
              target="_blank"
            >
              <img src={linkin} height="45px" width="45px"></img>
            </a>
            <a href="https://github.com/DanielMolinaP" target="_blank">
              <img src={github} height="45px" width="55px"></img>
            </a>
          </div>
        </div>
      </div>
      <div className="grupo-2">
        <small>
          &copy; 2022 <b></b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  )
}

export default Footer

{
  /* <div className="container-fluid">
      <div className="row p-5 bg-dark text-white">
        <div className="col-xs-12 col-md-6 col-lg4">
          <imag
            src="https://s.ecrater.com/stores/442768/5e6e23856b19d_442768b.jpg"
            alt="logo"
            style={{ width: '100px' }}
          />
        </div>
        <div className="col-xs-12 col-md-6 col-lg4">
          <h2>ABOUT ME</h2>
          <p>
            Hi! My name is Daniel Molina Pineda I'm 22 years old, I'm from
            Mexico City. This page was created by me.
          </p>
          <p>
            If do you like and want more information about the tecnologies used
            to create this page, contact me at the links.
          </p>
        </div>
      </div>
    </div> */
}
