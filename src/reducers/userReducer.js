import * as actionTypes from '../constants/actionTypes'

const defaultState = {
    login: {
        hasError: false,
        errorMsg: ""
    }
}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_USER:
        case actionTypes.LOGIN_USER:
            localStorage.setItem('user', JSON.stringify({...action.payload}));
            return {
                login: {
                    hasError: false,
                    errorMsg: "",
                },
                ...action.payload
            }

        case actionTypes.SET_USER:
            return {
                ...state,
                ...JSON.parse(localStorage.getItem('user'))
            }

        case actionTypes.LOGOUT_USER:
            localStorage.clear();
            return {
                login: {
                    hasError: false,
                    errorMsg: "",
                },
            }
        
        case actionTypes.HAS_ERROR:
            return {
                login: {
                    hasError: true,
                    errorMsg: action.payload,
                }
            }

        default: 
        return state
    }
}

export default userReducer;