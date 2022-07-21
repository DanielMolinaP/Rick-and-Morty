import axios from 'axios'


export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS';
export const GET_INFO = 'GET_INFO';
export const GET_INFO1 = 'GET_INFO1';
export const GET_PREVIOUS = 'GET_PREVIOUS';
export const GET_NEXT = 'GET_NEXT';



export const getAllCharacters = () => {
    return async function (dispatch){
        const response = await axios.get('https://rickandmortyapi.com/api/character')
                                        .then(r => r.data.results)
            dispatch({
                type: GET_ALL_CHARACTERS,
                payload: response,
            })
    }
};

export const getAllInfo = () => {
    return async function (dispatch){
        const response = await axios.get('https://rickandmortyapi.com/api/character')
                                        .then(r => r.data.info)
            dispatch({
                type: GET_INFO,
                payload: response,
            })
    }
};
export const getAllInfo1 = (url) => {
    return async function (dispatch){
        const response = await axios.get(url)
                                        .then(r => r.data.info)
            dispatch({
                type: GET_INFO1,
                payload: response,
            })
    }
};

export const getPrevious = (url) => {
    return async function (dispatch){
        const response = await axios.get(url)
                            .then(r => r.data.results)
            dispatch({
                type: GET_PREVIOUS,
                payload: response,
            })
    }
};

export const getNext = (url) => {
    return async function (dispatch){
        const response = await axios.get(url)
                                .then(r => r.data.results)
            dispatch({
                type: GET_ALL_CHARACTERS,
                payload: response,
            })
    }
};