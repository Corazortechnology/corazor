import React from "react";
import { Link } from "react-router-dom";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          {/* Your logo and description */}
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10">
          {/* Render your footer links */}
          {footerLinks.map((link, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <a href={link.url} className="text-white">
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 Corazor. All Rights Reserved
        </p>
        <div className=" flex  gap-2">
          {/* Links to terms, policy, and refund policy */}
          <Link
            to="/terms"
            className="font-bold text-white p-3 border-bottom rounded-lg"
          >
            Terms and conditions
          </Link>
          <Link
            to="/policy"
            className="font-bold text-white p-3 border-bottom rounded-lg"
          >
            Privacy Policy
          </Link>
          <Link
            to="/refundPolicy"
            className="font-bold text-white p-3 border-bottom rounded-lg"
          >
            Refund Policy
          </Link>
        </div>
        <div className="flex flex-row md:mt-0 mt-6">
          {/* Render social media icons */}
          {socialMedia.map((social, index) => (
            <a key={index} href={social.link}>
              <img
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
