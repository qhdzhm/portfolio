import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((preData) => ({
      ...preData,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xnnavpnz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent.')
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert('There was an error sending your message. Please try again')
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="contact section-p">
      <div className="container">
        <div className="contact-content">
          <div className="section-title">
            <h3 className="text-brown">
              contact <span className="text-dark">me</span>
            </h3>
            <p className="text">
              I offer the right solutions for your digital business
            </p>
          </div>
        </div>

        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          <div className="form-elem">
            <input
              type="text"
              value={formData.name}
              placeholder="Name"
              className="form-control"
              onChange={handleChange}
              id="name"
              required
            />
          </div>
          <div className="form-elem">
            <input
              type="email"
              value={formData.email}
              placeholder="Email"
              className="form-control"
              onChange={handleChange}
              id="email"
              required
            />
          </div>
          <div className="form-elem">
            <textarea
              rows={2}
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="form-control"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-brown text-white submit-btn fw-3 fs-22"
          >
            Submit
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;
