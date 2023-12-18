import React, { useState } from 'react';
import Layout from './layout/Layout';
import { Helmet } from 'react-helmet';


const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
    
  };

  return (
    <>
        <Helmet>
        <title>Get in Touch - Connect with Santosh Subedi, Web Developer, and Graphic Designer</title>
        <meta
          name="description"
          content="Contact Santosh Subedi for collaborations, inquiries, or to discuss your next creative project. Whether you're looking for a web developer or a graphic designer, I'm here to bring your vision to life. Reach out and let's embark on a journey of turning ideas into extraordinary digital experiences."
        />
        <meta
          name="keyword"
          content="Contact Santosh Subedi, Web Developer, Graphic Designer, Collaboration Inquiries, Creative Project Discussions, Digital Experiences, Get in Touch, Contact Form, Professional Connection.
        "
        />
      </Helmet>
    <Layout>
      <div className="contact-page">
        <h1 className="page-title">Contact Us</h1>
        <hr className="divider" />

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
    </>
  );
};

export default ContactUsPage;
