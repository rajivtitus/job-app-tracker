import {GET_QUOTES} from '../consonants/quoteActions'

const quotesReducer = (quotes = [], action) => {
    switch(action.type){
        case GET_QUOTES:
            return [...action.payload]
        
        default:
            return quotes;

    }
}

export default quotesReducer