import * as actionTypes from '../constants/actionTypes'
import {getJobAppsURL, createJobAppURL, deleteJobAppURL, updateJobAppURL, inactiveJobAppURL} from '../api'


export const getJobApps = () => async (dispatch) => {
    try {
        const {data} = await getJobAppsURL()
        dispatch({
            type: actionTypes.GET_JOB_APPS,
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
            type: actionTypes.CREATE_JOB_APP,
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
            type: actionTypes.DELETE_JOB_APP,
            payload: appId
        })
    }
    catch(error){
        console.log(error)
    }    
}

export const inactiveJobApp = (appId) => async (dispatch) => {
    try {
        const {data} = await inactiveJobAppURL(appId);
        dispatch({
            type: actionTypes.INACTIVE_JOB_APP,
            payload: data
        })
    }
    catch(error){
        console.log(error)
    }    
}

export const updateJobApp = (appId, activityData) => async (dispatch) => {
    try {
        const {data} = await updateJobAppURL(appId, activityData);
        dispatch({
            type: actionTypes.UPDATE_JOB_APP,
            payload: data
        })
    }
    catch(error){
        console.log(error)
    }    
}

