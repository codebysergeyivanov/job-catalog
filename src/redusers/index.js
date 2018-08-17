import * as types from '../types';

const initialState = {
    loading: false,
    error: false
};

export default (state = initialState, action) => {
    switch(action.type) {

        case types.CARDS_UPDATED:
        return {...state, 
            data: action.payload,
            loading: false,
            error: false
        };

        case types.CARDS_LOADING:
        return {...state,
            loading: true,
            error: false,
            notFound: false
        }

        case types.CARDS_ERROR:
        return {...state,
            error: true,
            loading: false
        }

        case types.CARDS_NOT_FOUND:
        return {...state,
            loading: false,
            notFound: true
        }

        default:
        return state;
    }
}