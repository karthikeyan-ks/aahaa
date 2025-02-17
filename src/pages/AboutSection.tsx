import Logobig from '../assets/Logobig.png';
import './AboutSection.css';
import Header from '../components/header';
import WhoWeAre from '../assets/0.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import YinYang from '../components/yingyang';


const AboutSection = () => {
  return (
    <div className='container-fluid d-flex flex-column justify-content-center align-items-center gap-2'>
      <section className="d-flex flex-column align-items-center justify-content-start position-relative col-12 top" >
        <Header />
        <div className='logo-section'>
          <img src={Logobig} alt="Logo" className='image-fluid col-md-7 col-12' />
        </div>
      </section>
      <section className="whoarewe-section bg-white col-12 w-md-75 ">
        <div className="d-flex flex-column flex-md-row h-auto justify-content-evenly align-items-end ">
          <img src={WhoWeAre} alt="Who We Are" className="whoarewe-image1 col-md-5 col-12" />
          <div className="">
            <p className="whoarewe-section-paragraph">
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
            </p>
          </div>
        </div>


        <div className="d-flex flex-column-reverse flex-md-row-reverse justify-content-evenly align-items-start flex-row-reverse">
          <img src={WhoWeAre} alt="Who We Are" className="whoarewe-image2 col-md-5 col-12  image-fluid" />
          <div className="">
            <p className="whoarewe-section-paragraph">
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
              Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
              <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
              From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
            </p>
          </div>
        </div>
        <div className='col-12 bar' ></div>
      </section>
      <section className='col-12 h-auto d-flex flex-column  flex-sm-column flex-md-row gap-1 section3 justify-content-center align-items-center' style={{ padding: "10px" }}>
        <div className=' col-12 col-md-3  d-flex flex-row flex-md-column justify-content-center align-items-center ourclient' >
          <span style={{ fontSize: "2rem", fontWeight: 800, color: "white", margin: 10, padding: 0, lineHeight: "1" }}>
            OUR 
          </span>
          <h1 style={{ margin: 0, padding: 0, lineHeight: "1", color: "white" }}>
            CLIENTELE
          </h1>
        </div>
        <div className="col-12 col-sm-12 w-75 col-md-8 d-flex flex-md-row flex-row flex-wrap align-items-center section3div gap-2">
          {[
            "https://logo.clearbit.com/apple.com",
            "https://logo.clearbit.com/google.com",
            "https://logo.clearbit.com/microsoft.com",
            "https://logo.clearbit.com/amazon.com",
            "https://logo.clearbit.com/facebook.com",
            "https://logo.clearbit.com/netflix.com",
            "https://logo.clearbit.com/tesla.com",
            "https://logo.clearbit.com/samsung.com",
            "https://logo.clearbit.com/intel.com",
            "https://logo.clearbit.com/sony.com",
            "https://logo.clearbit.com/adidas.com",
            "https://logo.clearbit.com/nike.com",
            "https://logo.clearbit.com/coca-cola.com",
            "https://logo.clearbit.com/pepsi.com",
          ].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="col-2 col-sm-2 col-md-1 square rounded-circle"
              style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
            />
          ))}
        </div>


      </section>
      <section className='d-flex flex-column gap-6 flex-md-row m-10 w-100 justify-content-evenly '>
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