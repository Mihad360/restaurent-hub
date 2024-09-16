import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiossecure = () => {

    const navigate = useNavigate()
    const {logout} = useAuth()

  // Add a request interceptor
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  // axiosSecure.interceptors.response.use(
  //   (response) => {
  //     return response;
  //   },
  //   async(error) => {
  //       const status = error.response.status
  //       console.log('status error', status)
  //       if(status === 401 || status === 403){
  //           await logout();
  //           navigate('/login')
  //       }
  //     return Promise.reject(error);
  //   }
  // );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error", status);
      if (status === 401 || status === 403) {
        const token = localStorage.getItem("access-token");
        if (!token) {
          // Token is missing, log out and navigate to login
          await logout();
          navigate("/login");
        } else {
          // Handle potential token expiration or renewal
          console.log("Attempting token renewal or other recovery logic...");
          // You could implement token refresh logic here if needed
        }
      }
      return Promise.reject(error);
    }
  );
  

  return axiosSecure;
};

export default useAxiossecure;
