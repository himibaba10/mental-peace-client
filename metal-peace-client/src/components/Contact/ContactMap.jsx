const ContactMap = () => {
  return (
    <div className="section !max-w-6xl mb-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9016451364496!2d90.33697227484681!3d23.786516487389704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17645600961%3A0x89be278d60e870e1!2sBoro%20Bazar%2C%20Gabtoli%2C%20Darus%20Salam!5e0!3m2!1sen!2sbd!4v1709126378877!5m2!1sen!2sbd"
        className="w-full h-[500px] rounded-2xl shadow"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
