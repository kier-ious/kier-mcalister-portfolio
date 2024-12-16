import React from 'react';

const ExperienceSection = () => (
  <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        {/* Frontend Development Section */}
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            {[
              { title: 'React', level: 'Experienced' },
              { title: 'React Native', level: 'Intermediate' },
              { title: 'Figma', level: 'Experienced' },
              { title: 'UX Design', level: 'Experienced' },
              { title: 'JavaScript', level: 'Experienced' },
              { title: 'HTML', level: 'Experienced' },
              { title: 'CSS', level: 'Experienced' },
              { title: 'Bootstrap', level: 'Experienced' },
            ].map((skill, index) => (
              <article key={index}>
                <img src="/assets/checkmark.png" alt="experience-icon" className="icon" />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend Development Section */}
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
            {[
              { title: 'NoSQL', level: 'Intermediate' },
              { title: 'SQL', level: 'Experienced' },
              { title: 'Flask', level: 'Intermediate' },
              { title: 'RESTful API', level: 'Intermediate' },
              { title: 'Python', level: 'Experienced' },
              { title: 'Firebase', level: 'Intermediate' },
            ].map((skill, index) => (
              <article key={index}>
                <img src="/assets/checkmark.png" alt="experience-icon" className="icon" />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.level}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
    <img src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" onClick={() => window.location.href = './#projects'} />
  </section>
);

export default ExperienceSection;
