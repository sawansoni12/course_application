import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          Have questions, suggestions, or need help with learning programming?
          We’re always happy to connect and support you.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>📞 Call Us</h3>
          <p>Quick support for urgent queries</p>
          <span>7849894809</span>
        </div>

        <div className="contact-card">
          <h3>📧 Email</h3>
          <p>Send your questions anytime</p>
          <span>sosawan053@gmail.com</span>
        </div>
<a
  href="https://wa.me/917849894809"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-bottom-float"
>
  <img
    src="/images/whatsapp.png"
    alt="WhatsApp"
    className="whatsapp-bottom-icon"
  />
  <span>Chat on WhatsApp</span>
</a>

        <div className="contact-card">
          <h3>🎓 Student Support</h3>
          <p>
            Guidance for courses, projects, and learning paths tailored for
            beginners.
          </p>
          <span>Friendly & Reliable</span>
        </div>

        <div className="contact-card">
          <h3>🚀 Our Vision</h3>
          <p>
            To build a fully functional, professional learning platform that
            makes programming simple, structured, and accessible to everyone.
          </p>
          <span>Future-Ready Learning</span>
        </div>
      </div>

      <div className="contact-footer">
        <p>
          <strong>Courses Application</strong> is designed with a vision to grow
          into a complete and professional learning management system.
        </p>
      </div>
    </div>
  );
};

export default Contact;