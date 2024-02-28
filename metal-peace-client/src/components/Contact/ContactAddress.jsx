import Heading from "../Shared/Heading";
import ContactAddressLists from "./ContactAddressLists";

const ContactAddress = () => {
  return (
    <div>
      <Heading
        align="left"
        title="We would like to help you"
        subTitle="Our Address"
      />
      <ContactAddressLists />
    </div>
  );
};

export default ContactAddress;
