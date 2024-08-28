import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";
import useAuth from "./useAuth";

const useCart = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiossecure()
    const {refetch, data: cart = []} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;