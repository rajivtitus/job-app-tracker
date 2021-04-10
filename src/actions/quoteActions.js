import axios from 'axios'

import {GET_QUOTES} from '../consonants/quoteActions'

export const getQuotes = () => async (dispatch) => {
    try {
        const {data} = await axios.get('https://type.fit/api/quotes')
        dispatch({
            type: GET_QUOTES,
            payload: data,
        })
    }
    catch(error){
        console.log(error)
    }    
}