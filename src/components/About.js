import React from "react";


import { useInView } from "react-intersection-observer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera, } from "@react-three/drei";
import Room from "../components/Room"



const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-1 items-center w-[100%] h-[100vh] "
          >
            <Canvas className="" >
              <Stage environment="city">
              <Room/>
              </Stage>
              <OrbitControls enableZoom={false} minDistance={9} autoRotate/>
            </Canvas>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 font-syne text-limefororange ">About Me</h2>
            <h3 className="font-syne mb-4 text-black/80">I am a web programmer who studied Computer Programming and French Literature and now works as a front-end web developer. I enjoy creating websites that are user-friendly, responsive and attractive. I like to learn new technologies and frameworks that can help me improve my skills and deliver better products. I think creativity is an essential quality for a web developer, as it allows me to find innovative solutions and express my ideas through code. Before becoming a web developer, I worked as a branding manager for two years, where I learned how to create effective visual identities and marketing strategies for different clients.
            </h3>
            {/* stats */}
            {/*  <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-syne text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-syne text-sm tracking-[2px] text-limefororange font-semibold">
                  Years Of <br /> Experience{" "}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-syne text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-syne text-sm tracking-[2px] text-limefororange font-semibold">
                  Years Of <br /> Experience{" "}
                </div>
              </div>
              <div>
                <div className="text-[40px] font-syne text-gradient mb-2">
                  {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                </div>
                <div className="font-syne text-sm tracking-[2px] text-limefororange font-semibold">
                  Years Of <br /> Experience{" "}
                </div>
              </div>
            </div> */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
