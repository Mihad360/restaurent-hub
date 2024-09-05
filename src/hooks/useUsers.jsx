import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";

const useUsers = () => {
    const axiosSecure = useAxiossecure()
    const {refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    return [users, refetch]
};

export default useUsers;