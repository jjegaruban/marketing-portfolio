import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import Heading from "../../HelperComp/Heading";

const About = () => {
  return (
    <div className="h-full page-shadow bg-white p-10">
      {/* heading */}
      <Heading
        title="About"
        subtitle="Creative Digital Marketer and Content Strategist"
      />

      {/* Details section */}
      <div className="mt-10 text-slate-500">
        <p>
          With expertise in SEO,PPc,social media marketing, and content creation,
          I bring innovative solutions to enhance brand visibility and engagement.
          Skilled in integrating AI tools and advanced editing techniques, I specialize
          in crafting impactful campaigns and visually captivating content that drives results
          and delivers exceptional value for businesses and audiences alike.
        </p>
        <br />

        {/* Social Links */}
        <div className="flex space-x-4 mt-10">
          <a
            href="https://web.facebook.com/profile.php?id=61571489954994" // Replace with your Facebook URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdFacebook className="social-btn" />
          </a>
          <a
            href="https://www.instagram.com/socialvault.lk/" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram className="social-btn" />
          </a>
          <a
            href="https://github.com/jjegaruban" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="social-btn" />
          </a>
          <a
            href="https://www.linkedin.com/in/jeyakumar-jegaruban-47676328b/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="social-btn" />
          </a>
        </div>

        {/* Button Links */}
        <div className="flex space-x-4 mt-4">
          <a href="#" className="primary-btn">
            Download Resume
          </a>
          <a href="tel:+94750543148" className="outline-btn">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

