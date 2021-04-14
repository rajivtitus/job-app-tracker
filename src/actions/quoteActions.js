
import {GET_QUOTES} from '../constants/actionTypes'
import {getQuotesURL} from '../api'

export const getQuotes = () => async (dispatch) => {
    try {
        const {data} = await getQuotesURL()
        dispatch({
            type: GET_QUOTES,
            payload: data,
        })
    }
    catch(error){
        console.log(error)
    }    
}