import PopularDoctors from "../components/Sessions/PopularDoctors";
import SessionContact from "../components/Sessions/SessionContact";
import SessionInfo from "../components/Sessions/SessionInfo";
import SessionInsights from "../components/Sessions/SessionInsights";
import SessionsBottomInfo from "../components/Sessions/SessionsBottomInfo";

const Sessions = () => {
  return (
    <>
      <SessionInfo />
      <SessionInsights />
      <PopularDoctors />
      <SessionContact />
      <SessionsBottomInfo />
    </>
  );
};

export default Sessions;
