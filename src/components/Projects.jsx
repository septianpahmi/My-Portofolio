import W1 from "../assets/w-github.png";
import W2 from "../assets/w-bumdes.png";
import W3 from "../assets/w-sukarobot.png";
import U1 from "../assets/u-sukarobot.png";
import U2 from "../assets/u-amar.png";
import D1 from "../assets/d1.jpg";
import D2 from "../assets/d2.jpg";
import D3 from "../assets/d3.jpg";
import D4 from "../assets/d4.jpg";
import D5 from "../assets/d5.jpg";
import D6 from "../assets/d6.jpg";
import S1 from "../assets/s1.png";
import S2 from "../assets/s2.png";

const projectsw = [
  {
    id: 1,
    name: "AHP Method Decision Making System",
    image: W1,
    company: null,
    link: "https://github.com/septianpahmi",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Cimacan Village UMKM Digital Portal",
    image: W2,
    company: "BUMDES Cimacan",
    link: "https://www.pkm-bumdescimacan.com/",
    category: "Web Development",
  },
  {
    id: 3,
    name: "Academy Information Systems",
    image: W3,
    company: "SUKAROBOT",
    link: "https://sukarobot.com/",
    category: "Web Development",
  },
];

const projectsu = [
  {
    id: 1,
    name: "Sukarobot Mobile Application UI",
    image: U1,
    company: "SUKAROBOT",
    link: "https://www.figma.com/design/j2nOhXRbRIAzWUiyyvXIYE/Sukarobot?m=auto&t=nc6xlOhWmFKSzIT4-1",
    category: "UI Design",
  },
  {
    id: 2,
    name: "AMAR Mobile Apllication UI",
    image: U2,
    company: "AMAR",
    link: "https://www.figma.com/design/uPZOP31sLzXu2u3ol8nUwr/UI-Amar?m=auto&t=nc6xlOhWmFKSzIT4-1",
    category: "UI Design",
  },
];
const projectss = [
  {
    id: 1,
    name: "My Freepik",
    image: S1,
    company: "Freepik",
    link: "https://www.freepik.com/author/sptnpahmi",
    category: "Graphic Design",
  },
  {
    id: 2,
    name: "My Dribbble",
    image: S2,
    company: "dribbble",
    link: "https://dribbble.com/mamot23",
    category: "Graphic Design",
  },
];
const projectsd = [
  {
    id: 1,
    name: "Logo Latter U & P",
    image: D1,
    category: "Graphic Design",
  },
  {
    id: 2,
    name: "Monogram Logo Design",
    image: D2,
    category: "Graphic Design",
  },
  {
    id: 3,
    name: "Merch Design",
    image: D3,
    category: "Graphic Design",
  },
  {
    id: 4,
    name: "Mascot Design",
    image: D4,
    category: "Graphic Design",
  },
  {
    id: 5,
    name: "Webinar Banner",
    image: D5,
    category: "Graphic Design",
  },
  {
    id: 6,
    name: "Marketing Banner",
    image: D6,
    category: "Graphic Design",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsw.map((project) => (
            <div key={project.id}>
              <div className="bg-gray-800 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="py-4 px-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-400">{project.category}</p>
                    <p className="text-gray-400">{project.company}</p>
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsu.map((project) => (
            <div key={project.id}>
              <div className="bg-gray-800 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="py-4 px-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-400">{project.category}</p>
                    <p className="text-gray-400">{project.company}</p>
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsd.map((project) => (
            <div key={project.id}>
              <div className="bg-gray-800 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectss.map((project) => (
            <div key={project.id}>
              <div className="bg-gray-800 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="py-4 px-6">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-400">{project.category}</p>
                    <p className="text-gray-400">{project.company}</p>
                  </div>
                  <a
                    href={project.link}
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-12 py-2 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
