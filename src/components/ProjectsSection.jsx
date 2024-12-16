import React from 'react';

const projects = [
  {
    image: '/assets/logo.png',
    alt: 'Project 1',
    description: `Yard Hopper is a mobile app that transforms how people find and promote garage, yard, and estate sales. Built using React Native, Firebase, and Geoapify API, it features geolocation-based sale mapping, intuitive search filters, and secure user authentication.`,
    link: 'https://github.com/kier-ious/YardHopper',
    title: 'Yard Hopper',
  },
  {
    image: '/assets/Flora-Fate.png',
    alt: 'Project 2',
    description: `During this project myself and two other cohorts came together to create a completely personalized and immersive experience in the world of horoscopes. Go ahead and click below to unlock your garden!`,
    link: 'https://kier-ious.github.io/Flora-Fate/',
    title: 'Flora Fate',
  },
  {
    image: '/assets/Kanban.png',
    alt: 'Project 3',
    description: `Developed a Trello-like kanban board using React and Redux, managing state for lists and cards with add, delete, and drag-and-drop features. Implemented local storage for state persistence and wrote unit tests for Redux slices.`,
    link: 'https://atlas-redux-kmcalister.netlify.app/',
    title: 'Kanban',
  },
];

const ProjectsSection = () => (
  <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        {projects.map((project, index) => (
          <div className="details-container color-container" key={index}>
            <div className="article-container">
              <img src={project.image} alt={project.alt} className="project-img" />
            </div>
            <h2 className="experience-sub-title project-title">{project.description}</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href = project.link}>
                {project.title}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#contact'} />
  </section>
);

export default ProjectsSection;
