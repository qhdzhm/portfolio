import React, { useState } from "react";
import "./Works.css";
import { works } from "../../constants/data";
import { ImCancelCircle } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";

const Works = () => {
  const [imageModal, setImageModal] = useState(false);
  const [frontEnd, setFrontEnd] = useState("");
  const [backEnd, setBackEnd] = useState("");

  const [imageSource, setImageSouce] = useState("");
  const setImageOnModal = (src, frontEnd, backEnd) => {
    setImageModal(true);
    setImageSouce(src);
    setFrontEnd(frontEnd);
    setBackEnd(backEnd);
  };

  console.log(imageModal);
  return (
    <div className="works section-p bg-grey">
      <div className={imageModal ? "image-box show-image-box" : "image-box"}>
        <div className="image-box-content">
          <img src={imageSource} alt="Content" />

          {frontEnd && (
            <div className="tech-stack">
              <span>Front end:</span>
              <span>{frontEnd}</span>
            </div>
          )}
          {backEnd && (
            <div className="tech-stack">
              <span>Back end:</span>
              <span>{backEnd}</span>
            </div>
          )}

          <span
            className="image-box-close-btn"
            onClick={() => setImageModal(false)}
          >
            <ImCancelCircle size={30} />
          </span>
        </div>
      </div>

      <div className="container">
        <div className="work-content">
          <div className="section-title">
            <h3 className="text-brown ">
              latest <span className="text-dark">works</span>
            </h3>
            <p className="text">
              I offer the right solutions for your digital business
            </p>
          </div>
        </div>

        <div className="work-list grid">
          {works.map((work, index) => {
            return (
              <div
                className="work-item text-center"
                key={index}
                onClick={() =>
                  setImageOnModal(work.image, work.Front_end, work.Back_end)
                }
              >
                <img src={work.image} alt="" />
                <span className="work-item-icon">
                  <BsPlusLg size={38} className="text-brown" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
