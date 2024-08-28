import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";

const useAuth = () => {
    const auth = useContext(Authcontext)
    return auth
};

export default useAuth;