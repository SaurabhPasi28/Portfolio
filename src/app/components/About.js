'use client';

import React, { useEffect } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal('.about-content, .about-image, .content', {
        origin: 'top',
        distance: '60px',
        duration: 1000,
        delay: 300,
        easing: 'ease-in-out',
        reset: true,
      });
    };

    loadScrollReveal();
  }, []);

  return (
    <section id="about" className="about bg-white py-10 px-2">
      <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center mb-8">
        <FaUser className="mr-2" /> About <span className="text-blue-700 ml-2"> Me</span>
      </h2>

      <div className="flex flex-wrap items-center justify-around lg:p-10">
        <div className="about-image w-full lg:w-1/3 flex justify-center mb-8 lg:mb-8">
          <Image
            src="/profile1.jpg"
            alt="Profile"
            className="rounded-lg shadow-lg w-72 h-auto transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
            width={288}
            height={288}
          />
        </div>

        <div className="about-content max-w-[80%] md:max-w-[65%] lg:w-2/3">
          <h3 className="content text-2xl font-semibold text-gray-900 mb-4">I&#39;m Saurabh</h3>
          <span className="content block text-lg text-blue-800 font-semibold mb-4">Full Stack Developer</span>
          <p className="content text-gray-700 mb-6 font-semibold text-justify">
            I am a Full-Stack developer based in Jaunpur, India. I am a Computer Science Engineering undergraduate from IIIT Una. I am very passionate about improving my coding skills & developing websites. I build Websites using the MERN Stack. Working for myself to improve my skills. 
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

          <div className="mt-8">
            <Link
              href="https://drive.google.com/file/d/14g4Vzb56k0xe62314t98OQfudNqRqfFL/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex gap-1 items-center py-3 px-4 text-white bg-blue-800 hover:bg-blue-700 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <span className="items-center font-semibold text-lg">Resume </span>
              <IoIosArrowDroprightCircle className="mt-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
