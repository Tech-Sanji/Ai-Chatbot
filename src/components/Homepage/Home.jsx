// import Footer from "../Footer/Footer";
import "./Home.css";
import Chatpop from "../Chatpopup/chatpop";
import romanShoes1 from "../../assets/romanShoes1.png";
import about_vector1 from "../../assets/about_vector1.png";
import app from "../../assets/app.jpg";

import romanGallery from "../../assets/romanGallery.jpeg";

export default function Home() {
  return (
    <>
      <div className="home ">
        <section id="norm" className="cover-sect">
          <div className="title-text">
            <h1 style={{ color: "blue", fontSize: "50px" }}>Hertzsoft</h1>
            <p style={{ background: "inherit", color: "black" }}>
            Hertzsoft is a highly regarded name in the field of web development services. We aspire to see many others follow in our footsteps and make history in the IT industry.

Educare is a subsidiary of Hertzsoft that has evolved over time to help students enhance their practical knowledge with the guidance of industry experts. We are committed to our continuous growth and transformation to ensure that our students receive the best possible education.
            </p>
          </div>
          <div className="box-feature">
            <img
              className="cover-image"
              src={app}
              alt="Living room sample"
            />
          </div>
        </section>
        <section id="story" className="story-sect">
          <div className="section-text">
            <h2>About Hertzsoft</h2>
            <p style={{ backgroundColor: "inherit" }}>
            Hertzsoft is a renowned name specially for Web App Development & Certification Courses. We provide Web Design & Development, Mobile App Development, Final Year Projects and Business Branding Services.

Hertzsoft announced a record of 22 projects just within it's first birth anniversary. This is possible because we are a group of people gathered to convert our passion into profession.
            </p>
          </div>
          <div className="box-feature">
            <img src={about_vector1} />
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="section-text">
            <h2>Get in touch</h2>
            <p>
              We would love to hear from you! <br />
              <br />
              If you would like to receive our monthly catalogue subscribe by
              filling in the form with your name and email address
            </p>
          </div>

          <ul className="social-networks square spin-icon">
            <li>
              <a href="https://www.linkedin.com/" className="icon-linkedin">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" className="icon-twitter">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" className="icon-facebook">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitch.tv" className="icon-twitch">
                Twitch
              </a>
            </li>
            <li>
              <a href="https://github.com" className="icon-github">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://pinterest.com" className="icon-pinterest">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon-instagram">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://vimeo.com" className="icon-vimeo">
                Vimeo
              </a>
            </li>
          </ul>
        </section>
        <footer className="footer-section">
          <div className="footer-info">
            <ul style={{ listSstyle: "none", backgroundColor: "inherit" }}>
              <li>
                <span>Privacy</span>
              </li>
              <li>
                <span>Terms</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </div>
          <span className="personal-info">
            Created by Espada
            <br />
            Reach out on Discord
          </span>
          <span>Copyright 2024</span>
        </footer>
      </div>
      <Chatpop />
    </>
  );
}
