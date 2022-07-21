import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getPrevious, getNext, getAllInfo1} from '../../Redux/Actions/index.js'

const Pagination = () => {

  const infoRedux = useSelector(state => state.info)
  const { prev, next } = infoRedux
  const dispatch = useDispatch()

  const onPrevious = () =>{
    dispatch(getPrevious(prev))
    dispatch(getAllInfo1(prev))
  }
  const onNext = () =>{
    dispatch(getNext(next))
    dispatch(getAllInfo1(next))
  }
  return (
    <nav>
      <ul className='pagination'>
        {
          prev ? 
          <li className='item'>
            <button className='button' onClick={onPrevious}>Previous</button>
          </li> : null
        }
        {
          next ?
          <li className='item'>
            <button className='button' onClick={onNext}>Next</button>
          </li>: null
        }
      </ul>
    </nav>
  )
}

export default Pagination