import axios from 'axios'

export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const GET_ALL_CHARACTERS_NEXT = 'GET_ALL_CHARACTERS_NEXT'
export const GET_ALL_CHARACTERS_PREVIOUS = 'GET_ALL_CHARACTERS_PREVIOUS'
export const GET_BY_NAME = 'GET_BY_NAME'

export const getAllCharacters = () => {
  return async function (dispatch) {
    const response = await axios
      .get('https://rickandmortyapi.com/api/character')
      .then((r) => r.data)
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: response,
    })
  }
}

export const getPrevious = (url) => {
  return async function (dispatch) {
    const response = await axios.get(url).then((r) => r.data)
    dispatch({
      type: GET_ALL_CHARACTERS_PREVIOUS,
      payload: response,
    })
  }
}

export const getNext = (url) => {
  return async function (dispatch) {
    const response = await axios.get(url).then((r) => r.data)
    dispatch({
      type: GET_ALL_CHARACTERS_NEXT,
      payload: response,
    })
  }
}

export const getCharacterByName = (name) => {
  return async function (dispatch) {
    try {
      let response = await axios
        .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
        .then((res) => res.data)
      return dispatch({
        type: GET_BY_NAME,
        payload: response,
      })
    } catch (error) {
      alert('character does not exist')
    }
  }
}
