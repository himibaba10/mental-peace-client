const InfoSection = ({ children, paddingY = "py-20" }) => {
  return (
    <section className={`bg-primary ${paddingY}`}>
      <div className="section text-center text-white text-3xl font-bold">
        {children}
      </div>
    </section>
  );
};

export default InfoSection;
