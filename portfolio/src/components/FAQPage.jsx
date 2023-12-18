import React from 'react';
import FAQSection from './FAQSection';
import Layout from './layout/Layout';
import { Helmet } from 'react-helmet';


const FAQPage = () => {
  return (
    <>
     <Helmet>
        <title>Frequently Asked Questions - Santosh Subedi's Web Development and Design Insights</title>
        <meta
          name="description"
          content="Discover answers to common queries about web development, graphic design, and creative projects in Santosh Subedi's FAQ section. Gain insights into my approach, processes, and the creative journey. If you have more questions, feel free to reach out for personalized assistance."
        />
        <meta
          name="keyword"
          content="Frequently Asked Questions, FAQ, Web Development Insights, Graphic Design Queries, Creative Projects, Santosh Subedi FAQ, Design Processes, Creative Journey, Personalized Assistance
        "
        />
      </Helmet>
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
    </>
  );
};

export default FAQPage;
