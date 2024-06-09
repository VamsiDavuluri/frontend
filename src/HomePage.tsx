import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import FAQ from './FAQ';

// Ensure images are imported properly
import donateImage from './imgs/donate.jpeg';
import linkedinIcon from './imgs/linkedin.jpeg';
import instagramIcon from './imgs/insta.jpeg';
import twitterIcon from './imgs/twitter.jpeg';
import discordIcon from './imgs/discord.jpeg';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1 className='padding-4'>Sahay</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/report">Report an Incident</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/shelters">Shelters</Link></li>
            <li><Link to="/login" className='padding-5'>Login</Link></li>
          </ul>
        </nav>
      </header>

      <section className="intro-section">
        <div className="intro-content">
          <h2>About Our System</h2>
          <p>
            Our Disaster Response Coordination System is a comprehensive platform designed to streamline communication and management during disaster situations. 
            When disasters strike, timely and organized responses are crucial to saving lives and mitigating damage. Our platform provides the tools needed to handle crises effectively, from incident reporting to volunteer coordination.
          </p>
          <p>
            We understand that in times of crisis, every second counts. Our system is built to ensure that emergency responses are swift, efficient, and well-coordinated. By enabling real-time notifications and resource management, we help responders get the right resources to the right places at the right times.
          </p>
          <p>
            However, we can't do this alone. Your support is vital in helping us maintain and expand our platform to serve more communities in need. Your donation can make a significant difference, allowing us to develop new features, reach more areas, and ultimately save more lives. Together, we can build a stronger, more resilient response system.
          </p>
          <p>
            <strong>Join us in making a difference. Your contribution, no matter how small, can help us create a safer, more responsive world. Donate today and be a part of this crucial mission.</strong>
          </p>
        </div>
      </section>

      <br></br>
      <br></br>

      <section className="donation-section">
        <div className="donation-content">
          <div className="donation-text">
            <h2>Get involved in social change in India</h2>
            <p>Discover and donate to fundraisers or start your own</p>
            <div className="donation-buttons">
            <Link to="/donate" className="donation-button donate">Donate to a fundriser</Link>
            </div>
          </div>
          <div className="donation-image">
            <img src={donateImage} alt="Donation" />
          </div>
        </div>
      </section>
      <br></br>

      <section className="features-section">
        <h2>Features</h2>
        <br></br>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Incident Reporting</h3>
            <p>Report incidents quickly and efficiently to ensure timely responses.</p>
          </div>
          <div className="feature-item">
            <h3>Resource Management</h3>
            <p>Manage resources such as medical supplies and food to ensure they are distributed where needed most.</p>
          </div>
          <div className="feature-item">
            <h3>Volunteer Coordination</h3>
            <p>Coordinate volunteers to ensure that all hands are on deck and efforts are not duplicated.</p>
          </div>
          <div className="feature-item">
            <h3>Real-Time Notifications</h3>
            <p>Receive real-time updates and notifications to stay informed of the latest developments.</p>
          </div>
        </div>
      </section>
      <br></br><br></br>

      <section className="cta-section">
        <h2>MAKE A DIFFERENCE</h2>
        <p>Join us in making disaster response more effective and efficient. Your help can make a difference. Volunteer now!!!</p>
        <br></br><br></br>
        <Link to="/donate" className="cta-button">Volunteer Now</Link>
      </section>

      <FAQ />

      <footer className="home-footer">
        <div className="footer-content">
          <h2>Sahay</h2>
          <p>Bringing Hope Amidst Chaos</p>
          <ul className="footer-links">
            <li><a href="#terms">Terms and conditions</a></li>
            <li><a href="#privacy">Privacy policy</a></li>
            <li><a href="#help">Help center</a></li>
            <li><a href="#api">API docs</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
          <div className="social-media">
            <a href="https://www.linkedin.com"><img src={linkedinIcon} alt="LinkedIn" /></a>
            <a href="https://www.instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.twitter.com"><img src={twitterIcon} alt="Twitter" /></a>
            <a href="https://www.discord.com"><img src={discordIcon} alt="Discord" /></a>
          </div>
          <p>Copyright © 2024 Toingg Inc. All rights reserved.</p>
          <p>Join our community <img src={discordIcon} alt="Discord" /></p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
