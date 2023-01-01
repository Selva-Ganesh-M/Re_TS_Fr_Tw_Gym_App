import Heading from "../shared/Heading";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";
import { Sections } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setSelectedSection: (value: Sections) => void;
};

const ContactUs = ({ setSelectedSection }: Props) => {
  // DECLARATIONS
  const { register, trigger, formState } = useForm();
  const { errors } = formState;
  const handleSubmit = async (e: React.SyntheticEvent) => {
    const isValid = await trigger();
    if (!isValid) e.preventDefault();
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
      className="
    // default
    w-5/6 mx-auto pt-20 pb-16"
    >
      {/* HEADER */}
      <div
        className="
    // default
    w-full text-center mb-10
    // medium
    md:w-3/5 md:text-start
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
      </div>
      {/* FLEX BOX */}
      <div
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
          </form>
        </div>
        {/* IMAGE */}
        <div className="relative">
          <div
            className="
            // before
            before:absolute
            md:before:content-evolvetext
            before:z-[-1]
            before:top-[320px]
            before:left-[-200px]
            "
          ></div>
          <img src={ContactUsPageGraphic} alt="contact-img" />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactUs;
