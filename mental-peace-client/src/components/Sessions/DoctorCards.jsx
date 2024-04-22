import useDoctors from "@/src/hooks/useDoctors";
import Loader from "../Shared/Loader";
import DoctorCard from "./DoctorCard";

const DoctorCards = ({ limit }) => {
  const { doctors, isError, isLoading } = useDoctors();
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>There has been some error</div>;
  }

  return (
    <div className="mt-5 grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {doctors.slice(0, limit).map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorCards;
