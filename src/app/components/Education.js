import React from 'react';
import Image from 'next/image';

const Education = () => {
  return (
    <section className="education flex flex-col items-center bg-[#e5ecfb] min-h-[80vh] p-4" id="education">
      <h1 className="heading text-3xl text-center font-bold flex items-center justify-center">
        <i className="fas fa-graduation-cap mr-2"></i> My <span className="text-blue-600">Education</span>
      </h1>

      <p className="qoute text-xl text-center font-semibold my-4">
        Education is not the learning of facts, but the training of the mind to think.
      </p>

      <div className="box-container flex flex-col items-center w-[90%]">
        <div className="box flex flex-col items-center w-[95%] bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition-transform duration-300 hover:scale-105 sm:flex-row sm:w-4/5">
          <div className="image flex-shrink-0 w-full sm:w-2/5">
            <Image
              src="/College.jpg"
              alt="College"
              className="object-cover w-full h-full"
              width={400}
              height={300}
              draggable="false"
            />
          </div>
          <div className="content flex flex-col p-4 w-[90%]">
            <h3 className="text-2xl text-[#012970] font-semibold mb-2">Bachelor of Engineering in Computer Science</h3>
            <p className="text-lg mb-2">Indian Institute of Information Technology, Una</p>
            <h4 className="text-lg text-green-600 font-bold">2022-2026 | Pursuing</h4>
          </div>
        </div>

        <div className="box flex flex-col items-center w-[90%] bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition-transform duration-3000 hover:scale-105 sm:flex-row sm:w-4/5">
          <div className="image flex-shrink-0 w-full sm:w-2/5">
            <Image
              src="/School.jpg"
              alt="School"
              className="object-cover w-full h-full"
              width={400}
              height={300}
              draggable="false"
            />
          </div>
          <div className="content flex flex-col p-4 w-[90%]">
            <h3 className="text-2xl text-[#012970] font-semibold mb-2">PCM</h3>
            <p className="text-lg mb-2">B.S.S.V Nainital, School | UK</p>
            <h4 className="text-lg text-green-600 font-bold">2018-2020 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
