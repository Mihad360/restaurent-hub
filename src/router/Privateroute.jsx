import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Privateroute = ({children}) => {

    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading) {
        return <div className=" h-screen flex items-center mx-auto w-16">
        <span className="loading loading-dots loading-lg"></span>
    </div>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login"  state={{from: location}} replace></Navigate>
};

export default Privateroute;