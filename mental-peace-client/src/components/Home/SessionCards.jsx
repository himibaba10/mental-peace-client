import useSessions from "@/src/hooks/useSessions";
import SessionCard from "./SessionCard";
import Loader from "../Shared/Loader";

const SessionCards = () => {
  const { sessions, isLoading } = useSessions();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-16 mt-10">
      {sessions.map((sessionCard) => (
        <SessionCard
          key={sessionCard.title}
          title={sessionCard.title}
          description={sessionCard.description}
        />
      ))}
    </div>
  );
};

export default SessionCards;
