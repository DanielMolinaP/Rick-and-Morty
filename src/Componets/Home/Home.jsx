import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Characters from '../Characters/Characters.jsx'
import Navbar from '../Navbar/Navbar.jsx'
import { getAllCharacters } from '../../Redux/Actions/index.js'
import Pagination from '../Pagination/Pagination.jsx'
import Footer from '../Footer/Footer.jsx'
import SearchBar from '../SearchBar/SearchBar.jsx'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllCharacters())
  }, [dispatch])

  return (
    <div className="wallpaperHome">
      <Navbar />
      <div className="container mt-2 pagination justify-content-center">
        <SearchBar />
      </div>
      <Pagination />
      <div className="container mt-5">
        <Characters />
      </div>
      <Pagination />
      <Footer />
    </div>
  )
}

export default Home
