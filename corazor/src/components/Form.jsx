import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import toast from "react-hot-toast";
import { contact } from "../assets";
import styles, { layout } from "../style";
import "./contact.scss";
import "./form.css";

const Form = () => {
  // new code
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isTech, setTech] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [submitting, setsubmitting] = useState(false);
  const [services, setServices] = useState({
    Technology: "",
    Marketing: "",
    Legal: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState(false);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [phone, setPhone] = useState('');
  // // Updated to store boolean values for checkbox states
  // const [services, setServices] = useState({

  //   "Select  Technology":"select ",
  //   Technology: false,

  //   Marketing: false,

  //   Legal: false,
  // });
  // const [submitting, setSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {}, [services, showServices]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setsubmitting(true);
    if (
      !name ||
      !email ||
      !message ||
      (!services.Technology && !services.Marketing && !services.Legal)
    ) {
      alert("Empty filed !");
      setsubmitting(false);
      return;
    }

    const requestBody = JSON.stringify({
      name,
      email,
      message,
      phone,
      services,
    });

    try {
      const res = await fetch(
        "https://corazor-server-8da9.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          alert("Email sent successfully");
          setName("");
          setEmail("");
          setMessage("");
          setPhone("");
          setsubmitting(false);
          setServices({ Technology: "", Marketing: "", Legal: "" });
          setSuccess(true);
        } else {
          alert("Failed to send Email");
          setError(true);
        }
      } else {
        alert("Failed to send Email");
        setError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setsubmitting(false);
      setServerError(true);
    }
  };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_94y20xo",
  //       "template_v10u2oh",
  //       formRef.current,
  //       "pX_2hasGmGcuvjXIW"
  //     )
  //     .then(
  //       (result) => {
  //         setSuccess(true)
  //       },
  //       (error) => {
  //         setError(true);
  //       }
  //     );
  // };

  //handel services

  function handelServices(e) {
    setTech(!isTech);

    if (e.target.checked) {
      setServices({ ...services, [e.target.name]: e.target.value });
    } else {
      setServices({ ...services, [e.target.name]: "" });
    }
  }

  //toggel service

  function toggelService() {
    setShowServices(!showServices);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setSubmitting(true);

  //   if (!name || !email || !message || !Object.values(services).some(value => value)) {
  //     toast.error("Please fill in all fields and select at least one service.");
  //     setSubmitting(false);
  //     return;
  //   }

  //   const formData = {
  //     name,
  //     email,
  //     message,
  //     phone,
  //     services: Object.keys(services).filter(service => services[service]),
  //   };

  //   try {
  //     console.log(formData)
  //     const res = await axios.post('https://corazor-server.onrender.com/api/v1/auth/register', formData);

  //     if (res.data.success) {
  //       toast.success("Message sent successfully.");
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //       setPhone("");
  //       setServices({ Technology: false, Marketing: false, Legal: false });
  //     } else {
  //       toast.error("Failed to send message.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("An error occurred.");
  //   }

  //   setSubmitting(false);
  // };

  // // Function to toggle service selection
  // const toggleService = service => {
  //   setServices(prevServices => ({
  //     ...prevServices,
  //     [service]: !prevServices[service]
  //   }));
  // };

  return (
    <section ref={ref} id="Contact Us" className={layout.section}>
      <motion.div
        initial={{ x: -100 }}
        animate={inView ? { x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={layout.sectionInfo}
      >
        <h2 className={styles.heading2}>
          Get in Touch <br className="sm:block hidden" />
          Let's Build Something Great Together.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Ready to start your project? Fill out the form below to send us a
          message and we will get back to you as soon as possible.
        </p>
        <form
          className="form mt-10  w-full flex  flex-start flex-col gap-4 i  content-center "
          onSubmit={handleSubmit}
        >
          <input
            className="input"
            type="text"
            required
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            required
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="number"
            required
            placeholder="Phone Number"
            name="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="toggel_Switch" onClick={() => toggelService()}>
            Select services of your choice <span>🔽</span>
          </div>
          {showServices == true ? (
            <div>
              <div className="service">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Technology"
                  value={
                    "IT Solutions in your pocket ( web development, App Developement, Artificial, Intelligence Blockchain)"
                  }
                  checked={services.Technology == "" ? false : true}
                  onChange={(e) => {
                    handelServices(e, e.target.name);
                  }}
                />
                <span className="service_text">
                  IT Solutions in your pocket ( web-development,
                  App-Developement, AI, Blockchain){" "}
                </span>
              </div>

              <div className="service">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Marketing"
                  value={"Marketing in your pocket"}
                  checked={services.Marketing == "" ? false : true}
                  onChange={(e) => {
                    handelServices(e, e.target.name);
                  }}
                />
                <span className="service_text">Marketing in your pocket</span>
              </div>

              <div className="service">
                <input
                  className="checkbox"
                  type="checkbox"
                  name="Legal"
                  value={"Legal in your pocket"}
                  checked={services.Legal == "" ? false : true}
                  onChange={(e) => {
                    handelServices(e, e.target.name);
                  }}
                />
                <span className="service_text">Legal in your pocket</span>
              </div>
            </div>
          ) : (
            ""
          )}

          <textarea
            className="textarea"
            rows={4}
            required
            placeholder="discribe your idea..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {submitting == true ? (
            <button className="button">Submitiing...</button>
          ) : (
            <button className="button" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          )}
          {error && (
            <span style={{ color: "red" }}>Trouble sending email !!</span>
          )}
          {success && (
            <span style={{ color: "#00FF00" }}>
              Your details was sent successfully.
            </span>
          )}
        </form>
      </motion.div>
      <motion.div
        initial={{ y: +100 }}
        animate={{ y: [0, 40] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className={layout.sectionImg}
      >
        <img
          src={contact}
          alt="Idea visualization"
          className="w-[90%] h-[90%]"
        />
      </motion.div>
    </section>
  );
};

export default Form;
