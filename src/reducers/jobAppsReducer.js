import * as jobActions from '../consonants/jobActions'


const jobAppsReducer = (apps = [], action) => {
    switch(action.type) {
        case jobActions.GET_JOB_APPS:
            return [...action.payload]

        case jobActions.CREATE_JOB_APP:
            return [...apps, action.payload]

        case jobActions.DELETE_JOB_APP:
            return apps.filter(app => app._id !== action.payload)

        default:
            return apps
    }
}

export default jobAppsReducer;