import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useArticles = (limit) => {
  const {
    data: articles,
    isLoading,
    error,
  } = useQuery({
    enabled: limit ? true : false,
    queryKey: ["articles", limit],
    queryFn: async () => {
      const res = await axios("/articles.json");
      return res.data;
    },
  });

  return { articles, isLoading, error };
};

export default useArticles;
