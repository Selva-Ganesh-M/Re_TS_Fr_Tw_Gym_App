import Heading from "../shared/Heading";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";
import { Sections } from "@/shared/types";
import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  setSelectedSection: (value: Sections) => void;
};

const ContactUs = ({ setSelectedSection }: Props) => {
  // DECLARATIONS
  const [thanks, setThanks] = useState<Boolean>(false);
  const { register, trigger, formState, reset } = useForm();
  const { errors } = formState;
  const handleSubmit = async (e: React.SyntheticEvent) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      return;
    }
    reset();
    setThanks(true);
    setTimeout(() => setThanks(false), 500);
  };

  //   STYLES
  const inputStyle =
    "py-3  px-5 w-full bg-primary-300 rounded-lg placeholder-white";
  const errorStyle = "text-sm text-primary-500 font-bold ml-2";

  //   JSX RETURNING
  return (
    // CONTACT US
    <motion.section
      onViewportEnter={() => setSelectedSection(Sections.ContactUs)}
      id="contactus"
      className={`
    // default
    w-5/6 mx-auto pt-20 md:pb-32 mb-10 lg:pb-28 min-h-[100vh]`}
    >
      {/* HEADER */}
      <motion.div
        initial="hidden"
        whileInView={"final"}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        variants={{
          hidden: { x: -100, opacity: 0 },
          final: { x: 0, opacity: 1 },
        }}
        className="
    // default
    w-full text-center mb-10
    // medium
    lg:w-3/5 md:text-start
      "
      >
        <Heading>
          <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
        </Heading>
        <p className="my-5">
          Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
          sapien vel rhoncus. Placerat at in enim pellentesque. Nulla adipiscing
          leo egestas nisi elit risus sit. Nunc cursus sagittis.
        </p>
      </motion.div>
      {/* FLEX BOX */}
      <motion.div
        initial="hidden"
        whileInView={"final"}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        variants={{
          hidden: { y: 50, opacity: 0 },
          final: { y: 0, opacity: 1 },
        }}
        className="
        // default
        flex flex-col gap-10
        // md
        md:flex-row md: items-center
      "
      >
        {/* FORM */}
        <div
          className="
        // default
        w-full
        // md
        md:w-3/5 self-start
        "
        >
          <form
            target="_blank"
            onSubmit={handleSubmit}
            action={"https://formsubmit.co/428ed2787f23228ca2d4c40fb8c10a61"}
            method="POST"
            className="flex flex-col justify-center gap-4"
          >
            {/* Name */}
            <input
              className={`${inputStyle}`}
              placeholder="Name"
              type="text"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className={`${errorStyle}`}>
                {errors.name.type === "required" && "This is a required field."}
                {errors.name.type === "maxLength" &&
                  "Length shouldn't exceed 100 chars."}
              </p>
            )}

            {/* Email */}
            <input
              className={`${inputStyle}`}
              placeholder="Email"
              type="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className={`${errorStyle}`}>
                {errors.email.type === "required" &&
                  "This is a required field."}
                {errors.email.type === "pattern" &&
                  "Not a valid email address."}
              </p>
            )}
            {/* MESSAGE */}
            <textarea
              className={`${inputStyle}`}
              cols={50}
              rows={4}
              placeholder="Message"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className={`${errorStyle}`}>
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button className="bg-secondary-500 rounded-lg py-3 px-10 hover:bg-primary-500">
              SUBMIT
            </button>
            {thanks ? (
              <div className="border-2 p-3 text-center">Response Submitted</div>
            ) : (
              ""
            )}
          </form>
        </div>
        {/* IMAGE */}
        <div className="relative">
          <div
            className={`
            // before
            md:before:content-evolvetext
            before:absolute
            before:z-[-1]
            before:top-[350px]
            lg:before:top-[400px]
            before:left-[-250px]
            md:before:left-[-370px]
            `}
          ></div>
          <img src={ContactUsPageGraphic} alt="contact-img" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
