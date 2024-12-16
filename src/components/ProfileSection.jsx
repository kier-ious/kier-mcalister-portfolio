import React from 'react';

const ProfileSection = () => (
  <section id="profile">
    <div className="section__pic-container">
      <img src="./assets/profile-pic.png" alt="Kier McAlister profile pic" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I'm</p>
      <h1 className="title">Kier McAlister</h1>
      <p className="section__text__p2">Full Stack Developer</p>
      <div className="btn-container">
        <button className="btn btn-color-2" onClick={() => window.open('./assets/Resumé.png')}>Resumé</button>
        <button className="btn btn-color-1" onClick={() => window.location.href = './#contact'}>Contact Info</button>
      </div>
      <div id="socials-container">
        <img
          src="./assets/linkedin.png"
          alt="My LinkedIn Profile"
          className="icon"
          onClick={() => window.location.href = 'https://www.linkedin.com/in/kiermcalister/'}
        />
        <img
          src="./assets/github.png"
          alt="My GitHub Profile"
          className="icon"
          onClick={() => window.location.href = 'https://github.com/kier-ious/'}
        />
      </div>
    </div>
  </section>
);

export default ProfileSection;
