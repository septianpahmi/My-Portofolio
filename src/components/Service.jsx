// eslint-disable-next-line no-unused-vars
import React from "react";
const services = [
  {
    id: 1,
    name: "Web Design",
    description:
      "Create attractive, responsive, and user-friendly website designs to enhance user experience.",
  },
  {
    id: 2,
    name: "Web Development",
    description:
      "Develop modern and responsive web applications using the latest technology tailored to client needs.",
  },
  {
    id: 3,
    name: "Graphic Design",
    description:
      "Design aesthetic, creative visual elements for branding, marketing and promotional purposes for your business.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 py-4 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              {/* <div className="mt-2 text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
                {service.id}
              </div> */}
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.name}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
