'use client'
import React, { useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Homepage = () => {
  useEffect(() => {
    // Load particles.js
    const loadParticles = async () => {
      const particles = await import('../js/particles.min.js');
      const app = await import('../js/app.js');
      particles && app;
    };
    loadParticles();

    // Load typed.js for typing effect
    const loadTyped = async () => {
      const Typed = (await import('typed.js')).default;
      new Typed('.typing-text', {
        strings: ['Web Developer', 'Designer', 'Creator', 'Programming'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
      });
    };
    loadTyped();

    // Load vanilla-tilt.js for tilt effect
    const loadTilt = async () => {
      const VanillaTilt = (await import('vanilla-tilt')).default;
      const image = document.querySelector('.tilt');
      VanillaTilt.init(image, { max: 25, speed: 400 });
    };
    loadTilt();

    // Load scroll reveal animations for smooth drop effect
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal('.content', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        duration: 1000,
        easing: 'ease-out',
        reset: true,
      });
      ScrollReveal().reveal('.image', {
        delay: 300,
        distance: '50px',
        origin: 'top',
        duration: 1000,
        easing: 'ease-out',
        reset: true,
      });
    };
    loadScrollReveal();
  }, []);

  return (
    <section id="home" className="relative home flex flex-wrap min-h-screen items-start p-20 bg-[#e5ecfb]">
      {/* Particles Background */}
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>

      {/* Content Section */}
      <div className="content flex-1 z-10 m-10 mt-18">
        <h2 className="font-extrabold text-blue-900 text-4xl mb-4 md:text-5xl ">
          <p className='mb-4'>Hi There,</p>
          I'm Saurabh <span className="text-orange-600">Pasi</span>
        </h2>
        <p className="text-2xl font-semibold text-black">
          I am into <span className="typing-text text-red-600"></span>
        </p>
        <a
          href="#about"
          className="btn mt-6 inline-flex items-center py-3 px-6 text-lg font-semibold text-white bg-blue-800 hover:bg-blue-700 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down ml-2"></i>
        </a>

        {/* Social Icons */}
        <div className="socials mt-12">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/saurabh-pasi-712702296/"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin flex p-3 bg-gray-900 text-cyan-400 rounded-full hover:bg-blue-600 transition-all hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SaurabhPasi28"
                target="_blank"
                rel="noopener noreferrer"
                className="github flex p-3 bg-gray-900 text-cyan-400 rounded-full hover:bg-black transition-all hover:text-white"
              >
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/saurabh_pa79177"
                target="_blank"
                rel="noopener noreferrer"
                className="twitter flex p-3 bg-gray-900 text-cyan-400 rounded-full hover:bg-blue-400 transition-all hover:text-white"
              >
                <FaTwitter size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/lifecode5"
                target="_blank"
                rel="noopener noreferrer"
                className="telegram flex p-3 bg-gray-900 text-cyan-400 rounded-full hover:bg-blue-500 transition-all hover:text-white"
              >
                <FaTelegramPlane size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/saurabhpasi48"
                target="_blank"
                rel="noopener noreferrer" 
                className="instagram p-3 flex bg-gray-900 text-cyan-400 rounded-full hover:bg-pink-500 transition-all hover:text-white"
              >
                <FaInstagram size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="image min-w-80 h-96 z-10 mr-24 mt-16">
        <img
          src="profile1.jpg"
          alt="Profile"
          className="tilt w-full h-full object-cover rounded-full shadow-lg hover:shadow-2xl transition-shadow"
        />
      </div>
    </section>
  );
};

export default Homepage;