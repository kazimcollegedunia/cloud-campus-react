import axios from "axios";

const api = axios.create({
  baseURL: "http://cloud-campus-apis.test/api/v1", // CHANGE THIS
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// OPTIONAL: You can add interceptors for tokens here later

export default api;


