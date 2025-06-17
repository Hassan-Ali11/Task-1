// src/App.js
import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import Img1 from './Img-folder/t1.jpg'
import Img2 from './Img-folder/t2.webp'
import Img3 from './Img-folder/t3.png'
import Img4 from './Img-folder/t4.webp'
import Img5 from './Img-folder/t5.jpg'
import Img6 from './Img-folder/t6.webp'
import Img7 from './Img-folder/t7.jpg'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyLogo</div>

        <div className="nav-center">
          <Link to="home" smooth={true} duration={500}>Home</Link>
          <Link to="about" smooth={true} duration={500}>About</Link>
          <Link to="portfolio" smooth={true} duration={500}>Portfolio</Link>
          <Link to="services" smooth={true} duration={500}>Services</Link>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </div>

        <button className="nav-button">Sign Up</button>
      </nav>

      {/* Sections */}
      <section id="home" className="section home">
        <img src={Img1} alt='Imge2 is not working' />
        <h1>I'm Alex Bennett,frontend</h1>
        <h2>developer based in USA</h2>
        <p>I am a frontend developer from californial,USA with 10 years of experience in multiple</p>
        <span>in multiple companies like Microsoft,Tesla, Apple</span>
        <div className='P-2'>
          <button className='btn1/P-2'>Contact with me</button>
          <button className='btn2/P-2'>My Resume</button>
        </div>
      </section>

      <section id="about" className="section">
        <div className='P-1'>About</div>
        <div className='P-2'>
        <p>A frontend developer focuses on building the visual and interactive aspects of a
         website using HTML, CSS, and JavaScript.Responsive design ensures that a website 
         looks great on all devices, from phones to large desktops.Semantic HTML improves
         accessibility and helps search engines better understand web content.</p>
        <p>Frontend developers often integrate REST or GraphQL APIs to fetch and display dynamic data.
          State management tools like Redux or Context API help manage data across components in 
          complex applications.</p>
          <ul>
            <li>HTML&CSS</li>
            <li>JavaScript</li>
            <li>Reactjs</li>
            <li>NEXTjs</li>
          </ul>
          </div>
          <div className='P-3'>
            <p>10+</p>
            <h5>Years of Experience</h5>
            <p>90+</p>
            <h5>Projects completed</h5>
            <p>15+</p>
            <h5>Happy clients</h5>
          </div>
      </section>
      <section id="portfolio" className="section">
        <h2>My Latest Work</h2>
        <div className='Bx-1'>
          <img src={Img2} alt='Imge2 is not working' />
          <img src={Img3} alt='Imge3 is not working' />
          <img src={Img4} alt='Imge4 is not working' />
        </div>
        <div className='Bx-2'>
        <img src={Img5} alt='Imge5 is not working' />
        <img src={Img6} alt='Imge6 is not working' />
        <img src={Img7} alt='Imge7 is not working' />
        </div>
      </section>
      <section id="services" className="section">
        <div className='P-1'>
          <div className='Box-1'>
            <h3>Web Design</h3>
            <p>Web Development is the Process of Building, Programming...</p>
            <span>Read More</span>
          </div>
          <div className='Box-2'>
            <h3>Graphics Design</h3>
            <p>Web Development is the Process of Building, Programming...</p>
            <span>Read More</span>
          </div>
          <div className='Box-3'>
            <h3>Digital Marketing</h3>
            <p>Web Development is the Process of Building, Programming...</p>
            <span>Read More</span>
          </div>
        </div>
        <div className='P-2'>
        <div className='B-1'>
          <h3>Content Writer</h3>
            <p>Web Development is the Process of Building, Programming...</p>
            <span>Read More</span>
        </div>
        <div className='B-2'>
          <h3>App Design</h3>
            <p>Web Development is the Process of Building, Programming...</p>
            <span>Read More</span>
        </div>
        <div className='B-3'>
          <h3>Social Media</h3>
            <p>Web Development is the Process of Building, Programming...</p>
            <span>Read More</span>
        </div>
        </div>
      </section>

      <section id="contact" className="section">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Fill out the form below and we'll get back to you shortly.</p>

        <form className="contact-form" action="#" method="post">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="John Doe" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
      </section>
    </div>
  );
}

export default App;
