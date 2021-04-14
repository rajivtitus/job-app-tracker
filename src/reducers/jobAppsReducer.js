import * as actionTypes from '../constants/actionTypes'

const jobAppsReducer = (apps = [], action) => {
    switch(action.type) {
        case actionTypes.GET_JOB_APPS:
            return action.payload

        case actionTypes.CREATE_JOB_APP:
            return [...apps, action.payload]

        case actionTypes.DELETE_JOB_APP:
            return apps.filter(app => app._id !== action.payload)

        default:
            return apps
    }
}

export default jobAppsReducer;