import axios from 'axios'

import * as jobActions from '../consonants/jobActions'

export const getJobApps = () => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:5000/job-apps')
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
        const {data} = await axios.post('http://localhost:5000/job-apps', jobData)
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
        await axios.delete(`http://localhost:5000/job-apps/${appId}`)
        dispatch({
            type: jobActions.DELETE_JOB_APP,
            payload: appId
        })
    }
    catch(error){
        console.log(error)
    }    
}