import DoubleImg from "../Shared/DoubleImg";
import contactImg from "../../assets/hero image.jpg";
import ContactAddress from "./ContactAddress";

const ContactAddressContainer = () => {
  return (
    <div className="section flex gap-28 my-28 items-center">
      <DoubleImg width="w-full" img={contactImg} bgColor="bg-primary" />
      <ContactAddress />
    </div>
  );
};

export default ContactAddressContainer;
