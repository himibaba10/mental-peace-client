import PrimaryButton from "@/src/utils/PrimaryButton";
import { useFormik } from "formik";
import { BiMessage } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { LuUser } from "react-icons/lu";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: function (values) {
      console.log(values);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-white p-20 drop-shadow-2xl max-w-3xl mx-auto">
      <form
        className="flex flex-col gap-3 text-primary"
        onSubmit={formik.handleSubmit}
      >
        <div className="relative">
          <LuUser className="absolute text-2xl top-[14px] left-2.5" />
          <input
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter Name"
            className="w-full border border-primary pl-10 p-3.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        </div>
        <div className="relative">
          <FaRegEnvelope className="absolute text-xl top-[17px] left-3" />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full border border-primary pl-10 p-3.5 placeholder:text-primary focus:border-primary focus:outline-none"
          />
        </div>
        <div className="relative">
          <FiPhone className="absolute text-2xl text-primary top-4 left-3" />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="border border-primary outline-none p-3.5 pl-10 w-full placeholder:text-primary"
            required
          />
        </div>
        <div className="relative">
          <BiMessage className="absolute text-2xl text-primary top-4 left-3" />
          <textarea
            rows={3}
            type="text"
            name="message"
            placeholder="Tell us briefly about your situation"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="border border-primary outline-none p-3.5 pl-11 w-full placeholder:text-primary resize-none"
            required
          />
        </div>
        <PrimaryButton type="submit">Subscribe!</PrimaryButton>
      </form>
    </div>
  );
};

export default ContactForm;
