import { useQuery } from "@tanstack/react-query";
import useaxiospublic from "./useaxiospublic";

const useReview = () => {
    const axiosPublic = useaxiospublic()
    const {refetch, data: userReviews = []} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            console.log(res.data.reverse())
            return res.data
        }
    })
    return [ userReviews,refetch]
};

export default useReview;