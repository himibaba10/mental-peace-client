import PrimaryButton from "@/src/utils/PrimaryButton";
import { useFormik } from "formik";
import { useState } from "react";
import { LuUser } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";

const NewsletterForm = () => {
  const [message, setMessage] = useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: function () {
      setMessage("Thank you for submitting!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      formik.resetForm();
    },
  });

  return (
    <div className="bg-white p-20">
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
            className="w-full border border-primary pl-10 p-3.5 placeholder:text-primary"
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
            className="w-full border border-primary pl-10 p-3.5 placeholder:text-primary"
          />
        </div>
        <PrimaryButton type="submit">Subscribe!</PrimaryButton>
      </form>
      {message && (
        <span className="text-green-600 font-medium mt-1 inline-block">
          {message}
        </span>
      )}
    </div>
  );
};

export default NewsletterForm;
