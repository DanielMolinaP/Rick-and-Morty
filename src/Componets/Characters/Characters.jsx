import React from 'react'
import { useSelector } from 'react-redux'


const Characters = () => {

  const characterRedux = useSelector(state => state.characters)
  
  return (
    <div className="row justify-content-center">
        {characterRedux.map((item,index) => (
            <div key={index} className="col mb-4">
                <div className='card' style={{maxWidth:'300px'}}>
                <img src={item.image} alt='imagen'/>
                <div className='card-boby'>
                  <h5 className='card-title'>{item.name}</h5>
                  <hr/>
                  <p>Location: {item.location.name}</p>
                  <p>Species: {item.species}</p>
                  </div>
                </div>
            </div>
          ))}
    </div>
  )
}

export default Characters