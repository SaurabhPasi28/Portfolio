// src/app/components/About.js
'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.about-content, .about-image,.content', {
      origin: 'top',
      distance: '60px',
      duration: 1000,
      delay: 300,
      easing: 'ease-in-out',
      reset: true,
    });
  }, []);

  return (
    <section id="about" className="about bg-[#ffffffd7] py-16 px-8 h-fit">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mb-8">
        <i className="mr-2"><FaUser /></i> About <span className="text-blue-700 ml-2"> Me</span>
      </h2>

      <div className="row flex flex-wrap items-center justify-around gap-8 px-6 lg:px-16">
        {/* Image Section */}
        <div className="about-image w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img
            src="/profile1.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg w-72 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:mix-blend-normal mix-blend-luminosity"
          />
        </div>

        {/* Content Section */}
        <div className="about-content max-w-[40%] lg:w-2/3">
          <h3 className="content text-2xl font-semibold text-gray-900 mb-4">I'm Saurabh</h3>
          <span className="content block text-lg text-blue-800 font-semibold mb-4">Full Stack Developer</span>
          <p className="content text-gray-700 mb-6 font-semibold text-justify">
            I am a Full-Stack developer based in Pune, India. I am an Information Technology undergraduate from SPPU. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
          </p>

          <div className="box-container flex flex-wrap gap-6 font-semibold">
            <div className="box">
              <p>
                <span className="text-blue-600">Email: </span>saurabhpasi123.sp@gmail.com
              </p>
              <p>
                <span className="text-blue-600">Place: </span>Jaunpur, India - 223104
              </p>
            </div>
          </div>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="https://drive.google.com/file/d/14g4Vzb56k0xe62314t98OQfudNqRqfFL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex gap-1 items-center py-3 px-5 text-white bg-blue-800 hover:bg-blue-700 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <span className="items-center font-semibold text-lg">Resume </span>
              <i className="mt-1"> <IoIosArrowDroprightCircle /></i>
              
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
