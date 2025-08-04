// src/components/ContactForm.jsx
import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <section className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <div className="contact__group">
            <label>Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="contact__group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="contact__group">
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="contact__submit">Send</button>
        <p className="contact__captcha">
          This site is protected by hCaptcha and the hCaptcha Privacy Policy and Terms of Service apply.
        </p>
      </form>
    </section>
  );
};

export default ContactForm;
