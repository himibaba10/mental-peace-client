import TestimonialCard from "./TestimonialCard";

const TestimonialCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[0, 1].map((testimonial) => (
        <TestimonialCard
          key={testimonial}
          name="User Name"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      ))}
    </div>
  );
};

export default TestimonialCards;
