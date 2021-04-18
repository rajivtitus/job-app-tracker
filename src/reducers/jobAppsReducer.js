import * as actionTypes from '../constants/actionTypes'

const jobAppsReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.GET_JOB_APPS:
            return action.payload

        case actionTypes.CREATE_JOB_APP:
            return [...state, action.payload]

        case actionTypes.DELETE_JOB_APP:
            return state.filter(app => app._id !== action.payload)

        case actionTypes.UPDATE_JOB_APP:
        case actionTypes.INACTIVE_JOB_APP:
            return state.map(app => app._id === action.payload._id ? action.payload : app)

        default:
            return state
    }
}

export default jobAppsReducer;