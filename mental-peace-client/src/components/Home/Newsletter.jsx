import Paragraph from "@/src/utils/Paragraph";
import Heading from "../Shared/Heading";
import NewsletterForm from "./NewsletterForm";

const Newsletter = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="section flex gap-20 items-center">
        <div className="w-1/2">
          <Heading
            subTitle="Nieuwsletter"
            title="Submit to get update"
            align="left"
          />
          <Paragraph>
            Every 2 months I share knowledge, insights, experiences and
            information in a newsletter. You can register here.
          </Paragraph>
        </div>
        <div className="w-1/2">
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
