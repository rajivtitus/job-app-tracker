import * as actionTypes from '../constants/actionTypes'
import {registerURL, loginURL} from '../api'

export const registerUser = (formData, history) => async (dispatch) => {
    try {
        const {data} = await registerURL(formData)
        dispatch({
            type: actionTypes.REGISTER_USER,
            payload: data,
        })
        history.push('/dashboard')
    }
    catch(err) {
        if(err.response){
            console.log(err.response);
            dispatch({
                type: actionTypes.HAS_ERROR,
                payload: err.response.data
            })
        }
    }
}

export const loginUser = (formData, history) => async (dispatch) => {
    try {
        const {data} = await loginURL(formData)
        dispatch({
            type: actionTypes.LOGIN_USER,
            payload: data,
        })
        history.push('/dashboard')
    }
    catch(err) {
        if(err.response){
            console.log(err.response);
            dispatch({
                type: actionTypes.HAS_ERROR,
                payload: err.response.data
            })
        }
    }
}
