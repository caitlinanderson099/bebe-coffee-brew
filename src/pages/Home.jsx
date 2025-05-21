import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FaArrowDown, FaArrowTurnDown, FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa6'


import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// THIS IS FOR THE AOS ANIMATIONS
/* 
 data-aos="fade-up"
  data-aos-anchor-placement="top-bottom" 
  data-aos-duration="3000"
*/


const Home = () => {

  // LANDING PAGE COMPONENT
  const LandingPage = () => {

    const navigate = useNavigate();
    const imgRef = useRef(null);
    const frame = useRef(null);

    const handleShop = (e) => {
      e.preventDefault();
      navigate('/ourcatalogue');
    }

    const handleMouseMove = (e) => {
      if (frame.current) cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        const img = imgRef.current;
        const rect = img.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const offsetX = (e.clientX - centerX) / rect.width;
        const offsetY = (e.clientY - centerY) / rect.height;

        const rotateX = offsetY * 10; // tilt strength
        const rotateY = offsetX * -10;

        img.style.transform = `
          perspective(1000px)
          scale(1.1)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
      });
    };

    const resetTransform = () => {
      const img = imgRef.current;
      img.style.transform = 'perspective(1000px) scale(1)';
    };

    return (
      <div className="landing-page">

        <div className="landing-text" 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" 
          data-aos-duration="3000"
        >
          <div className="heading">
            <h3>Hello, <span>Coffee</span> Lovers!</h3>
            <h1>BEBE'S COFFEE BREW</h1>
          </div>
          <p>Freshly grinded and roasted straight from brewing to drinking.</p>
          <button onClick={handleShop}>SHOP NOW <GoArrowUpRight /></button>
        </div>

        <div className="landing-right"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" 
          data-aos-duration="3000"
            onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
        >
 <img
        ref={imgRef}
        src="/landing-element.png"
        alt="Landing Visual"
      />        </div>

      </div>
    )
  };

  // FOR SALE COMPONENT
  const SaleText = () => {
    return (
      <div className="sale-wrapper">
        <div className="sale-track">
          <p>SALE 20% OFF YOUR FIRST ORDER!  | SALE 20% OFF YOUR FIRST ORDER! | SALE 20% OFF YOUR FIRST ORDER! </p>
          <p>| SALE 20% OFF YOUR FIRST ORDER! | SALE 20% OFF YOUR FIRST ORDER! | SALE 20% OFF YOUR FIRST ORDER! </p>
        </div>
      </div>
    );
  };


  // WELCOME SECTION COMPONENT
  const WelcomeSection = () => {
    return (
      <div className="welcome-section">
        <h2>Welcome!</h2>

        <div className="img-cont">
          <img src="https://placehold.co/400x400" alt="" />
          <img src="https://placehold.co/400x400" alt="" />
        </div>

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>

        <h3>Follow Us Here <FaArrowTurnDown/> </h3>

        <div className="socials">
          <button className='social-button'><FaInstagram/></button>
          <button className='social-button'><FaFacebook /></button>
          <button className='social-button'><FaTwitter/></button>
        </div>
      </div>
    )
  };


  // OUR VALUES SECTION COMPONENT
  const OurValues = () => {
    
    return (
      <div className="our-values-section">
        <h2>Our Values</h2>
        <div className="value-cards"
        data-aos="fade-up"
          data-aos-anchor-placement="top-bottom" 
          data-aos-duration="2000"
        >

          <div className="value-card" 
          >
            <img src="/sustainability.png" alt="" />
            <div className="card-details">
              <h3>Sustainability</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
            </div>
          </div>
          <div className="value-card"
          >
            <img src="/ethical-sourcing.png" alt="" />
            <div className="card-details">
              <h3>Ethical Sourcing</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
            </div>
          </div>
          <div className="value-card"
          >
            <img src="/customer-experience.png" alt="" />
            <div className="card-details">
              <h3>Customer Experience</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis</p>
            </div>
          </div>
          
         
        </div>
      </div>
    )
  };


  // HOURS SECTION COMPONENT
  const HourSection = () => {
    return (
      <div className="hours-section"  data-aos="fade-up"
  data-aos-anchor-placement="top-bottom" 
  data-aos-duration="3000">

        <div className="hours-location-card">

          <div className="hours">
            <h3>HOURS</h3>
            <li>Mon - Fri //  7:00 - 2:30</li>
            <li>Sat //  9:00 - 3:00</li>
            <li>Sun //  CLOSED</li>
          </div>
          <div className="locations">
            <h3>LOCATIONS</h3>
            <li>123 Doe Street, YC</li>
            <li>123 Doe Street, YC</li>
            <li>123 Doe Street, YC</li>
            <li>123 Doe Street, YC</li>
          </div>
        </div>
      </div>
    )
  };

  // PARTNERSHIPS SECTION COMPONENT
  const Partnerships = () => {
    return (
      <div className="partnership-section"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" 
        data-aos-duration="3000"
      >

        <div className="partnerships">

          <div className="partner">
            <h3>BRAND NAME #1</h3>
          </div>

          <div className="partner">
            <h3>BRAND NAME #2</h3>
          </div>

          <div className="partner">
            <h3>BRAND NAME #3</h3>
          </div>

          <div className="partner">
            <h3>BRAND NAME #4</h3>
          </div>

        </div>

        <img src="/thanks-message.png" alt="" />
      </div>
    )
  }






  // MASTER RETURN
  return (
    <div className='home-page'>
      <LandingPage/>
      <SaleText/>
      <WelcomeSection/>
      <OurValues/>
      <HourSection/>
      <Partnerships/>
    </div>
  )
}

export default Home
