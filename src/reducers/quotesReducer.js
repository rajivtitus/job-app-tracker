import {GET_QUOTES} from '../consonants/quoteActions'

const quotesReducer = (state = [], action) => {
    switch(action.type){
        case GET_QUOTES:
            return [...action.payload]
        
        default:
            return state;

    }
}

export default quotesReducer