import * as jobActions from '../constants/actionTypes'
import {getJobAppsURL, createJobAppURL, deleteJobAppURL} from '../api'

export const getJobApps = () => async (dispatch) => {
    try {
        const {data} = await getJobAppsURL()
        dispatch({
            type: jobActions.GET_JOB_APPS,
            payload: data,
        })
    }
    catch(error){
        console.log(error)
    }    
}

export const createJobApp = (jobData) => async (dispatch) => {
    try {
        const {data} = await createJobAppURL(jobData)
        dispatch({
            type: jobActions.CREATE_JOB_APP,
            payload: data,
        })
    }
    catch(error){
        console.log(error)
    }    
}

export const deleteJobApp = (appId) => async (dispatch) => {
    try {
        await deleteJobAppURL(appId)
        dispatch({
            type: jobActions.DELETE_JOB_APP,
            payload: appId
        })
    }
    catch(error){
        console.log(error)
    }    
}