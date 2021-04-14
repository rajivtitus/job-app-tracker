import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})

API.interceptors.request.use(req => {
    if (localStorage.getItem('userProfile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('userProfile')).token}`
    }
    return req;
})

export const getJobAppsURL = () => API.get("/job-apps");
export const createJobAppURL = (newJobApp) => API.post("/job-apps", newJobApp);
export const deleteJobAppURL = (id) => API.delete(`/job-apps/${id}`);

export const registerURL = (formData) => API.post("/user/register", formData);
export const loginURL = (formData) => API.post("/user/login", formData);

export const getQuotesURL = () => axios.get('https://type.fit/api/quotes');
