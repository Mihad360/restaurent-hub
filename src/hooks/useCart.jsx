import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";

const useCart = () => {
    const axiosSecure = useAxiossecure()
    const {data: cart = []} = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data
        }
    })
    return [cart]
};

export default useCart;