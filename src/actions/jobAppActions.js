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