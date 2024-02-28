import BlogInfo from "../components/Blogs/BlogInfo";
import ArticleCards from "../components/Shared/ArticleCards";

const Blogs = () => {
  return (
    <section>
      <BlogInfo />
      <div className="section my-20">
        <ArticleCards limit={10000} />
      </div>
    </section>
  );
};

export default Blogs;
