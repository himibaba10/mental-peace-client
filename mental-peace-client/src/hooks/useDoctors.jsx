import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDoctors = () => {
  const {
    isLoading,
    data: doctors,
    isError,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await axios("doctors.json");
      return res.data;
    },
  });

  return { isLoading, doctors, isError };
};

export default useDoctors;
