'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then((response) => response.json())
            .then((data) => setSkills(data));
    }, []);

    useEffect(() => {
        const loadScrollReveal = async () => {
          const ScrollReveal = (await import('scrollreveal')).default;
    
          ScrollReveal().reveal('.card', {
            delay: 200,
            distance: '50px',
            origin: 'top',
            duration: 1000,
            easing: 'ease-out',
            reset: true
          });
        };
    
        loadScrollReveal();
      }, [skills]);

    return (
        <section className="skills relative bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 p-2 md:p-8" id="skills">
            <h2 className="text-white text-4xl text-center font-bold mb-8">
                Skills & <span className="text-yellow-300">Abilities</span>
            </h2>
            <div className="mx-auto px-4 sm:px-10 md:px-16 lg:px-20 bg-opacity-60 bg-[#fff] rounded-3xl shadow-lg py-8">
                <div className=" grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="card bar relative group p-4 rounded-lg bg-gradient-to-b text-center overflow-hidden"
                        >
                            <div className="info flex flex-col items-center gap-2 mt-4">
                                <Image 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="w-12 h-12 group-hover:scale-125 transition-transform duration-300" 
                                    width={48}
                                    height={48}
                                />
                                <span className="text-white text-xl font-medium group-hover:text-yellow-400">{skill.name}</span>
                            </div>
                            <div className="absolute inset-0 rounded-lg border-animation group-hover:animate-clockwiseBorder"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
