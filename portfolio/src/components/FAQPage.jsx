import React from 'react';
import FAQSection from './FAQSection';
import Layout from './layout/Layout';
import '../styles/FAQPage.css';

const FAQPage = () => {
  return (
    <Layout>
      <div className="faq-page">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <hr className="divider" />

        <FAQSection title="General Questions">
          <p>Q: What is this website about?</p>
          <p>A: This website showcases various art projects and designs.</p>
        </FAQSection>

        <FAQSection title="Technical Questions">
          <p>Q: How was this website built?</p>
          <p>A: The website was built using React and other modern web technologies.</p>
        </FAQSection>
      </div>
    </Layout>
  );
};

export default FAQPage;
