// Importa las action types acá
import { GET_ALL_CHARACTERS, GET_INFO, GET_INFO1, GET_PREVIOUS, GET_NEXT } from '../Actions/index.js'

const initialState = {
	characters: [],
	info: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
			case GET_ALL_CHARACTERS:
				return{
					...state,
					characters: action.payload
					//characters: state.characters.concat(action.payload)
				}
			case GET_INFO:
				return{
					...state,
					info: action.payload
				}
			case GET_INFO1:
				return{
					...state,
					info: action.payload
					}
			case GET_PREVIOUS:
				return{
					...state,
					characters:action.payload
				}
			case GET_NEXT:
				return{
					...state,
					characters:action.payload
				}
				default:
					return state
}
};

export default rootReducer;