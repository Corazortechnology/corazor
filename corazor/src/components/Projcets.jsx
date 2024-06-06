import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import styles, { layout } from "../style";
import {
  Web3,
  webDev,
  ecommerce,
  helth,
  AIproject,
  homeIntegration,
  homeStylist,
  secureVote,
  freelancer,
  hub,
  fashion,
  contentSphare,
  cryptoAsset,
  smartMeds,
  supplychain,
  realEstate,
  certificate,
  stocks,
  learn,
  AImarkating,
  eventify,
} from "../assets";

// Example project data, update paths and data as necessary
const projectData = [
  {
    id: 1,
    name: "WebDev Cloud Manager",
    description: "Optimize cloud usage with actionable insights.",
    techStack: "Webdevelopment",
    images: webDev,
  },
  {
    id: 2,
    name: "E-Commerce Revolution",
    description: "Transforming online shopping with cutting-edge tech.",
    techStack: "Webdevelopment",
    images: ecommerce,
  },
  {
    id: 3,
    name: "Health Tracker",
    description: "Your health, monitored and cared for digitally.",
    techStack: "APP Development",
    images: helth,
  },
  {
    id: 4,
    name: "Stocks & Crypto Exchange",
    description: "Trade with intelligence and speed.",
    techStack: "Webdevelopment",
    images: stocks,
  },
  {
    id: 5,
    name: "AI Project Manager",
    description: "AI-driven insights to push projects forward.",
    techStack: "AI/ML Project",
    images: AIproject,
  },
  {
    id: 6,
    name: "Learn AI",
    description: "Personalized education in the age of AI.",
    techStack: "AI/ML Project",
    images: learn,
  },
  {
    id: 7,
    name: "AI Marketing Genius",
    description: "Redefining marketing strategies with AI.",
    techStack: "AI/ML Project",
    images: AImarkating,
  },
  {
    id: 8,
    name: "Smart Home Integrator",
    description: "Unify your home devices under a single system.",
    techStack: "AI/ML Project",
    images: homeIntegration,
  },
  {
    id: 9,
    name: "AR Home Stylist",
    description: "See your design choices in your space instantly.",
    techStack: "AI/ML Project",
    images: homeStylist,
  },
  {
    id: 10,
    name: "SecureVote Blockchain",
    description: "The future of fair and transparent elections.",
    techStack: "Blockchain Project",
    images: secureVote,
  },
  {
    id: 11,
    name: "Freelancer Connect",
    description: "Where talent meets opportunity.",
    techStack: "Webdevelopment",
    images: freelancer,
  },
  {
    id: 12,
    name: "Subscription Hub",
    description: "Manage and discover subscription services easily.",
    techStack: "Webdevelopment",
    images: hub,
  },
  {
    id: 13,
    name: "Eventify Platform",
    description: "Your go-to solution for event management and ticketing.",
    techStack: "Webdevelopment",
    images: eventify,
  },
  {
    id: 14,
    name: "FashionForge Designer",
    description: "Craft your unique apparel digitally.",
    techStack: "AI/ML Project",
    images: fashion,
  },
  {
    id: 15,
    name: "ContentSphere CMS",
    description: "Empowering creators to manage content seamlessly.",
    techStack: "AI/ML Project",
    images: contentSphare,
  },
  {
    id: 16,
    name: "Crypto Asset Tracker",
    description: "Track and manage your cryptocurrency assets in real-time.",
    techStack: "Blockchain Project",
    images: cryptoAsset,
  },
  {
    id: 17,
    name: "SmartMeds",
    description:
      "A blockchain-based medical application with multi-user functionality, securing medical data and facilitating appointments.",
    techStack: "Blockchain Project",
    images: smartMeds,
  },
  {
    id: 18,
    name: "Supply Chain Management System",
    description:
      "A blockchain system managing communication between stakeholders in the food supply chain.",
    techStack: "Blockchain Project",
    images: supplychain,
  },
  {
    id: 19,
    name: "Real Estate Dapp",
    description:
      "A blockchain-based real-estate management system offering virtual tours and secure property transactions.",
    techStack: "Blockchain Project",
    images: realEstate,
  },
  {
    id: 20,
    name: "Certificate Management System",
    description:
      "An AI and blockchain-based system for secure storage and verification of certificates.",
    techStack: "Blockchain Project",
    images: certificate,
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTechStack, setSelectedTechStack] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const techStackOptions = [
    "All",
    ...new Set(projectData.map((project) => project.techStack)),
  ];

  useEffect(() => {
    const filtered =
      selectedTechStack === "All"
        ? projectData
        : projectData.filter(
            (project) => project.techStack === selectedTechStack
          );
    setFilteredProjects(filtered);
  }, [selectedTechStack]);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} leading-2  `}>
        <span className="text-gradient">

      Discover

        </span>
       <span className=""> What </span> We've  
       <span className=" ml-1 text-gradient">
        
        Built
        </span>
        </h2>
        {/* <h2
          className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}
        >
         
          Discover What We've Built
          {/* <br className="sm:block hidden" /> */}
        {/* </h2>  */}
        {/* <p
          className={`${styles.paragraph} max-w-xs ss:max-w-ss sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-5`}
        >
          Take a look at our portfolio to see the range of our capabilities and
          the projects we're proud of. From innovative apps to dynamic websites,
          explore our work to find inspiration for your next project.
        </p> */}

        <div className="flex flex-wrap mt-3 mb-4 gap-4">
          {techStackOptions.map((techStack) => (
            <button
              key={techStack}
              className={`px-6 py-2 rounded ${
                selectedTechStack === techStack
                  ? "bg-[#25a18e] text-white font-semibold rounded-lg mb-5"
                  : "bg-black-200 opacity-30 text-white font-semibold mb-5"
              }`}
              onClick={() => setSelectedTechStack(techStack)}
            >
              {techStack}
            </button>
          ))}
        </div>

        <motion.div
          key={selectedTechStack}
          className="grid grid-cols-1 gap-8 ss:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0.5, x: project.id % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-black-400 text-white p-4 rounded-lg relative " 
              onClick={() => handleOpenModal(project)}
              >
          
              <img
                src={project.images ? project.images : "default-image.jpg"}
                alt={project.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="  mt-3 text-[#8e9aaf]  font-mono  text-[10px] ss:text-lg md:text-xl font-semibold
              
              ">
                {project.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex justify-between items-center
            
            "
            onClick={handleCloseModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
              <div className="
              bg-[#0b0c0c]
              w-screen h-screen flex justify-between items-center gap-10 
              px-10
              ">
              <div className=" p-8 w-[50%]">
                <h1 className="text-[#444444] mb-4  tracking-wide
                text-3xl font-semibold   uppercase
                ">
                  {selectedProject.name}
                </h1>
                <h3
                className="text-[#0E8DB0]
                text-xl tracking-wider pb-1
                
                "
                >
                  {selectedProject.techStack}
                </h3>
                <p className="text-white
                text-lg
                ">{selectedProject.description}
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>

              <img
                className="h-[45svh] w-[45svw] rounded-md "
                src={selectedProject.images}
                alt={selectedProject.name}
              />
            </div>
          </motion.div>
        )}
        
      </div>
    </section>
  );
};

export default Projects;