import React from "react";


import { motion } from "framer-motion";

import { fadeIn } from "../variants";

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube'

const services = [
  {
    name: 'Front-End Skills',
    description:
      "HTML, CSS, Bootstrap, SASS, LESS, Tailwind CSS, Material IU, Javascript, ReactJS, Redux Toolkit, TypeScript, React Three Fiber, MongoDB, Rest, Git, Github",
    
  },
  {
    name: 'Design Skills',
    description:
      "Adobe Creative Cloud, Photoshop, Illustrator, Figma, Aseprite, Canva, Blender, Elemantor, Bakery",
    
  },
  {
    name: 'Branding Skills',
    description:
      "Wordpress, Meta Business Suite, Facebook Marketplace, Spark Ar, Google Search Console, Google Ads",
    
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="flex-1 lg:bg-bottom  mb-12 lg:mb-0">

          <motion.section
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className='flex flex-1 items-center w-[100%] h-[70vh] '>
        <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
            <Cube/>
        </Canvas>
    </motion.section>
    </div>
          {/* services */}
          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className="flex-1">
            <div>
              {services.map((service, index)=>{
                //dest serv
                const {name, description, link} = service;
                return (
                  <div className="border-b border-black/20 h-[146px] mb-[38px] flex" key={index}>
                    <div className="max-w[476px]">
                      <h4 className="text-[20px] tracking-wider text-black font-syne font-semibold mb-6">{name} </h4>
                      <p className="text-black font-syne leading-tight">{description} </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                    
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
