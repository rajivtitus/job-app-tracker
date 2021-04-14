import { REGISTER_USER, LOGIN_USER} from '../constants/actionTypes'
import {registerURL, loginURL} from '../api'

export const registerUser = (formData, history) => async (dispatch) => {
    try {
        const {data} = await registerURL(formData)
        dispatch({
            type: REGISTER_USER,
            payload: data,
        })
        history.push('/home')
    }
    catch(err) {
        console.log(err)
    }
}

export const loginUser = (formData, history) => async (dispatch) => {
    try {
        const {data} = await loginURL(formData)
        dispatch({
            type: LOGIN_USER,
            payload: data,
        })
        history.push('/home')
    }
    catch(err) {
        console.log(err)
    }
}