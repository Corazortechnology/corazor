import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import toast from 'react-hot-toast';
import { contact } from '../assets';
import styles, { layout } from '../style';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  // Updated to store boolean values for checkbox states
  const [services, setServices] = useState({
    
    " ":" ",
    Technology: false,
    

    Marketing: false,

    Legal: false,
  });
  const [submitting, setSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!name || !email || !message || !Object.values(services).some(value => value)) {
      toast.error("Please fill in all fields and select at least one service.");
      setSubmitting(false);
      return;
    }

    const formData = {
      name,
      email,
      message,
      phone,
      services: Object.keys(services).filter(service => services[service]),
    };

    try {
      const res = await axios.post('https://corazor-server.onrender.com/api/v1/auth/registe', formData);

      if (res.data.success) {
        toast.success("Message sent successfully.");
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
        setServices({ Technology: false, Marketing: false, Legal: false });
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred.");
    }

    setSubmitting(false);
  };

  // Function to toggle service selection
  const toggleService = service => {
    setServices(prevServices => ({
      ...prevServices,
      [service]: !prevServices[service]
    }));
  };

  return (
    <section ref={ref} className={layout.section}>
      <motion.div
        initial={{ x: -100 }}
        animate={inView ? { x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>Get in Touch <br className='sm:block hidden'/>Let's Build Something Great Together.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Ready to start your project? Fill out the form below to send us a message and we will get back to you as soon as possible.
        </p>
        <form className="form mt-10  w-full flex  flex-start flex-col gap-4 i  content-center " onSubmit={handleSubmit}>
          <input className={`${styles.input} formInput h-[30px] p-7 w-1/2 `} type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input className={`${styles.input} formInput h-[30px] p-7 w-1/2 `} type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input className={`${styles.input} formInput h-[30px] p-7 w-1/2 `} type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <div className="servicesSection flex flex-row gap-2">
              <textarea className={`${styles.textarea} formTextarea p-5 w-full`} placeholder="Your Message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <select  className="serviceLabel flex text-black  bg-secondary border-none h-10 border-none w-1/3">
            {Object.keys(services).map(service => (
                <option   key={service} className="serviceCheckbox text-black "   onChange={() => toggleService(service)} >
                   {service}
                  </option>
               
                ))}
                </select>
          </div>
          <button type="submit" className={`${styles.button} submitButton`} disabled={submitting}>
            {submitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </motion.div>
      <motion.div
        initial={{ y: +100 }}
        animate={{ y: [0, 40] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
        className={layout.sectionImg}
      >
        <img src={contact} alt='Idea visualization' className='w-[90%] h-[90%]' />
      </motion.div>
    </section>
  );
};

export default Form;
