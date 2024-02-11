import Paragraph from "@/src/utils/Paragraph";
import { Heart } from "lucide-react";

const SessionCard = ({ title, description }) => {
  return (
    <div>
      <Heart size={80} color="white" className="bg-primary p-4" />
      <h3 className="font-playfair font-bold text-2xl my-5">{title}</h3>
      <Paragraph margin="mb-0">{description}</Paragraph>
    </div>
  );
};

export default SessionCard;
