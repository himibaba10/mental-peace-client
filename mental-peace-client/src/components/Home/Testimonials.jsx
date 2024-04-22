import SecondaryButton from "@/src/utils/SecondaryButton";
import Heading from "../Shared/Heading";
import TestimonialCards from "./TestimonialCards";
import { Link } from "react-router-dom";

const Testimonials = () => {
  return (
    <section className="bg-secondary my-20 py-20">
      <div className="section">
        <Heading title="Clients and experiences" subTitle="What Clients Say" />
        <TestimonialCards />
        <div className="text-center mt-16">
          <Link to="/client-experiences">
            <SecondaryButton>View all experiences</SecondaryButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
