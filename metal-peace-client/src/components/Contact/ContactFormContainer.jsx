import Paragraph from "@/src/utils/Paragraph";
import Heading from "../Shared/Heading";
import ContactForm from "./ContactForm";

const ContactFormContainer = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="section text-center">
        <Heading
          title="Do you have a question, or would you like to make an appointment?"
          subTitle="We will contact you as soon as possible"
        />
        <Paragraph margin="-mt-3.5 mb-10">
          Stuur me een e-mail of vul het onderstaande contactformulier in.
        </Paragraph>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormContainer;
