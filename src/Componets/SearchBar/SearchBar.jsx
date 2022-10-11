import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCharacterByName } from '../../Redux/Actions'

const SearchBar = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === '') {
      alert('please enter a name')
    } else {
      dispatch(getCharacterByName(name))
      setName('')
    }
  }
  return (
    <nav className="navbar bg-light ustify-content-center">
      <form className="d-flex" role="search">
        <input
          onChange={(e) => handleInputChange(e)}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          className="btn btn-outline-success"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
  )
}

export default SearchBar
