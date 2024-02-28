import ContactAddressList from "./ContactAddressList";
import { GoHome } from "react-icons/go";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const ContactAddressLists = () => {
  return (
    <div className="space-y-5">
      <ContactAddressList
        icon={<GoHome />}
        title="Adress"
        description="Melartek, Kaundia, Savar, Dhaka"
      />
      <ContactAddressList
        icon={<FaRegEnvelope />}
        title="Email"
        description="himibaba10@gmail.com"
      />
      <ContactAddressList
        icon={<FiPhone />}
        title="Phone Number"
        description="+880-199-772-2621"
      />
    </div>
  );
};

export default ContactAddressLists;
