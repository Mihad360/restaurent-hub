import { useQuery } from "@tanstack/react-query";
import useaxiospublic from "./useaxiospublic";

const useFood = () => {
  // const [menu, setMenu] = useState([])
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     fetch('http://localhost:5000/menu')
  //     .then(res => res.json())
  //     .then(data => {

  //         setMenu(data)
  //         setLoading(false)
  //     })
  // },[])

  const axiosPublic = useaxiospublic();

  const {
    data: menu = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menus");
      return res.data;
    },
  });

  return [menu, loading, refetch];
};

export default useFood;
