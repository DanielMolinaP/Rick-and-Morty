// Importa las action types acá
import {
  GET_ALL_CHARACTERS,
  GET_BY_NAME,
  GET_ALL_CHARACTERS_PREVIOUS,
  GET_ALL_CHARACTERS_NEXT,
} from '../Actions/index.js'

const initialState = {
  characters: [],
  info: {},
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
        //characters: state.characters.concat(action.payload)
      }
    case GET_ALL_CHARACTERS_NEXT:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
      }
    case GET_ALL_CHARACTERS_PREVIOUS:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
      }
    case GET_BY_NAME:
      return {
        ...state,
        characters: action.payload.results,
        info: action.payload.info,
      }
    default:
      return state
  }
}

export default rootReducer
