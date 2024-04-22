import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SecondaryButton from "@/src/utils/SecondaryButton";
import DoctorDetailModal from "../Shared/Modal";
import { useState } from "react";

const DoctorCard = ({ doctor }) => {
  let [isOpen, setIsOpen] = useState(false);
  const { name, img, type, availability } = doctor;
  return (
    <Card className="bg-secondary rounded-none flex flex-col">
      <img
        className="w-full h-64 object-cover"
        src={img}
        alt={`Image of ${name}`}
      />
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="mb-5">
        <p>{type}</p>
        <p className="text-right text-primary font-medium">
          {availability?.from} to {availability?.to}
        </p>
        <p className="text-right text-primary font-medium">
          <span className="text-lg font-bold">{availability?.time}</span>
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        <SecondaryButton onClick={() => setIsOpen(!isOpen)} width="w-full">
          See Details
        </SecondaryButton>
      </CardFooter>
      <DoctorDetailModal
        doctor={doctor}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Card>
  );
};

export default DoctorCard;
