import Logobig from '../assets/Logobig.png';
import './AboutSection.css';
import Header from '../compounent/header';
import WhoWeAre from '../assets/WhoWeAre.png';

const AboutSection = () => {
  return (
    <div className='about-'>
      <section className="d-flex flex-column align-items-center justify-content-start position-relative w-100" style={{ height: "50vh", backgroundColor: "#09747A" }}>
        <Header />
        <div className='logo-section'>
          <img src={Logobig} alt="Logo" className='logo-image' />
          <div className='whoarewe-section'>
            <img
              src={WhoWeAre}
              alt="Who We Are"
              className="img-fluid whoarewe-image"
            />

          </div>
        </div>

      </section>
      <div className='whoarewe-section-paragraph'>
        <p>Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At <span className='wieght-increase'> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br></br> From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.</p>
      </div>
    </div>
  );
}; export default AboutSection;