'use client'
import { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaArrowRight } from 'react-icons/fa';

const Experience = () => {
  useEffect(() => {
    const loadScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;

      ScrollReveal().reveal('.vertical-timeline-element--work', {
        delay: 200,
        distance: '50px',
        origin: 'top',
        duration: 1000,
        easing: 'ease-out',
        interval: 100, 
        reset:true,// For staggered effect
      });
    };

    loadScrollReveal();
  }, []);

  return (
    <section id="experience" className="bg-gray-50 py-10">
      {/* <h2 className="text-center text-3xl font-bold text-blue-800 mb-8 flex items-center justify-center gap-3">
        <FaBriefcase className="text-blue-600" />
        Experience
      </h2> */}

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#FFEDD5', color: '#1E3A8A' }}
          contentArrowStyle={{ borderRight: '7px solid #FFEDD5' }}
          date="Oct 2021 - present"
          iconStyle={{ background: '#1E3A8A', color: '#FFF' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">Self Employed</h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-blue-700">Full Stack Developer</h4>
          <p className="text-gray-600">
            Working on various projects and enhancing my skills as a full stack developer.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#DBEAFE', color: '#1E3A8A' }}
          contentArrowStyle={{ borderRight: '7px solid #DBEAFE' }}
          date="June 2021 - Dec 2021"
          iconStyle={{ background: '#1E40AF', color: '#FFF' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">IIIT Una</h3>
          <h4 className="vertical-timeline-element-subtitle text-lg text-blue-700">Web Developer | Internship</h4>
          <p className="text-gray-600">
            Gained valuable experience during my internship, working on web development projects.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <div className="text-center mt-8">
        <a href="/experience" className="inline-flex items-center text-lg font-semibold text-white bg-blue-600 hover:bg-blue-800 transition duration-200 py-3 px-6 rounded-full shadow-lg">
          <span>View All</span>
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Experience;
