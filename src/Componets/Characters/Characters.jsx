import React from 'react'
import { useSelector } from 'react-redux'


const Characters = () => {

  const characterRedux = useSelector(state => state.characters)

  return (
    <div className='row'>
      {characterRedux.map((item,index) => (
          <div key={index} className='col'>
            <div className='card'>
              <img src={item.image} alt='character'/>
              <div className='body-card'>
                <p>{item.name}</p>
                <p>{item.species}</p>
                <p>{item.origin.name}</p>
                <p>{item.status}</p>
                <p>{item.location.name}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Characters




// const Characters = ({characters}) => {

  

//   return (
//     <div className='row'>
//       {characters.map((item,index) => (
//           <div key={index} className='col'>
//             <div className='card'>
//               <img src={item.image} alt='character'/>
//               <div className='body-card'>
//                 <p>{item.name}</p>
//                 <p>{item.species}</p>
//                 <p>{item.origin.name}</p>
//                 <p>{item.status}</p>
//                 <p>{item.location.name}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Characters