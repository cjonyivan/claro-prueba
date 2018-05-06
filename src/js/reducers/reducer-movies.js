import { SHOW_USERS } from '../../actions/getMovies';

const initialState = {
    list: []
}

export function showMovies(state = initialState, action) {
    
    switch (action.type) {
        case SHOW_USERS:
            return Object.assign({}, state, {list: action.payload})
        default:
            return state 
    }
    
}