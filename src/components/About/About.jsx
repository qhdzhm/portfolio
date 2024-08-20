import React, { useState } from "react";
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";
import video from "../../assets/videos/MyWorks.mp4";
import ReactPlayer from "react-player";
const About = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="about section-p bg-grey">
      <div className="container">
        <div className="about-content">
          <div className="about-grid grid">
            <img src={images.About_Tom} alt="" className="about-img" />
            <div className="section-title">
              <h3 className="text-brown">
                I'm <span className="text-dark">Tom</span>
              </h3>
              <p className="text">
                I am a passionate developer skilled in Java Spring and React. I
                enjoy creating seamless web applications that enhance user
                experience.
              </p>
            </div>
          </div>

          <div className="about-grid grid">
            {about_stats.map((e, index) => {
              return (
                <div className="about-item text-center flex" key={index}>
                  <div className="about-item-icon">
                    <img src={e.image} alt="" />
                  </div>
                  <div className="about-item-text text-left">
                    <h3 className=" fs24 ls-2">{e.value}</h3>
                    <p className="text">{e.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="about-grid grid">
            <div className="section-title">
              <h3 className="text-brown">
                Past Works <span className="text-dark">Demonstration</span>
              </h3>
              <p className="text mx-auto">
                I've worked on various projects that showcase my
                ability to create robust and user-friendly web applications.
                From full-stack development using Java Spring and React to
                crafting visually appealing interfaces, my work demonstrates a
                commitment to quality and innovation. Below is a demonstration
                of some of my past projects.
              </p>
            </div>
            <div className="about-video">
              <ReactPlayer
                url={video}
                playing={playing}
                controls={true}
                onEnded={() => setPlaying(false)}
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
