import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="bg-blue-900">
      <div className="flex flex-col gap-6 p-4 md:flex-row md:justify-around md:items-start">
        <div className="flex-1 max-w-[20rem]">
          <h3 className="text-3xl text-white pb-4">Saurabh's Portfolio</h3>
          <p className="text-lg text-gray-300">
            Thank you for visiting my personal portfolio website. Connect with me over socials.
            <br /><br />
            Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>

        <div className="flex-1 max-w-[15rem]">
          <h3 className="text-3xl text-white pb-4">Quick Links</h3>
          <a href="/#home" className="text-lg text-gray-200 py-1 hover:text-yellow-400 flex items-center">
            <FaChevronRight className="mr-2" /> Home
          </a>
          <a href="/#about" className="text-lg text-gray-200 py-1 hover:text-yellow-400 flex items-center">
            <FaChevronRight className="mr-2" /> About
          </a>
          <a href="/#skills" className="text-lg text-gray-200 py-1 hover:text-yellow-400 flex items-center">
            <FaChevronRight className="mr-2" /> Skills
          </a>
          <a href="/#education" className="text-lg text-gray-200 py-1 hover:text-yellow-400 flex items-center">
            <FaChevronRight className="mr-2" /> Education
          </a>
          <a href="/#work" className="text-lg text-gray-200 py-1 hover:text-yellow-400 flex items-center">
            <FaChevronRight className="mr-2" /> Work
          </a>
          <a href="/#experience" className="text-lg text-gray-200 py-1 hover:text-yellow-400 flex items-center">
            <FaChevronRight className="mr-2" /> Experience
          </a>
        </div>

        <div className="flex-1 max-w-[20rem]">
          <h3 className="text-3xl text-white pb-4">Contact Info</h3>
          <p className="text-lg text-gray-300 py-2 flex items-center">
            <FaPhone className="mr-2 text-yellow-400" /> +91 9506161979
          </p>
          <p className="text-lg text-gray-300 py-2 flex items-center">
            <FaEnvelope className="mr-2 text-yellow-400" /> saurabhpasi123.sp@gmail.com
          </p>
          <p className="text-lg text-gray-300 py-2 flex items-center">
            <FaMapMarkedAlt className="mr-2 text-yellow-400" /> Jaunpur, India-223104
          </p>
          <div className="flex flex-wrap py-4 gap-1">
            <a href="https://www.linkedin.com/in/saurabh-pasi-712702296/" className="h-12 w-12 flex items-center justify-center rounded-full border-neutral-100 border-2 bg-gray-200 text-blue-900 text-2xl transition hover:bg-transparent hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/SaurabhPasi28" className="h-12 w-12 flex items-center justify-center rounded-full border-neutral-100 border-2 bg-gray-200 text-blue-900 text-2xl transition hover:bg-transparent hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:saurabhpasi123.sp@gmail.com" className="h-12 w-12 flex items-center justify-center rounded-full border-neutral-100 border-2 bg-gray-200 text-blue-900 text-2xl transition hover:bg-transparent hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
            </a>
            <a href="https://x.com/saurabh_pa79177" className="h-12 w-12 flex items-center justify-center rounded-full border-neutral-100 border-2  bg-gray-200 text-blue-900 text-2xl transition hover:bg-transparent hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://t.me/saurabhpasi48" className="h-12 w-12 flex items-center justify-center border-neutral-100 border-2 rounded-full  bg-gray-200 text-blue-900 text-2xl transition hover:bg-transparent hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      <h1 className="p-2 text-lg text-center text-white font-semibold border-t border-white/30">
        Designed with <span className="text-red-500 animate-pulse">❤️</span> by <a href="https://www.linkedin.com/in/saurabh-pasi-712702296/" className="text-yellow-400">Saurabh Pasi</a>
      </h1>
    </section>
  );
};

export default Footer;
