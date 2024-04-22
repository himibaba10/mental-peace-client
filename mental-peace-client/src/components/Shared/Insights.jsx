import insightImg from "../../assets/InsightsImg.png";

const Insights = ({ children }) => {
  return (
    <section className="flex gap-20 justify-between items-center bg-secondary">
      <div className="w-[55%] max-w-2xl ml-auto">{children}</div>
      <div className="w-[45%]">
        <img
          className="w-full -mt-[1px]"
          src={insightImg}
          alt="Insight image"
        />
      </div>
    </section>
  );
};

export default Insights;
