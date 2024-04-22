const ReviewCard = ({ review: { name, description } }) => {
  return (
    <div className="border border-primary p-5 shadow-lg">
      <h2 className="bg-primary text-white px-10 py-2 inline-block">{name}</h2>
      <p className="mt-5 ml-20">{description}</p>
    </div>
  );
};

export default ReviewCard;
