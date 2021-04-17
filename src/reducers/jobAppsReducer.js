import * as actionTypes from '../constants/actionTypes'

const jobAppsReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.GET_JOB_APPS:
            return action.payload

        case actionTypes.CREATE_JOB_APP:
            return [...state, action.payload]

        case actionTypes.DELETE_JOB_APP:
            return state.filter(app => app._id !== action.payload)

        default:
            return state
    }
}

export default jobAppsReducer;