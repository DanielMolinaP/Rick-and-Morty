import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPrevious, getNext } from '../../Redux/Actions/index.js'

const Pagination = () => {
  const infoRedux = useSelector((state) => state.info)
  const { prev, next } = infoRedux
  const dispatch = useDispatch()

  const onPrevious = () => {
    dispatch(getPrevious(prev))
  }
  
  const onNext = () => {
    dispatch(getNext(next))
  }
  return (
    <nav className='my-5'>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={onPrevious}>
              Previous
            </button>
          </li>
        ) : (
          <button className="page-link">Previous</button>
        )}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={onNext}>
              Next
            </button>
          </li>
        ) : (
          <button className="page-link">Next</button>
        )}
      </ul>
    </nav>
  )
}

export default Pagination
