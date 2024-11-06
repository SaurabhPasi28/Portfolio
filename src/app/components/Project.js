'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;

      ScrollReveal().reveal('.project-card', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        duration: 1000,
        easing: 'ease-out',
        reset: true // For staggered effect
      });
    };

    loadScrollReveal();
  }, [projects]);

  return (
    <section className="bg-gradient-to-b from-[#000031] to-[#00002c] py-8" id="work">
      <h2 className="text-white text-center text-3xl font-semibold mb-6">
        <i className="fas fa-laptop-code"></i> Projects <span className="text-yellow-300">Made</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card relative bg-yellow-400 rounded-lg shadow-lg overflow-hidden w-80 transform transition-transform hover:scale-105 group sd:w-72"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white transition-transform transform translate-y-3/4 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold text-center bg-yellow-300">{project.name}</h3>
                <p className="text-sm p-2">{project.desc}</p>
                <div className="flex justify-between">
                  <Link
                    href={project.links.view}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 px-2 py-2 m-2 rounded hover:bg-blue-600 transition"
                  >
                    <span>
                      <i className="fas fa-eye"></i> View
                    </span>
                  </Link>
                  <Link
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 px-2 py-2 m-2 rounded hover:bg-blue-600 transition"
                  >
                    <span>Code <i className="fas fa-code"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href="/projects"
          className="text-white font-bold border-2 border-white px-6 py-2 rounded hover:bg-white hover:text-black transition"
        >
          View All <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </section>
  );
};

export default Project;
