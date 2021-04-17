import * as actionTypes from '../constants/actionTypes'

const quotesReducer = (state = [], action) => {
    switch(action.type){
        case actionTypes.GET_QUOTES:
            return action.payload
        
        default:
            return state;
    }
}

export default quotesReducer