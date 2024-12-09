import axios, { Axios } from "axios";

const base_URL= "http://localhost:8080/api/employers";

export const listEmployers = () => axios.get(base_URL); 
export const addEmployer = (employer) => axios.post(base_URL,employer); 
export const getEmployer = (employerId)=> axios.get(base_URL +'/' + employerId);
export const updateEmployer = (employerId, employer) => axios.put(base_URL + '/' + employerId,employer);
export const deleteEmployerService = (employerId) => axios.delete(base_URL + '/' + employerId);