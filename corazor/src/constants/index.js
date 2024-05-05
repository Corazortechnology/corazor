import { 
  people01, 
  people02, 
  people03, 
  facebook, 
  instagram, 
  linkedin, 
  twitter, 
  airbnb, 
  binance, 
  coinbase, 
  dropbox, 
  send, 
  shield, 
  star
} from "../assets";
import { Link } from "react-router-dom";
import corazor from "../assets/corazorLogo.jpeg"
export const navLinks = [
  {
    id: "home",
    title: "Home",
    route:""
  },
  {
    id: "features",
    title: "Features",
    route:""
  },
 {
  id:"About",
  title:"About",
  route:""
 },
 {
  id:"Contact Us",
  title:"Contact Us",
  route:""
 },

{
  id:"Swipemate",
  title:"Product",
  route:"https://www.swypemate.com/"
}
];


  export const features = [
    {
      id: "feature-1",
      icon: star,
      title: "Custom Solutions",
      content:
        "Bespoke software development tailored exactly to your business needs, ensuring scalability, performance, and user satisfaction.",
    },
    {
      id: "feature-2",
      icon: shield,
      title: "Security & Compliance",
      content:
        "Implementing industry-standard security practices and compliance protocols to protect your data and privacy at every development phase.",
    },
    {
      id: "feature-3",
      icon: send,
      title: "Agile Delivery",
      content:
        "Fast, iterative development processes that keep you in the loop and bring your product to market quicker without compromising quality.",
    },
    // {
    //   id: "feature-4",
    //   icon: "support",
    //   title: ,
    //   content:
    //     "Dedicated post-launch support and maintenance to ensure your software continues to operate flawlessly across all scenarios.",
    // },
  ];
  

  export const feedback = [
    {
      id: "feedback-1",
      content:
        "This team's expertise turned our vision into reality. Their dedication and precision in crafting our custom software were beyond expectations. Highly recommend for any complex projects!",
      name: "Herman Jensen",
      title: "CTO at InnovateTech",
      img: people01, // Image path remains as you provided
    },
    {
      id: "feedback-2",
      content:
        "Thanks to their agile and meticulous approach, we experienced a seamless project lifecycle. The final product not only met but exceeded our operational needs. Exceptional service!",
      name: "Steve Mark",
      title: "Project Manager at NextGen Solutions",
      img: people02, // Image path remains as you provided
    },
    {
      id: "feedback-3",
      content:
        "Their team provided unparalleled support from start to finish, ensuring our software was both powerful and user-friendly. Their attention to detail made all the difference.",
      name: "Kenn Gallagher",
      title: "Founder of Startech Enterprises",
      img: people03, // Image path remains as you provided
    },
  ];
  
export const stats = [
  {
    id: "stats-1",
    title: "Projects",
    value: "1000+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Happy Cinets",
    value: "300+",
  },
];

export const footerLinks = [
 
    {
      title: "Services",
      links: [
        {
          name: "Custom Development",
          link: "https://www.hoobank.com/content/",
        },
        {
          name: "Product Design",
          link: "https://www.hoobank.com/how-it-works/",
        },
        {
          name: "QA & Testing",
          link: "https://www.hoobank.com/create/",
        },
        {
          name: "IT Consulting",
          link: "https://www.hoobank.com/explore/",
        },
        {
          name: "DevOps",
          link: "https://www.hoobank.com/terms-and-services/",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Documentation",
          link: "https://www.hoobank.com/help-center/",
        },
        {
          name: "API Reference",
          link: "https://www.hoobank.com/partners/",
        },
        {
          name: "Community Support",
          link: "https://www.hoobank.com/suggestions/",
        },
        {
          name: "Developer Blog",
          link: "https://www.hoobank.com/blog/",
        },
        {
          name: "Case Studies",
          link: "https://www.hoobank.com/newsletters/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "About Us",
          link: "https://www.hoobank.com/our-partner/",
        },
        {
          name: "Careers",
          link: "https://www.hoobank.com/become-a-partner/",
        },
      ],
    },
  ];
  


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/corazortechnology/",
  },
  // {
  //   id: "social-media-2",
  //   icon: corazor,
  //   link: "Corazortechnology@gmail.com",
  // },
  {
    id: "social-media-3",
    icon: twitter,
    link: " https://twitter.com/corazor94108",
  },
  // {
  //   id: "social-media-4",
  //   icon: facebook,
  //   link: " https://twitter.com/corazor94108",
  // },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/corazor-technology-private-limited/posts/?feedView=all",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];