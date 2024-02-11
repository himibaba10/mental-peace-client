import useArticles from "@/src/hooks/useArticles";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";

const ArticleCards = ({ limit }) => {
  const { articles, isLoading } = useArticles(limit);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
      {articles?.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default ArticleCards;
