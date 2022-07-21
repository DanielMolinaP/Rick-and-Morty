import React, {useEffect} from 'react'
import { useDispatch} from 'react-redux';
import Characters from '../Characters/Characters.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { getAllCharacters, getAllInfo } from '../../Redux/Actions/index.js'
import Pagination from '../Pagination/Pagination.jsx';
import estilos from './home.module.css'

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCharacters())
        dispatch(getAllInfo())
    });

    return (
      <div className={estilos.home}>
        <Navbar/>
        <Pagination/>
        <div className='container'>
          <Characters/>
        </div>
        <Pagination/>
        </div>
    )
}


export default Home;












// const Home = () => {
//     const [characters, setCharacters] = useState([])

//     const url = 'https://rickandmortyapi.com/api/character'

//     const fetchCharacters = () => {
//         fetch(url)
//         .then(response => response.json())
//         .then(data => setCharacters(data.results))
//         .catch(error => console.log(error))
//     }

//     useEffect(() => {
//         fetchCharacters(url);
//     })

//     return (
//         <>
//         <Navbar/>
//         <div className='container'>
//             <Characters characters={characters} />
//         </div>
//         </>
//     )
// }

// export default Home