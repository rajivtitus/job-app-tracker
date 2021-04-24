import axios from 'axios';

const API = axios.create({baseURL: "https://jobase.herokuapp.com/"})

API.interceptors.request.use(req => {
    if (localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})

export const getJobAppsURL = () => API.get("/job-apps");
export const createJobAppURL = (newJobApp) => API.post("/job-apps", newJobApp);
export const deleteJobAppURL = (id) => API.delete(`/job-apps/${id}`);
export const updateJobAppURL = (id, activityData) => API.patch(`/job-apps/${id}`, activityData);
export const inactiveJobAppURL = (id) => API.patch(`/job-apps/inactive/${id}`);
export const favoriteJobAppURL = (id) => API.patch(`/job-apps/favorite/${id}`);

export const registerURL = (formData) => API.post("/user/register", formData);
export const loginURL = (formData) => API.post("/user/login", formData);

export const getQuotesURL = () => axios.get('https://type.fit/api/quotes');
