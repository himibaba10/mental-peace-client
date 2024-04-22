import Heading from "../Shared/Heading";
import DoctorCards from "./DoctorCards";

const PopularDoctors = () => {
  return (
    <section className="section my-20">
      <Heading
        title="The Best Doctors You Will Find"
        subTitle="Popular Doctors"
        size="text-4xl"
      />
      <DoctorCards limit={3} />
    </section>
  );
};

export default PopularDoctors;
