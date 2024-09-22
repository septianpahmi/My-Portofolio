import HeroImage from "../assets/hero-image.jpg";
import { FaFileDownload } from "react-icons/fa";
import Resume from "../assets/RESUME-SEPTIAN PAHMI-NEW.pdf";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="hero-image"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        Hi, I&apos;m {""}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400  to-blue-500">
          Septian Pahmi
        </span>
        , Graphic Designer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in creating graphic designs and developing modern,
        responsive web applications.
      </p>
      <div
        className="pt-4 flex flex-col md:flex-row 
          justify-center items-center"
      >
        <div className="flex space-x-4 my-4 md:my-0">
          <a
            href="https://www.facebook.com/people/Septian-Pahmi/100005524157864/?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/sptnpahmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/septianpahmi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/septianpahmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => window.open(Resume)}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full sm:w-auto"
        >
          Resume <FaFileDownload className="inline-block mr-2"></FaFileDownload>
        </button>
      </div>
    </div>
  );
};

export default Hero;
