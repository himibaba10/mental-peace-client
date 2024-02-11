import DoubleImg from "../Shared/DoubleImg";
import ContactImg from "../../assets/Contact img.jpg";
import Heading from "../Shared/Heading";
import PrimaryButton from "@/src/utils/PrimaryButton";

const Contact = () => {
  return (
    <section className="section my-28 flex items-center">
      <DoubleImg img={ContactImg} bgColor="bg-primary" width="w-4/6" />
      <div className="w-1/2 text-center">
        <Heading subTitle="Come to us" title="We Are Here For You" />
        <PrimaryButton>Contact Us</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
