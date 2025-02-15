import Logobig from '../assets/Logobig.png';
import './AboutSection.css';
import Header from '../components/header';
import WhoWeAre from '../assets/WhoWeAre.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutSection = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
      <section className="d-flex flex-column align-items-center justify-content-start position-relative w-100" style={{ height: "50vh", backgroundColor: "#09747A" }}>
        <Header />
        <div className='logo-section'>
          <img src={Logobig} alt="Logo" className='logo-image' />
        </div>
      </section>
      <section className="container whoarewe-section bg-white w-75 h-100">
        <div className="row d-flex flex-column flex-md-row align-items-center">
          <div className="col-6 text-center">
            <img src={WhoWeAre} alt="Who We Are" className="img-fluid whoarewe-image" />
          </div>
          <div className="col-6">
            <p className="whoarewe-section-paragraph">
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
            </p>
          </div>
        </div>

        <div className="row d-flex flex-column-reverse flex-md-row-reverse align-items-center flex-row-reverse">
          <div className="col-6 text-center">
            <img src={WhoWeAre} alt="Who We Are" className="img-fluid whoarewe-image" />
          </div>
          <div className="col-6">
            <p className="whoarewe-section-paragraph">
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
            </p>
          </div>
        </div>
      </section>
      
    </div>

  );
}; export default AboutSection;