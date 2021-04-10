import * as jobActions from '../consonants/jobActions'


const jobAppsReducer = (state = [], action) => {
    switch(action.type) {
        case jobActions.GET_JOB_APPS:
            return [...action.payload]

        default:
            return state
    }
}

export default jobAppsReducer;