const Subheading = ({
  subTitle,
  size = "text-base",
  font = "font-manrope",
  margin = "m-0",
}) => {
  return (
    <span
      className={`inline-block text-primary fontn font-semibold tracking-widest uppercase ${size} ${font} ${margin}`}
    >
      {subTitle}
    </span>
  );
};

export default Subheading;
