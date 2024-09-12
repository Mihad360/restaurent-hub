import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";

const useAdmin = () => {

    const {user,loading} = useAuth()
    const axiosSecure = useAxiossecure()

    const {data: isAdmin, isPending: isAdminloading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            console.log('user', user)
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            console.log(res.data.admin)
            return res.data?.admin
        }
    })
    return [isAdmin,isAdminloading]
};

export default useAdmin;