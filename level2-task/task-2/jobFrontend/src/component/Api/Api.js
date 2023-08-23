import axios from "axios";

const API = axios.create({
  //   baseURL: "https://blog-api-8npz.onrender.com",
  baseURL: "http://localhost:9300",
});

//jobs api.....
export const createJobApi = (job) => API.post(`/api/jobs/create-new-job`, job);
export const getAllJobsApi = () => API.get(`/api/jobs/all-jobs`);
export const getJobByIdApi = (id) => API.get(`/api/jobs/${id}`);

//....user api

export const createUser = (user) => API.post(`/api/users/`, user);
export const getUserById = (id) => API.get(`/api/users/${id}`);
export const getCurrentUser = (token) =>
  API.get(`/api/users/get-profile/self`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

///api/auth

export const register = (reg) => API.post(`/api/auth/register`, reg);
export const login = (userData) => API.post(`/api/auth/login`, userData);
export const logout = () => API.post(`/api/auth/logout`);
