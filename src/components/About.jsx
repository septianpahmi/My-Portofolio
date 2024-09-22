import AboutImage from "../assets/about1-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About"
            className="w-48 md:w-72 md:h-auto rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8 text-justify">
              I am a graphic designer and web developer with experience since
              2018. I specialize in creating aesthetically pleasing and
              functional designs while building modern, responsive web
              applications. With a background in Informatics Engineering, I
              possess a deep understanding of both web technologies and visual
              design, allowing me to blend creativity with technical approaches
              in every project. I am committed to delivering the best solutions
              for clients through effective communication and strong
              collaboration.
            </p>
            <div className="space-y-4">
              <h2 className="text-lg font-bold">Web Development</h2>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-3/12 md:w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2.5 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="javascript" className="w-3/12 md:w-2/12">
                  JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2.5 w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="uiux" className="w-3/12 md:w-2/12">
                  UI/UX Design
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2.5 w-11/12"></div>
                </div>
              </div>
              <h2 className="text-lg font-bold">Graphic Design</h2>
              <div className="flex items-center">
                <label htmlFor="adobesuite" className="w-3/12 md:w-2/12">
                  Adobe Suite
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2.5 w-9/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="coreldraw" className="w-3/12 md:w-2/12">
                  CorelDraw
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2.5 w-11/12"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  4+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  50+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  30+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
