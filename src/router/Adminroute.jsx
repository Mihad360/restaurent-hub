import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const Adminroute = ({children}) => {

    const {user, loading} = useAuth()
    const [isAdmin, isAdminloading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminloading) {
        return <div className=" h-screen flex items-center mx-auto w-16">
        <span className="loading loading-dots loading-lg"></span>
    </div>
    }

    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login"  state={{from: location}} replace></Navigate>
};

export default Adminroute;