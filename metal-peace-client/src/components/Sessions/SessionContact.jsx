import Heading from "../Shared/Heading";
import SessionContactForm from "./SessionContactForm";

const SessionContact = () => {
  return (
    <section className="my-28 py-20 bg-secondary">
      <div className="section">
        <Heading
          title="Reach Out To Us Anytime!"
          subTitle="We are here for you"
        />
        <SessionContactForm />
      </div>
    </section>
  );
};

export default SessionContact;
