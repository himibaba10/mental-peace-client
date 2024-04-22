import Paragraph from "@/src/utils/Paragraph";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const {
    title,
    description,
    _id,
    image,
    info: { author, datePosted },
  } = article;
  return (
    <div className="bg-secondary">
      <Link to={`/blogs/${_id}`}>
        <img
          className="w-full h-64 object-cover "
          src={image}
          alt={`Image of ${title}`}
        />
      </Link>
      <div className="p-7">
        <div className="flex justify-between items-center text-primary font-semibold uppercase">
          <span>{datePosted}</span>
          <span>
            <span className="inline-block h-[1px] w-7 bg-gray align-middle mr-2"></span>
            {author}
          </span>
        </div>
        <Link to={`/blogs/${_id}`}>
          <h3 className="font-playfair font-bold text-xl mt-3 mb-2">{title}</h3>
        </Link>
        <Paragraph margin="mb-0">{description.slice(0, 130)}...</Paragraph>
      </div>
    </div>
  );
};

export default ArticleCard;
