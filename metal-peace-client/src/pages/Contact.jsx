import ContactAddressContainer from "../components/Contact/ContactAddressContainer";
import ContactFormContainer from "../components/Contact/ContactFormContainer";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactMap from "../components/Contact/ContactMap";

const Contact = () => {
  return (
    <main>
      <ContactInfo />
      <ContactFormContainer />
      <ContactAddressContainer />
      <ContactMap />
    </main>
  );
};

export default Contact;
