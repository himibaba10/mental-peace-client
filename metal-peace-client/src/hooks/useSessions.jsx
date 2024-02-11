import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSessions = () => {
  const { data: sessions, isLoading } = useQuery({
    queryKey: ["sessions"],
    queryFn: async () => {
      const res = await axios("/SessionCardData.json");
      return res.data;
    },
  });
  return { sessions, isLoading };
};

export default useSessions;
