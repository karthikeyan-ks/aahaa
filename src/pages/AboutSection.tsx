import Logobig from '../assets/Logobig.png';
import './AboutSection.css';
import Header from '../components/header';
import WhoWeAre from '../assets/0.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import YinYang from '../components/yingyang';
import footerAbove from '../assets/WhatsApp Image 2025-02-18 at 7.23.26 PM.jpeg'
import Modal from '../components/modal';
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Testimonial from '../components/testimonial';


const AboutSection = () => {
  const [isModalView, setIsModalView] = useState(window.innerWidth > 768);

  // Function to update view mode
  const updateViewMode = () => {
    setIsModalView(window.innerWidth > 768);
  };

  useEffect(() => {
    updateViewMode(); // Set the initial state based on screen size
    window.addEventListener("resize", updateViewMode);
    return
  }, []);
  const MobileView = () => (
    <div className="container mt-3">{CommonContent()}</div>
  );

  // 🎨 Shared Content
  const CommonContent = () => (
    <section className="d-flex flex-column gap-3 w-100" style={{ backgroundColor: "#09747a", borderRadius: "30px" }}>
      <div className="col-11">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
          }}
        >
          Digital Marketing Advertising
        </h3>
        <div className='col-12 d-flex justify-content-center align-items-center'>
          <p
            className='col-10'
            style={{
              color: "black",
              textAlign: "center"
            }}
          >
            Stories have always been at the heart of human connection. In today’s
            fast-paced digital world, this timeless tradition evolves through
            engaging, content-driven storytelling. At
            <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend
            emotional narratives with modern media to create captivating content.
            <br />
            From social media to video production and influencer marketing, we
            craft stories that resonate deeply, bridging the gap between brands and
            their audiences. No matter how media changes, the human desire for
            meaningful stories remains, and we are here to tell them in the most
            engaging ways.
          </p>
        </div>

      </div>
      <div className='d-flex flex-row justify-content-center align-item-center ' >
        <div
          className="col-4 ratio-1x1 "
          style={{
            backgroundColor: "gray",
            margin: "10px",
            aspectRatio: "1/1",
          }}
        ></div>
        <div
          className="col-4 ratio-1x1"
          style={{
            backgroundColor: "gray",
            margin: "10px",
            aspectRatio: "1/1",
          }}
        ></div>
      </div>

    </section>
  );


  const images = [
    "https://picsum.photos/id/1015/400/200",
    "https://picsum.photos/id/1016/400/200",
    "https://picsum.photos/id/1018/400/200",
    "https://picsum.photos/id/1020/400/200",
    "https://picsum.photos/id/1025/400/200",
    "https://picsum.photos/id/1030/400/200"
  ];
  return (
    <div className='col-12'>
      <div className='container-fluid w-100 d-flex flex-column justify-content-center align-items-center gap-2 h-auto'>
        <section className="d-flex flex-column align-items-center justify-content-start position-relative col-12 top" >
          <Header />
          <div className='logo-section'>
            <img src={Logobig} alt="Logo" className='image-fluid col-md-7 col-12' />
          </div>
        </section>
        <section className="whoarewe-section bg-white col-12 w-md-75 ">
          <div className="d-flex flex-column flex-md-row h-auto justify-content-evenly align-items-end ">
            <img src={WhoWeAre} alt="Who We Are" className="image-fluid whoarewe-image1 col-md-5 col-12" />
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
        <section className='col-9 col-md-12 h-auto d-flex flex-column  flex-sm-column flex-md-row gap-1 section3 justify-content-center align-items-center' style={{ border: "1px solid #09747a", borderRadius: "30px" }}>
          <div className=' col-12 col-md-3 d-flex flex-row flex-md-column justify-content-center align-items-center ourclient' >
            <span style={{ fontSize: "2rem", fontWeight: 800, color: "white", margin: 10, padding: 0, lineHeight: "1" }}>
              OUR
            </span>
            <h1 style={{ margin: 0, padding: 0, lineHeight: "1", color: "white" }}>
              CLIENTELE
            </h1>
          </div>
          <div className="col-12 col-sm-12 w-75 col-md-8 d-flex flex-md-row flex-row  flex-wrap align-items-center section3div gap-2">
            {[
              ["https://logo.clearbit.com/apple.com",
                "https://logo.clearbit.com/google.com"],
              ["https://logo.clearbit.com/microsoft.com",
                "https://logo.clearbit.com/amazon.com"],
              ["https://logo.clearbit.com/facebook.com",
                "https://logo.clearbit.com/netflix.com"],
              ["https://logo.clearbit.com/tesla.com",
                "https://logo.clearbit.com/samsung.com"],
              ["https://logo.clearbit.com/intel.com",
                "https://logo.clearbit.com/sony.com"],
              /*"https://logo.clearbit.com/adidas.com",
              "https://logo.clearbit.com/nike.com",
              "https://logo.clearbit.com/coca-cola.com",
              "https://logo.clearbit.com/pepsi.com",*/
            ].map((logo, index) => (
              <div className='d-flex flex-row flex-md-column h-auto w-auto' >
                <img
                  key={index}
                  src={logo[0]}
                  alt={`logo-${index}`}
                  className="col-12 col-sm-12 col-md-1 square rounded-circle m-2"
                  style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                />
                <img
                  key={index}
                  src={logo[1]}
                  alt={`logo-${index}`}
                  className="col-5 col-sm-5 col-md-1 square rounded-circle m-2"
                  style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>


        </section>
        <section className='d-flex flex-column gap-6 flex-md-row m-10 w-100 justify-content-evenly align-items-center'>
          <YinYang upper="Digital Video Advertising" lower="Corporate Movies" />
          <YinYang upper="Social Media" lower="Influencer Marketing" />
          <YinYang upper="Content Creation" lower="Product Shooting" />
        </section>
        {isModalView ? <MobileView /> : <Modal />}

        <section className='col-12 d-flex flex-column' style={{ height: "fit-content" }}>
          <div className="container d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100" style={{ maxWidth: "60%" }}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
        <section className="col-12 d-flex flex-column justify-content-center align-items-center"
          style={{ height: "200px", margin: "0px", padding: "0px", overflow: "hidden" }}>

          <motion.div
            className="col-12 h-100 d-flex flex-row position-relative"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 10, repeat: Infinity }}
            style={{ display: "flex", whiteSpace: "nowrap" }}
          >
            {/* Original Images */}
            {images.map((src, i) => (
              <img key={i} src={src} alt={`slide-${i}`}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  minWidth: "200px",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px" // Optional: for rounded corners
                }} />
            ))}

            {/* Duplicate Images for Infinite Loop Effect */}
            {images.map((src, i) => (
              <img key={`dup-${i}`} src={src} alt={`dup-slide-${i}`}
                style={{
                  marginLeft: "5px",
                  marginRight: "5px",
                  minWidth: "200px",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px"
                }} />
            ))}
          </motion.div>

        </section>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", background: "#f4f4f4", margin:"30px" }}>
          <Testimonial />
        </div>
      </div>
      <section className="w-100">
        <img src={footerAbove} className="img-fluid footerimage" alt="Footer" />
      </section>
      <div className='col-12 footer'>
        <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
          <h3 style={{ color: "white" }}>INFORMATIONS</h3>

          <p className='para'>HOME</p>
          <p className='para'>ABOUT</p>
          <p className='para'>BLOG</p>
          <p className='para'>SERVICES</p>
        </div>
        <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
          <h3 style={{ color: "white" }}>SERVICES</h3>
          <p className='para'>HOME</p>
          <p className='para'>ABOUT</p>
          <p className='para'>BLOG</p>
          <p className='para'>SERVICES</p>
        </div>

      </div>
    </div>




  );
}; export default AboutSection;