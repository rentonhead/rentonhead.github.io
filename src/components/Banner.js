import React from "react";

import Image from "../assets/avatar.svg";

import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="min-h[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <div className="flex-1 text-center font-syne lg:text-left lg:items-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black/80 text-[40px] leading-[0.8] lg:text-[80px] font-syne cursor-default"
            >
              Hasan Cemil Acar{" "}
              <span className="text-[30px] lg:text-[60px] hover:underline decoration-4 cursor-default">
               <br /> a.k.a rentonhead
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[26px] lg:text-[60px] font-syne leading-[1]"
            >
              <span className="text-black/80 mr-4 cursor-default">I am a</span>
              <TypeAnimation
                sequence={[
                  "React Developer",
                  2000,
                  "UI Designer",
                  2000,
                  "Branding Manager",
                  2000,
                  "Life-Time Learner",
                  2000,
                ]}
                speed={50}
                className="text-limefororange cursor-default"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black mb-8 max-w-lg mx-auto lg:mx-0 cursor-default"
            >
              I am a creative, self-motivated and ambitious Front-End Developer.
              I have experience with HTML/CSS/JavaScript/ ReactJS. I have
              working knowledge of Photoshop and Figma. I follow design trends
              and best practices to ensure that websites are user-friendly,
              accessible and aesthetic.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.github.com/rentonhead"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="fill-black/70" />
              </a>
              <a
                href="https://www.linkedin.com/in/hasan-cemil-acar-b1738a1bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="fill-black/70" />
              </a>
              <a
                href="https://www.twitter.com/rentonhead"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="fill-black/70" />
              </a>
            </motion.div>
            </motion.div>
           
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Banner;
