import learningImg from "../../assets/Learning.jpg";
import DoubleImg from "../Shared/DoubleImg";
import LearningInfo from "./LearningInfo";

const Learning = () => {
  return (
    <div className="section flex gap-28 my-28">
      <DoubleImg img={learningImg} />
      <LearningInfo />
    </div>
  );
};

export default Learning;
