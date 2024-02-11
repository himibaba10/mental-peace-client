import ArticleCards from "../Shared/ArticleCards";
import Heading from "../Shared/Heading";

const Articles = () => {
  return (
    <section className="section my-20">
      <Heading title="Articles" subTitle="Recent articles" />
      <ArticleCards limit={3} />
    </section>
  );
};

export default Articles;
