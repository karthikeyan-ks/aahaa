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
import { useState, useEffect } from "react";
import Testimonial from '../components/testimonial';
import ImageGrid from '../components/ImageGrid';
import lulu from '../assets/lulu-group-fb.avif'
import rajasthanMarbles from '../assets/rajasthan-marbles.jpeg'
import disney from '../assets/disneyhotstar_660_110320034428.webp'
import berger from '../assets/berger.webp'
import esc from '../assets/logo esc.png'
import WhyAahaa from '../assets/whyaahaa (2).png';
import whiteman from '../assets/whiteman.jpg'
import trend from '../assets/images.jpg'
import swaDiamonds from '../assets/swadiamonds.jpeg'
import image0 from '../assets/pexels-cottonbro-2773521.jpg'
import image1 from '../assets/pexels-cottonbro-2773538.jpg'
import image2 from '../assets/pexels-cottonbro-3296547.jpg'
import image3 from '../assets/pexels-diimejii-3314294.jpg'
import image4 from '../assets/pexels-liza-summer-6347919.jpg'
import image5 from '../assets/pexels-mart-production-7330128.jpg'
import image6 from '../assets/pexels-mizunokozuki-13929360.jpg'
import image7 from '../assets/pexels-nappy-3602934.jpg'
import image8 from '../assets/pexels-onorblog-17319947.jpg'
import { Link } from "react-scroll";

const dictionary = {
  "Digital Video Advertising": "Captivate your audience with dynamic video ads that tell your brand’s story. We craft visually stunning content that cuts through the noise and drives results. Let’s turn your vision into a digital masterpiece.",
  "Corporate Movies": "Showcase your company’s journey with compelling corporate films. We highlight your achievements, values, and vision, creating a narrative that resonates with stakeholders. Your story, professionally told.",
  "Social Media Reels": "Catch eyes and stop thumbs with engaging social media reels. From concept to execution, we deliver snappy, creative content that drives engagement and keeps your brand trending. Let’s make your message go viral.",
  "Influencer Marketing": "Leverage the power of influence to amplify your brand’s reach. We connect you with the right voices, crafting authentic collaborations that drive awareness and engagement. Influence the right way.",
  "Content Creation": "Fuel your brand’s presence with high-quality, tailored content. Whether it’s blogs, videos, or graphics, we create content that resonates with your audience and boosts your digital footprint. Let’s bring your brand to life.",
  "Product Shooting": "Bring your products to life with stunning visuals that captivate and convert. We create high-quality, professional product shoots that showcase every detail, making your brand stand out. Let’s turn your products into irresistible visuals.",
} as const;

type DictionaryKey = keyof typeof dictionary;

const AboutSection = () => {
  const handleButton = (name: string,i: number) => {
    setButtonIndex(i)
    setIndex(name as DictionaryKey)
  }

  const [index, setIndex] = useState<DictionaryKey>("Digital Video Advertising");
  const [buttonIndex , setButtonIndex] = useState<number>(1)
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
    <section className="d-flex flex-row gap-3 w-100" style={{ backgroundColor: "#09747a", borderRadius: "30px" }}>
      <div className="w-100">
        <h3
          style={{
            textAlign: "center",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
            margin: "10px",
          }}
        >
          {index}
        </h3>
        <div className='col-12 d-flex justify-content-center align-items-start'>
          <p
            className='col-10'
            style={{
              color: "white",
              fontSize: "1.2rem"

            }}
          >
            {dictionary[index]}
          </p>
        </div>

      </div>
      <div className='d-flex w-auto flex-row justify-content-center align-item-center mt-4 mb-4' >
        <ImageGrid  index={buttonIndex}/>
      </div>

    </section>
  );


  const images = [
    image0, image1, image2, image3, image4, image5, image6, image7, image8
  ];
  return (
    <div className='col-12'>
      <div className='container-fluid w-100 d-flex flex-column justify-content-center align-items-center gap-2 h-auto'>
        <section id='home' className="d-flex flex-column align-items-center justify-content-start position-relative col-12 top" >
          <Header />
          <div className='logo-section'>
            <img src={Logobig} alt="Logo" className='image-fluid col-md-7 col-12' />
          </div>
        </section>
        <section id='about' className="whoarewe-section bg-white col-12 w-md-75 ">
          <div className="d-flex flex-column flex-md-row h-auto justify-content-evenly align-items-stretch">
            {/* Image Container */}
            <div className="d-flex col-12 col-md-4">
              <img src={WhoWeAre} alt="Who We Are" className=" whoarewe-image1 " />
            </div>

            {/* Text Container */}
            <div className="col-12 col-md-7 d-flex align-items-center">
              <p className="whoarewe-section-paragraph">
                Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
                <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
                From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
              </p>
            </div>
          </div>

          <div className="d-flex flex-column-reverse flex-md-row-reverse h-auto justify-content-evenly align-items-stretch">
            {/* Image Container */}
            <div className="d-flex col-12 col-md-4">
              <img src={WhyAahaa} alt="Who Aahaa" className=" whoarewe-image2 " />
            </div>

            {/* Text Container */}
            <div className="col-12 col-md-7 d-flex align-items-center">
              <p className="whoarewe-section-paragraph">
                Stories have always been at the heart of human connection. In today’s fast-paced digital world, this timeless tradition evolves through engaging, content-driven storytelling. At
                <span className="fw-bold"> AAHAA ENTERTAINMENTS,</span> we blend emotional narratives with modern media to create captivating content.<br />
                From social media to video production and influencer marketing, we craft stories that resonate deeply, bridging the gap between brands and their audiences. No matter how media changes, the human desire for meaningful stories remains, and we are here to tell them in the most engaging ways.
              </p>
            </div>
          </div>
          <div className='col-12 bar' ></div>
        </section>
        <section className='col-12 col-md-12 client-section h-auto d-flex flex-column  flex-sm-column flex-md-row gap-1 section3 justify-content-center align-items-center' style={{ border: "1px solid #09747a", borderRadius: "30px", margin: "0px" }}>
          <div className='col-12 col-md-3 d-flex flex-row flex-md-column justify-content-center align-items-center ourclient' >
            <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", margin: 10, padding: 0, lineHeight: "1" }}>
              OUR
            </span>
            <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "white", margin: 10, padding: 0, lineHeight: "1" }}>
              CLIENTELE
            </span>
          </div>
          <div className="col-12 col-sm-12 w-75 col-md-8 d-flex flex-md-row flex-column  flex-wrap align-items-center section3div gap-1 gap-md-4">
            {[
              [
                { "name": "Swa Diamonds", "logo": swaDiamonds },
                { "name": "Trends", "logo": trend },
              ],
              [
                { "name": "Berger", "logo": berger },
                { "name": "Disney Hotstar", "logo": disney }
              ],
              [
                { "name": "Eurpoe Study Center", "logo": esc },
                { "name": "Lulu", "logo": lulu }
              ],
              [
                { "name": "Rajasthan Marbles", "logo": rajasthanMarbles },
                { "name": "Whiteman", "logo": whiteman },
              ],
            ].map((logo, index) => (
              <div className='d-flex flex-row flex-md-column h-auto ml-5 pair justify-content-center' >
                <div className='ml-3 d-flex w-100 flex-column justify-content-center align-items-center'>
                  <img
                    key={index}
                    src={logo[0].logo}
                    alt={`logo-${index}`}
                    className="col-12 col-sm-12 col-md-1 square rounded-circle "
                    style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                  />
                  <p className='text-center w-100'>{logo[0].name}</p>
                </div>
                <div className='ml-3 w-100 d-flex flex-column justify-content-center align-items-center'>
                  <img
                    key={index}
                    src={logo[1].logo}
                    alt={`logo-${index}`}
                    className="col-12 col-sm-12 col-md-1 square rounded-circle "
                    style={{ aspectRatio: "1 / 1", objectFit: "contain" }}
                  />
                  <p className='w-100 text-center'> {logo[1].name}</p>
                </div>

              </div>
            ))}
          </div>


        </section>
        <section id="services" className='d-flex flex-column gap-6 flex-md-row m-10 w-100 justify-content-evenly align-items-center'>
          <YinYang upper="Digital Video Advertising" lower="Corporate Movies" handlebutton={handleButton} />
          <YinYang upper="Social Media Reels" lower="Influencer Marketing" handlebutton={handleButton} />
          <YinYang upper="Content Creation" lower="Product Shooting" handlebutton={handleButton} />
        </section>
        {isModalView ? <MobileView /> : <Modal header={index} content={dictionary[index]} />}

        <section className='col-12 d-flex flex-column' style={{ height: "fit-content", marginTop: "20px" }}>
          <div className="container d-flex justify-content-center">
            <div className="ratio ratio-16x9 w-100 video">
              <iframe
                src="https://drive.google.com/file/d/1dRp8NfHYdZkfEs81Adq884cF5vVUcy1-/preview"
                title="Google Drive Video"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className="col-12 d-flex flex-column justify-content-center align-items-center"
          style={{ height: "200px", margin: "20px", padding: "0px", overflow: "hidden" }}>

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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", margin: "30px", width: "100%" }}>
          <Testimonial />
        </div>
      </div>
      <section className="w-100">
        <img src={footerAbove} className="img-fluid footerimage" alt="Footer" />
      </section>
      <div className='col-12 footer d-flex flex-row justify-content-between'>
        <div className='col-5 d-flex flex-column justify-content-center align-items-start'>
          <h3 className='w-100 text-start' style={{ color: "white" }}>INFORMATIONS</h3>
          <nav className='col-12 d-flex flex-column justify-content-center align-items-start'>
            <Link to="home" smooth={true} duration={500} className="para">Home</Link>
            <Link to="about" smooth={true} duration={500} className="para">About</Link>
            <Link to="blog" smooth={true} duration={500} className="para">Blog</Link>
            <Link to="services" smooth={true} duration={500} className="para">Services</Link>
          </nav>

        </div>

        <div className='col-5 d-flex flex-column justify-content-center align-items-end'>
          <h3 className='w-100 text-start' style={{ color: "white" }}>SERVICES</h3>
          <div className='col-12 cd-flex flex-column justify-content-start align-items-start'>
            <p className='para' style={{ textTransform: "capitalize" }}>Digital Video</p>
            <p className='para' style={{ textTransform: "capitalize" }}>Corporate Movies</p>
            <p className='para' style={{ textTransform: "capitalize" }}>Social Media</p>
            <p className='para' style={{ textTransform: "capitalize" }}>Content Creation</p>
          </div>
        </div>

      </div>
      <div className='col-12 d-flex flex-column justify-content-center align-items-center' style={{ color: "white", backgroundColor: "#09747a" }}>
        <div> &copy; aahaa entertainments</div>
        <div>  all right reserved</div>
        <br />
      </div>

    </div>




  );
}; export default AboutSection;