'use client';

import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data, e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
      return;
    }

    setIsSubmitted(false); // Reset previous status
    try {
      const response = await fetch("https://formsubmit.co/archita.agrawal25@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();

        // Hide the success message after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      }
    } catch (error) {
      console.error("Email sending failed", error);
    }
  };

  return (
    <section id="contact" className="py-32 bg-black text-white">
      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}
        className="text-center mb-12"
      >
        <p className="font-serif font-semibold text-4xl">
          <span className="text-yellow-400">Contact Me</span> To Get Started
        </p>
        <div className="flex justify-center mt-4">
          <LineGradient width="w-1/3" />
        </div>
      </motion.div>

      {/* Form and Image */}
      <div className="md:flex md:justify-between gap-16">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="basis-1/2 flex justify-center mb-10 md:mb-0"
        >
          <img
            src="/images/contact.png"
            alt="Contact illustration"
            className="max-w-full lg:w-[500px] h-auto rounded-xl "
          />
        </motion.div>

        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
          className="basis-1/2 px-5"
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md placeholder-gray-400 p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              placeholder="Name"
              {...register("name", { required: true, maxLength: 100 })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mb-2">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 characters."}
              </p>
            )}

            <input
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md placeholder-gray-400 p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mb-2">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-gray-800 text-white border border-gray-600 rounded-md placeholder-gray-400 p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              name="message"
              placeholder="Message"
              rows="5"
              {...register("message", { required: true, maxLength: 2000 })}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mb-2">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 characters."}
              </p>
            )}

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
            >
              SEND ME A MESSAGE
            </button>

            {isSubmitted && (
              <p className="text-green-400 font-semibold mt-4">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
