'use client';
import React, { useRef, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane, FaHeadset } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Image from 'next/image'; // Import Image from Next.js

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_da78v55', 'template_nvpz74o', form.current, 'Un-ukcOMd7sg4upcM')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error('FAILED...', error.text);
        }
      );
  };

  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal('.container', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        duration: 1000,
        easing: 'ease-out',
        reset: true, // This allows repeated reveals on scroll
      });
      ScrollReveal().reveal('.form-group', {
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
    <section id="contact" className="bg-blue-100 py-10">
      <div className="text-center text-3xl font-bold text-blue-800 mb-8 flex items-center justify-center gap-3">
        <FaHeadset className="text-blue-600" />
        Get in <span className="text-purple-800">Touch</span>
      </div>

      <div className="container max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/contact.png" // Ensure this image is in the public directory
              alt="Contact"
              className="max-w-full md:max-w-sm h-80 object-cover rounded-md"
              width={300} // Set appropriate width
              height={300} // Set appropriate height
              draggable="false"
            />
          </div>

          <form ref={form} onSubmit={sendEmail} className="w-full md:w-1/2 space-y-4">
            <div className="form-group space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                  className="w-full pl-12 pr-4 py-2 rounded-md border border-gray-500 bg-blue-100 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <FaUser className="absolute top-1/2 left-4 text-gray-700 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                  className="w-full pl-12 pr-4 py-2 rounded-md border border-gray-500 bg-blue-100 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <FaEnvelope className="absolute top-1/2 left-4 text-gray-700 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Phone (optional)"
                  className="w-full pl-12 pr-4 py-2 rounded-md border border-gray-500 bg-blue-100 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <FaPhoneAlt className="absolute top-1/2 left-4 text-gray-700 transform -translate-y-1/2" />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full h-32 pl-12 pr-4 py-2 rounded-md border border-gray-500 bg-blue-100 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                ></textarea>
                <FaCommentDots className="absolute top-6 left-4 text-gray-700" />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-6 py-2 text-lg font-semibold text-white bg-purple-800 rounded-md shadow-md hover:bg-purple-600 transition-all duration-300"
              >
                Send <FaPaperPlane className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
