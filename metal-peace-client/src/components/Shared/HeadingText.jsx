const HeadingText = ({ title, size, color }) => {
  return (
    <h2
      className={`capitalize ${color} font-playfair ${size} font-bold pt-1 pb-8 leading-tight`}
    >
      {title}
    </h2>
  );
};

export default HeadingText;
