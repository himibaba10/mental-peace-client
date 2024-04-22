import useArticles from "@/src/hooks/useArticles";
import ArticleCard from "./ArticleCard";
import Loader from "./Loader";
import { useState } from "react";
import PrimaryButton from "@/src/utils/PrimaryButton";

const ArticleCards = ({ limit }) => {
  const [displayCards, setDisplayCards] = useState(6);
  const { articles, isLoading } = useArticles(limit);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
        {articles?.slice(0, displayCards).map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
      {displayCards < articles?.length && (
        <div className="text-center mt-10">
          <PrimaryButton
            handleClick={() => setDisplayCards(displayCards + 6)}
            width="w-52"
          >
            Show More
          </PrimaryButton>
        </div>
      )}
    </>
  );
};

export default ArticleCards;
