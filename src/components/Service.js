import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  // Six logo of font Awesome
  const logos = [
    "fa-solid fa-suitcase",
    "fa-solid fa-cogs",
    "fa-solid fa-code",
    "fa-solid fa-mobile",
    "fa-solid fa-globe",
    "fa-solid fa-chart-line",
  ];
  // Six headings
  const headings = [
    "CUSTOM APPLICATION DEVELOPMENT",
    "API DEVELOPMENT AND INTEGRATION",
    "DATABASE DESIGN AND MANAGEMENT",
    "RESPONSIVE UI/UX DESIGN",
    "DEPLOYMENT AND MAINTENANCE",
    "FULL-STACK WEB DEVELOPMENT",
  ];
  // Six subheadings
  const subHeadings = [
    "Leveraging MERN stack for bespoke solutions, understanding client needs, architecting applications, and implementing features to meet objectives effectively.",
    "Developing Express.js/Node.js RESTful APIs for seamless frontend-backend communication, integrating third-party APIs to enrich user experience within applications.",
    "Designing efficient MongoDB database schemas, ensuring integrity and scalability, implementing optimized data models, queries, and indexing strategies for enhanced application responsiveness.",
    "Utilizing React.js for dynamic, interactive user interfaces across devices and platforms, implementing responsive design principles for optimal usability and accessibility.",
    "Assisting in smooth deployment of MERN stack applications to production environments, addressing deployment challenges, and providing ongoing maintenance and support for updates and enhancements.",
    "Providing end-to-end MERN stack services, covering React.js frontend, Node.js/Express.js backend, and MongoDB database management for scalable web applications tailored to clients.",
  ];
  return (
    <div className="my-5" id="services">
      <div className="heading">
        <h1 className="text-center text-3xl font-serif" style={{ margin: 10 }}>
          Services
        </h1>
      </div>

      <div className="content flex flex-wrap gap-5 justify-center p-3 md:p-0">
        {logos.map((logo, index) => {
          return (
            <ServiceCard
              key={index}
              logo={logo}
              heading={headings[index]}
              subHeading={subHeadings[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
