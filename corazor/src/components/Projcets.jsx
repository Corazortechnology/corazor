import React,{useState,useEffect,useRef} from 'react';
import { card, idea, contact } from '../assets';
import Button from './Button';
import { motion,AnimatePresence  } from 'framer-motion';
import styles, { layout } from '../style';
// import AOS from 'aos';
// import 'aos/dist/aos.css';



const projectData = [
  {
    id: 1,
    name: 'WebDev Cloud Manager',
    description: 'Optimize cloud usage with actionable insights.',
    techStack: 'Webdevelopment',
  },
  {
    id: 2,
    name: 'E-Commerce Revolution',
    description: 'Transforming online shopping with cutting-edge tech.',
    techStack: 'Webdevelopment',
  },
  {
    id: 3,
    name: 'Health Tracker',
    description: 'Your health, monitored and cared for digitally.',
    techStack: 'APP Development',
  },
  {
    id: 4,
    name: 'Stocks & Crypto Exchange',
    description: 'Trade with intelligence and speed.',
    techStack: 'Webdevelopment',
  },
  {
    id: 5,
    name: 'AI Project Manager',
    description: 'AI-driven insights to push projects forward.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 6,
    name: 'Learn AI',
    description: 'Personalized education in the age of AI.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 7,
    name: 'AI Marketing Genius',
    description: 'Redefining marketing strategies with AI.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 8,
    name: 'Smart Home Integrator',
    description: 'Unify your home devices under a single system.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 9,
    name: 'AR Home Stylist',
    description: 'See your design choices in your space instantly.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 10,
    name: 'SecureVote Blockchain',
    description: 'The future of fair and transparent elections.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 11,
    name: 'Freelancer Connect',
    description: 'Where talent meets opportunity.',
    techStack: 'Webdevelopment',
  },
  {
    id: 12,
    name: 'Subscription Hub',
    description: 'Manage and discover subscription services easily.',
    techStack: 'Webdevelopment',
  },
  {
    id: 13,
    name: 'Eventify Platform',
    description: 'Your go-to solution for event management and ticketing.',
    techStack: 'Webdevelopment',
  },
  {
    id: 14,
    name: 'FashionForge Designer',
    description: 'Craft your unique apparel digitally.',
    techStack: 'Artificial Intelligance',
  },
  {
    id: 15,
    name: 'ContentSphere CMS',
    description: 'Empowering creators to manage content seamlessly.',
    techStack: 'Artificial Intelligance',
  },
];

  
      

 
const Projects = () => {
    const [selectedTechStack, setSelectedTechStack] = useState('All');

    const [filteredProjects,setFilteredProjects]=useState([])

    const projectContainerRef = useRef(null);


    const techStackOptions = ['All', ...new Set(projectData.map(project => project.techStack))];

    //  filteredProjects = selectedTechStack === 'All'
    // ? projectData
    // : projectData.filter(project => project.techStack === selectedTechStack);

    // useEffect(() => {
    //     AOS.init({
          
    //       duration: 1000, 
    //     });
    //     const observer = new MutationObserver(() => {
    //         AOS.refresh();
    //     });
    
    //     const projectContainer = projectContainerRef.current;
    //     if (projectContainer) {
    //         observer.observe(projectContainer, {
    //             childList: true, // Observe direct children addition/removal
    //             subtree: true, // Observe all descendants
    //             attributes: false, // No need to observe attribute changes
    //         });
    //     }
    
    //     return () => observer.disconnect(); 
       
    //   }, []); 
      

    useEffect(() => {
        
        
        const filtered = selectedTechStack === 'All'
          ? projectData
          : projectData.filter(project => project.techStack === selectedTechStack);

        setFilteredProjects(filtered);
        // setTimeout(() => {
        //     AOS.refresh();
        // }, 500);

    }, [selectedTechStack]);



    console.log(projectData)
    return (
        <section className={layout.section}>
          <div className={layout.sectionInfo}>
            <h2 className={`${styles.heading2} text-ss leading-tight ss:text-sm md:text-lg lg:text-xl`}>
              Our Projects <br className='sm:block hidden'/>Discover What We've Built
            </h2>
            <p className={`${styles.paragraph} max-w-xs ss:max-w-ss sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-5`}>
              Take a look at our portfolio to see the range of our capabilities and the projects we're proud of. From innovative apps to dynamic websites, explore our work to find inspiration for your next project.
            </p>
    
            {/* Tech Stack Selectors */}
             <div className="flex  flex-wrap mt-3  mb-4 gap-4 ">
              {techStackOptions.map((techStack) => (
                <button
                  key={techStack}
                  className={`px-6 py-2 rounded ${selectedTechStack === techStack ? 'bg-blue-gradient text-black font-semibold' : 'bg-black-200 opacity-30 text-white font-semibold'}`}
                  onClick={() => setSelectedTechStack(techStack)}
                >
                  {techStack}
                </button>
              ))}
            </div>
    
            {/* Project  Cards */}
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
      className="bg-black-400 border shadow-3xl  border-white text-white p-4 rounded-lg relative"
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center rounded-lg">
        <p className="text-white text-xs ss:text-sm md:text-md lg:text-lg p-4">{project.description}</p>
      </div>
      <img src={project.images ? project.images[0] : 'default-image.jpg'} alt={project.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="mt-2 text-md ss:text-lg md:text-xl font-semibold">{project.name}</h3>
    </motion.div>
  ))}
</motion.div>


          </div>
        </section>
      );
    };

  

export default Projects;
