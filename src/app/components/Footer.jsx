'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <footer className="bg-[#121212] text-white py-8 px-4 border-t border-gray-700">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
      >
        {/* Contact Info */}
        <motion.div
          className="text-center md:text-left"
          variants={fadeIn}
          custom={2}
        >
          <p className="flex items-center justify-center md:justify-start">
            <MdEmail className="mr-2 text-xl" />
            <a
              href="https://mail.google.com/mail/?view=cm&to=archita.agrawal25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              archita.agrawal25@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center md:justify-start mt-2">
            <MdPhone className="mr-2 text-xl" />
            +91 8602650655
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6"
          variants={fadeIn}
          custom={3}
        >
          <a
            href="https://github.com/architaagr25"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/archita-agrawal-09b85b292/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom note */}
      <motion.div
        className="text-center text-gray-400 text-sm mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={4}
      >
        &copy; {new Date().getFullYear()} Archita Agrawal. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
