import React, { useEffect } from "react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(
      ".fade_up, .fade_down, .zoom_in, .zoom_out, .fade_right, .fade_left, .flip_left, .flip_right, .flip_up, .flip_down"
    );
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <>
      <section className="About-section jos" id="about">
        <div className="heading-container">
          <h2 className="section-heading-text about-me fade_up">About Me.</h2>
          <div className="line"></div>
        </div>
        
        <p className="section-sub-text about-sub-text zoom_in">
        &nbsp;&nbsp;&nbsp;
        My motivation has always been to learn new things and help people through amazing and fun creations. 
        I am a Unity Developer with over 5 years of experience, building everything from VR medical simulators to large-scale mobile games.
        <br />  <br />  &nbsp;&nbsp;&nbsp;
        Recently, I have expanded my technical expertise into the Unreal Engine 5 ecosystem, where I discovered a new passion: Tools Programming.
        Today, I combine my background in gameplay logic with Python and Blueprints to build automation pipelines that empower artists and designers.
        My goal is to eliminate repetitive tasks, allowing the creative team to focus on what truly matters: the art.
        <br />  <br />  &nbsp;&nbsp;&nbsp;
        To me, software development is a team sport. My greatest strength lies not just in writing code, but in acting as a technical facilitator.
        I pride myself on being the person who unblocks workflows, who sits down to solve the 'impossible' bug, and who ensures that, no matter the technical hurdle,
        the team crosses the finish line together delivering a robust project.
        </p>

        <div className="about-detail-main">
          <p className="about-detail">Name</p>
          <p className="about-detail-info">Guilherme Montesano</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Nationality</p>
          <p className="about-detail-info">Brazilian</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Phone</p>
          <p
            className="about-detail-info email"
            onClick={() => window.location.href = 'tel:+55(11)96346-3959'}
          >
            (+55) 11 96346 3959
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Email</p>
          <p
            className="about-detail-info email"
            onClick={() => window.location.href = 'mailto:guilherme.montesano@gmail.com'}
          >
            guilherme.montesano@gmail.com
          </p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Experience</p>
          <p className="about-detail-info">5+ years</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Freelance</p>
          <p className="about-detail-info">Available</p>
        </div>
        <div className="about-detail-main">
          <p className="about-detail">Language</p>
          <p className="about-detail-info">Brazilian Portuguese | English</p>
        </div>
      </section>
    </>
  );
};
export default AboutSection;