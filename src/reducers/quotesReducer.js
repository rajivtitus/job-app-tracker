import * as actionTypes from '../constants/actionTypes'

const quotesReducer = (quotes = [], action) => {
    switch(action.type){
        case actionTypes.GET_QUOTES:
            return action.payload
        
        default:
            return quotes;
    }
}

export default quotesReducer