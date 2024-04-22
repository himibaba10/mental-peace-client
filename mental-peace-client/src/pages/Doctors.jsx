import DoctorsInfo from "../components/Doctors/DoctorsInfo";
import DoctorCards from "../components/Sessions/DoctorCards";

const Doctors = () => {
  return (
    <>
      <DoctorsInfo />
      <div className="my-20">
        <DoctorCards />
      </div>
    </>
  );
};

export default Doctors;
