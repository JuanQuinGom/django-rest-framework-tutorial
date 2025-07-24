import axios from "axios";
const BACK_URL = "http://localhost:8000";

export const getAllTasks = () => {
    const res = axios.get(`${BACK_URL}/tasks/api/v1/tasks/`);
    return res;
}