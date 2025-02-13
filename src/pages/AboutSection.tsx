import React from 'react';
import Logobig from '../assets/Logobig.png';
import './AboutSection.css';
import Header from '../compounent/header';
import WhoWeAre from '../assets/WhoWeAre.png';
import WhyAAhAA from '../assets/whyAAha.png';
import ClientServices from '../compounent/ClientServices';
const AboutSection = () => {
  return (
    <div>
      <section className='about-section'>
        <Header />
        <div className='logo-section'>
          <img src={Logobig} alt="Logo" className='logo-image' />
        </div>
        <div className='whoarewe-section'>
          <img src={WhoWeAre} alt="Who We Are" className='whoarewe-image' />
        </div>
      </section>
      <div className='whoarewe-section-paragraph'>
        <p>Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At <span className='wieght-increase'> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br></br> From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.</p>
      </div>
      <div className='Whyahha-section'>
          <img src={WhyAAhAA} alt="Who We Are" className='whoarewe-image' />
        </div>
        <div className='whoarewe-section-paragraph'>
        <p>With over a decade of experience in the South Indian film industry and advertising, our team brings a wealth of creative expertise to every project. We have a strong network of skilled technicians and professionals who are passionate about delivering top-quality content. By collaborating with AAHAA ENTERTAINMENTS, you're partnering with a team that understands the art and craft of storytelling, ensuring your brand’s message leaves a lasting impact. So, why not AAHAA? :</p>
        </div>
        <ClientServices />
    </div>
  );
};export default AboutSection;