import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://restaurent-hub-server.vercel.app",
});

const useaxiospublic = () => {
  return axiosPublic;
};

export default useaxiospublic;
