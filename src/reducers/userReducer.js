import * as actionTypes from '../constants/actionTypes'


const userReducer = (user = {}, action) => {
    switch(action.type) {
        case actionTypes.REGISTER_USER:
        case actionTypes.LOGIN_USER:
            localStorage.setItem('user', JSON.stringify({...action.payload}));
            return {...action.payload}

        case actionTypes.LOGOUT_USER:
            localStorage.clear();
            return user

        default: 
        return user
    }
}

export default userReducer;