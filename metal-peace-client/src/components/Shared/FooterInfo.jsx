const FooterInfo = ({ children }) => {
  return (
    <section className="bg-primary py-20">
      <div className="section text-center text-white text-3xl font-bold">
        {children}
      </div>
    </section>
  );
};

export default FooterInfo;
