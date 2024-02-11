const DoubleImg = ({ img, bgColor = "bg-secondary", width = "w-5/6" }) => {
  return (
    <div className="w-1/2">
      <div className="flex relative">
        <img
          className={`${width} relative z-10 drop-shadow-2xl`}
          src={img}
          alt="Image of girl throwing sand"
        />
        <div
          className={`${width} absolute -top-8 left-8 w-5/6 h-full ${bgColor}`}
        ></div>
      </div>
    </div>
  );
};

export default DoubleImg;
