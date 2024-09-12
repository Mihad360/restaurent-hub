import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";

const usePayment = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiossecure()

    const {data: payments = []} = useQuery({
        queryKey: ['payments',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [payments]
};

export default usePayment;