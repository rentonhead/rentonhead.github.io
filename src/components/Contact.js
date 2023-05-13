import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Map from './Map';



const Contact = () => {
  const ref = useRef()
const [success,setSuccess] = useState(null)

const handleSubmit = e =>{
  e.preventDefault()
  emailjs.sendForm('service_xjm279e', 'template_boz3tri', ref.current, 'q3mWe6UHfF9ZHJ1bN')
  .then((result) => {
      console.log(result.text);
      setSuccess(true)
  }, (error) => {
      console.log(error.text);
      setSuccess(true)
  });
} 
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10">
          {/* text */}
          <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 flex justify-start items-center gap-y-12">
            <div className='group relative overflow-hidden'>
              <h4 className="text-limefororange text-xl uppercase font-syne font-semibold mb-2 tracking-wide">
                Get in Touch
              </h4>
              <h2 className="font-syne text-[45px] lg:text-[90px] leading-none mb-2 text-black">
                Let's Work <br /> Together!
              </h2>
              <Map />
            </div>
          </motion.div>
          {/* form */}
          <motion.form ref={ref} onSubmit={handleSubmit}
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 border-2 rounded-2xl  flex flex-col gap-y-6 pb-15 p-6 items-start border-black/40">
            <input
              className="font-semibold font-syne bg-transparent text-black  border-black/60 border-b py-3 outline-none w-full placeholder:text-black"
              name='name'
              type="text"
              placeholder="Your Name"
            />
            <input
              className="font-semibold font-syne bg-transparent text-black border-black/60 border-b py-3 outline-none w-full placeholder:text-black"
              type="text"
              name='email'
              placeholder="Your Email"
            />
            <textarea className="font-semibold font-syne bg-transparent text-black border-black/60 border-b py-10 outline-none w-full placeholder:text-black transition-all resize-none mb-10" placeholder="Your Message" name='message'></textarea>
            <button className="btn btn-lg">Send Message</button>
            <p><a className="font-syne font-medium text-[20px] lg:text-[20px] leading-none mt-5 text-black items-center" href="mailto:asancemilacar@gmail.com">hasancemilacar@gmail.com</a></p>
            {success && <p className='text-black font-semibold font-syne'>Your Message has been sent. :)</p> }
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
