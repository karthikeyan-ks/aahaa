import Logobig from '../assets/Logobig.png';
import './AboutSection.css';
import Header from '../components/header';
import WhoWeAre from '../assets/WhoWeAre.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import YinYang from '../components/yingyang';


const AboutSection = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center gap-2'>
      <section className="d-flex flex-column align-items-center justify-content-start position-relativew-100 col-12" style={{ height: "50vh", backgroundColor: "#09747A" }}>
        <Header />
        <div className='logo-section'>
          <img src={Logobig} alt="Logo" className='logo-image' />
        </div>
      </section>
      <section className="whoarewe-section bg-white col-12 w-md-75 h-auto ">
        <div className="row d-flex flex-column flex-md-row align-items-end " style={{margin:"10px"}}>
          <div className="col-12 col-md-6 text-center">
            <img src={WhoWeAre} alt="Who We Are" className="img-fluid whoarewe-image1" />
          </div>
          <div className="col-12 col-md-6">
            <p className="whoarewe-section-paragraph">
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
            </p>
          </div>
        </div>

        <div className="row d-flex flex-column-reverse flex-md-row-reverse align-items-start flex-row-reverse">
          <div className="col-12 col-md-6 ">
            <img src={WhoWeAre} alt="Who We Are" className="img-fluid whoarewe-image2" />
          </div>
          <div className="col-12 col-md-6">
            <p className="whoarewe-section-paragraph">
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
            </p>
          </div>
        </div>
      </section>
      <section className='col-12 h-auto d-flex flex-column flex-md-row gap-1 section3 justify-content-center align-items-center' style={{ border: "2px solid #09747A", padding: "4px" }}>
        <div className=' col-12 col-md-3 h-auto d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "#09747A", height: "100%", padding: 0, margin: 0 }}>
          <span style={{ fontSize: "5rem", fontWeight: 800, color: "white", margin: 0, padding: 0, lineHeight: "1" }}>
            OUR
          </span>
          <h1 style={{ margin: 0, padding: 0, lineHeight: "1", color: "white" }}>
            CLIENTELE
          </h1>
        </div>
        <div className="col-12 col-md-8 d-flex flex-md-row w-75 flex-column flex-wrap gap-1 align-items-center section3div">
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              key={index}
              className="col-6 col-md-1"
              style={{ aspectRatio: "1 / 1", backgroundColor: "#09747A" }}>
            </div>
          ))}
        </div>
      </section>
      <section className='d-flex flex-column gap-6 flex-md-row m-10 w-100 justify-content-evenly'>
        <YinYang />
        <YinYang />
        <YinYang />
      </section>
      <section className='d-flex flex-column flex-md-row gap-3 w-100' style={{ backgroundColor: "#09747A" }}>
        <div className='col-12 col-md-5 '>
          <h3 style={{ backgroundColor: "white", borderRadius: "10px", padding: "10px", margin: "10px" }}>Digital Marketing Advertising</h3>
          <p style={{ padding: "5px", margin: "5px", color: "white" }}>
            Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
            <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
            From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
          </p>
        </div>
        <div className='col-11 col-md-3 ratio-1x1' style={{ backgroundColor: "gray", margin: "10px", aspectRatio: "1/1" }}></div>
        <div className='col-11 col-md-3 ratio-1x1' style={{ backgroundColor: "gray", margin: "10px", aspectRatio: "1/1" }}></div>
      </section>
      <section className='col-11 d-flex flex-columns'>
        <div className="container d-flex justify-content-center">
          <div className="ratio ratio-16x9 w-100" style={{ maxWidth: "800px" }}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>

        </div>

      </section>
    </div>

  );
}; export default AboutSection;