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
      name: 'Cloud Resource Manager',
      description: 'Manage and monitor cloud resources efficiently with real-time analytics and cost-saving recommendations.',
      techStack: 'MERN',
    },
    {
      id: 2,
      name: 'Next-Gen E-Commerce Suite',
      description: 'A full-featured e-commerce solution with advanced analytics, personalized shopping experiences, and seamless payment integration.',
      techStack: 'MERN',
    },
    {
      id: 3,
      name: 'Healthcare Companion App',
      description: 'A personal healthcare assistant offering symptom tracking, medication reminders, and telehealth consultations.',
      techStack: 'Flutter',
    },
    {
      id: 4,
      name: 'Investment and Trading Platform',
      description: 'Real-time stock and cryptocurrency trading platform with automated portfolio management and predictive analytics.',
      techStack: 'MERN',
    },
    {
      id: 5,
      name: 'Collaborative Project Management Tool',
      description: 'Streamline team projects with task assignments, progress tracking, and integrated communication tools.',
      techStack: 'VueJS',
    },
    {
      id: 6,
      name: 'Interactive Learning Platform',
      description: 'An educational platform offering personalized learning paths, interactive content, and community-driven knowledge sharing.',
      techStack: 'Django',
    },
    {
      id: 7,
      name: 'AI-Driven Marketing Insights',
      description: 'Harness the power of AI to analyze marketing data, predict trends, and optimize campaign strategies in real-time.',
      techStack: 'Flask',
    },
    {
      id: 8,
      name: 'Smart Home Ecosystem',
      description: 'An integrated smart home management system for controlling IoT devices through a single, user-friendly interface.',
      techStack: 'IoT',
    },
    {
      id: 9,
      name: 'Augmented Reality Interior Designer',
      description: 'Visualize furniture and decor in your space with an augmented reality app, simplifying home decoration.',
      techStack: 'ARKit',
    },
    {
      id: 10,
      name: 'Blockchain-Based Voting System',
      description: 'A secure, transparent voting system utilizing blockchain technology to ensure integrity and anonymity.',
      techStack: 'Solidity',
    },
    {
      id: 11,
      name: 'Freelance Marketplace',
      description: 'Connect freelancers with projects matching their skills, featuring an escrow payment system and performance ratings.',
      techStack: 'MERN',
    },
    {
      id: 12,
      name: 'Subscription Box Service Platform',
      description: 'A platform for managing subscription box services, including customer preferences, subscription tiers, and logistics.',
      techStack: 'MERN',
    },
    {
      id: 13,
      name: 'Event Planning and Ticketing Portal',
      description: 'An all-in-one platform for event planning, ticket sales, attendee management, and engagement analytics.',
      techStack: 'MERN',
    },
    {
      id: 14,
      name: 'Custom Apparel Design Tool',
      description: 'Design custom apparel with an online tool that allows users to visualize their creations before ordering.',
      techStack: 'React',
    },
    {
      id: 15,
      name: 'Content Management System',
      description: 'A flexible CMS for creating, managing, and optimizing digital content across multiple channels.',
      techStack: 'Django',
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
