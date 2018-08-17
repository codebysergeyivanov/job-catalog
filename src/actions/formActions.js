import axios from 'axios';
import * as types from '../types';


export const fetchData = (params) => {
    return async dispatch => {
        dispatch({type: types.CARDS_LOADING})
        try {
            let catalog = await axios.get(`https://jobs.github.com/positions.json?${params}`)

            if(catalog.data.length === 0) {
                dispatch({type: types.CARDS_NOT_FOUND})
            } else {
                dispatch({type: types.CARDS_UPDATED, payload: catalog.data})
            }

        } catch(e) {
            dispatch({type: types.CARDS_ERROR})
        }

    }
} 
