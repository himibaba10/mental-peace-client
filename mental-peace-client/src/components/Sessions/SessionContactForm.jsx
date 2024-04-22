import PrimaryButton from "@/src/utils/PrimaryButton";
import { useFormik } from "formik";
import { FiUser, FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { GrNotes } from "react-icons/gr";

const SessionContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      shortMessage: "",
      otherNotes: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="max-w-4xl bg-white p-20 mx-auto">
      <form className="flex flex-col gap-3" onSubmit={formik.handleSubmit}>
        <div className="flex gap-3">
          <div className="relative w-1/2">
            <FiUser className="absolute text-2xl text-primary top-4 left-3" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="border border-primary outline-none p-4 pl-11 w-full"
              required
            />
          </div>
          <div className="relative w-1/2">
            <BsEnvelope className="absolute text-2xl text-primary top-4 left-3" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="border border-primary outline-none p-4 pl-11 w-full"
              required
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative w-1/2">
            <FiPhone className="absolute text-2xl text-primary top-4 left-3" />
            <input
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phone}
              className="border border-primary outline-none p-4 pl-11 w-full"
              required
            />
          </div>
          <div className="relative w-1/2">
            <BiMessage className="absolute text-2xl text-primary top-4 left-3" />
            <input
              type="text"
              name="shortMessage"
              placeholder="A short message about yourself"
              onChange={formik.handleChange}
              value={formik.values.shortMessage}
              className="border border-primary outline-none p-4 pl-11 w-full"
              required
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative w-1/2">
            <GrNotes className="absolute text-2xl text-primary top-4 left-3" />
            <input
              type="text"
              name="otherNotes"
              placeholder="Other Notes"
              onChange={formik.handleChange}
              value={formik.values.otherNotes}
              className="border border-primary outline-none p-4 pl-11 w-full"
            />
          </div>
          <PrimaryButton type="submit" width="w-1/2" paddingY="py-[27.5px]">
            Submit
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default SessionContactForm;
