const ContactAddressList = ({ icon, title, description }) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-shrink-0 text-3xl p-2 text-primary border-2 border-primary">
          {icon}
        </div>
        <div className="ml-3">
          <p className="text-2xl font-medium font-playfair">{title}</p>
          <p className="mt-1 text-lg text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactAddressList;
