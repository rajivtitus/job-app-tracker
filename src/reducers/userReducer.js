import * as actionTypes from '../constants/actionTypes'

const defaultState = {
    profile: null
}

const userReducer = (user = defaultState, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_USER:
        case actionTypes.LOGIN_USER:
            localStorage.setItem('user', JSON.stringify({...action.payload}));
            return {
                ...action.payload,
                profile: action.payload.result
            }

        case actionTypes.LOGOUT_USER:
            localStorage.clear();
            return user

        default: 
        return user
    }
}

export default userReducer;