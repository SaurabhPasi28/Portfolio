import React from 'react';

const Education = () => {
  return (
    <section className="education flex flex-col items-center bg-[#e5ecfb] min-h-[80vh] py-8" id="education">
      <h1 className="heading text-3xl text-center font-bold flex items-center justify-center">
        <i className="fas fa-graduation-cap mr-2"></i> My <span className="text-blue-600">Education</span>
      </h1>

      <p className="qoute text-xl text-center font-semibold my-4">
        Education is not the learning of facts, but the training of the mind to think.
      </p>

      <div className="box-container flex flex-col items-center w-[80%]">
        <div className="box flex flex-row w-4/5 bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition-transform duration-300 hover:scale-105">
          <div className="image flex-shrink-0 w-1/3">
            <img draggable="false" src="https://img.collegepravesh.com/2023/03/IIIT-Una.jpg" alt="College" className="object-cover w-full h-full" />
          </div>
          <div className="content flex flex-col p-4 w-2/3">
            <h3 className="text-2xl text-[#012970] font-semibold mb-2">Bachelor of Engineering in Computer Science</h3>
            <p className="text-lg mb-2">Indian Institute of Information Technology, Una</p>
            <h4 className="text-lg text-green-600 font-bold">2022-2026 | Pursuing</h4>
          </div>
        </div>

        <div className="box flex flex-row w-4/5 bg-white shadow-md rounded-lg overflow-hidden my-4 transform transition-transform duration-300 hover:scale-105">
          <div className="image flex-shrink-0 w-1/3">
            <img draggable="false" src="https://bssvin.wordpress.com/wp-content/uploads/2023/05/cropped-cropped-timthumb.jpg" alt="School" className="object-cover w-full h-full" />
          </div>
          <div className="content flex flex-col p-4 w-2/3">
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
