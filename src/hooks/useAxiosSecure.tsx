import axios from "axios";

export const axiosBase = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  return axiosBase;
};

export default useAxiosSecure;
