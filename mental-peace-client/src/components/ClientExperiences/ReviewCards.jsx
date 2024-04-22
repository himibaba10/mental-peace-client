import ReviewCard from "./ReviewCard";

const ReviewCards = () => {
  const reviews = [
    { _id: 1, name: "Himibaba", description: "This is review 1" },
    { _id: 2, name: "Himibaba", description: "This is review 2" },
    { _id: 3, name: "Himibaba", description: "This is review 3" },
  ];

  return (
    <div className="section my-28 grid grid-cols-2 gap-10">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review} />
      ))}
    </div>
  );
};

export default ReviewCards;
