import Heading from "../Shared/Heading";
import SessionCards from "./SessionCards";

const Sessions = () => {
  return (
    <section className="section my-20">
      <Heading
        title="Mental peace sessions are transformative"
        subTitle="Transformation thanks to Mental Peace"
      />
      <SessionCards />
    </section>
  );
};

export default Sessions;
