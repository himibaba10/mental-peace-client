import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import SecondaryButton from "@/src/utils/SecondaryButton";
import { RxCross1 } from "react-icons/rx";

import "react-datepicker/dist/react-datepicker.css";

export default function DoctorDetailModal({ doctor, isOpen, setIsOpen }) {
  const [startDate, setStartDate] = useState(null);
  const { name } = doctor;

  function closeModal() {
    setIsOpen(false);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      phone: "",
      message: "",
    },
    onSubmit: function () {
      console.log({ ...formik.values, date: startDate.toLocaleDateString() });
      setIsOpen(false);
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
      formik.resetForm();
    },
  });

  return (
    <>
      <div className="fixed -z-[1] inset-0 flex items-center justify-center"></div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-2xl transform bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <RxCross1
                    className="absolute text-primary text-4xl right-2 top-2 p-2 cursor-pointer"
                    onClick={closeModal}
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center"
                  >
                    Request an appointment with {name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={formik.handleSubmit}>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="mb-1 font-medium">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          className="border border-primary outline-none p-2.5"
                          required
                        />
                      </div>
                      <div className="flex justify-between gap-4">
                        <div className="flex flex-col mb-4 w-1/2">
                          <label htmlFor="age" className="mb-1 font-medium">
                            Age
                          </label>
                          <input
                            type="text"
                            id="age"
                            name="age"
                            onChange={formik.handleChange}
                            value={formik.values.age}
                            className="border border-primary outline-none p-2.5"
                            required
                          />
                        </div>
                        <div className="flex flex-col mb-4 w-1/2">
                          <label htmlFor="gender" className="mb-1 font-medium">
                            Gender
                          </label>
                          <select
                            name="gender"
                            id="gender"
                            className="border border-primary outline-none p-2.5"
                            onChange={formik.handleChange}
                            value={formik.values.gender}
                            required
                          >
                            <option value="" disabled>
                              Select your gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex flex-col mb-4 w-1/2">
                          <label htmlFor="phone" className="mb-1 font-medium">
                            Phone
                          </label>
                          <input
                            type="text"
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            className="border border-primary outline-none p-2.5"
                            required
                          />
                        </div>
                        <div className="flex flex-col mb-4 w-1/2">
                          <span className="mb-1 font-medium">
                            Select appointment date
                          </span>
                          <DatePicker
                            required
                            className="border border-primary p-2.5 w-full"
                            minDate={new Date()}
                            selected={startDate}
                            onChange={(date) => {
                              setStartDate(date);
                              console.log(date.toLocaleDateString());
                            }}
                            excludeDates={["3/27/2024"]}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label htmlFor="message" className="mb-1 font-medium">
                          Message
                        </label>
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                          className="border border-primary outline-none p-2.5 resize-none"
                          rows={3}
                          required
                        />
                      </div>
                      <div className="text-right">
                        <SecondaryButton type="submit">
                          Request Appointment
                        </SecondaryButton>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
