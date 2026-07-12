import React from "react";
import { motion } from "framer-motion";

const Hero = () => {


  const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const image = {
  hidden: {
    opacity: 0,
    x: 80,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};


  return (
    <>
      {/* ================= Desktop ================= */}
      <section id="home" className=" relative bg-primary overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
            linear-gradient(#cfd6df 1px, transparent 1px),
            linear-gradient(90deg,#cfd6df 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative responsive-mx py-12">
          {/* <div
            className="
        
          relative grid xl:grid-cols-2 items-start 
          "
          > */}

          <motion.div
  variants={container}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.35 }}
  className="relative grid xl:grid-cols-2 items-start"
>


            {/* Top Left */}
            <div className="absolute md:top-6 top-7 left-0 -ml-4 w-10 h-10">
              <div className="absolute top- left-4 w-4 h-[1px] bg-gray-400"></div>
              <div className="absolute top-0 left-4 w-[1px] h-5 bg-gray-400"></div>
            </div>

            {/* Top Right */}
            <div className="absolute top-6 -right-7 w-10 h-10">
              <div className="absolute top- rigt-4 w-4 h-[1px] bg-gray-400"></div>
              <div className="absolute top-0 left-4 w-[1px] h-5 bg-gray-400"></div>
            </div>

            {/* Bottom Left */}
            <div className="absolute md:bottom-72 bottom-0 left-0 -ml-4 w-10 h-10">
              <div className="absolute bottom-0 left-4 w-[1px] h-5 bg-gray-400"></div>
              <div className="absolute bottom-0 left-4 w-4 h-[1px] bg-gray-400"></div>
            </div>

            {/* Bottom Right */}
            <div className="absolute md:bottom-72 bottom-0 -right-7 w-10 h-10">
              <div className="absolute bottom-0 left-4 w-[1px] h-5 bg-gray-400"></div>
              <div className="absolute bottom-0  w-4 h-[1px] bg-gray-400"></div>
            </div>

            {/* Left */}
            <div className="md:mt-10 mt-16">
              <motion.h1
  variants={item} className="md:text-[82px] text-4xl font-rajdhani-700 uppercase leading-none md:tracking-wide tracking-wider text-[#0d1725]">
                Engineering
          </motion.h1>

             <motion.h1
  variants={item} className="md:text-[82px] text-4xl md:mt-0 mt-1 font-rajdhani-700 uppercase leading-none md:tracking-wide tracking-wider text-[#0d1725]">
                Precision
              </motion.h1>

              <motion.h2
  variants={item} className="md:text-5xl text-2xl md:mt-0 mt-2 uppercase font-rajdhani-300 text-[#5f6b80]   leading-none">
                Through CFD & CAE Simulation
             </motion.h2>

           <motion.p
  variants={item} className="font-mono-italic md:text-sm text-xs mt-4 text-[#5f6b80] max-w-xl">
                Where the smallest computational cell resolves the largest
                physical truth.
           </motion.p>

             <motion.p
  variants={item} className="font-mono-400 md:text-sm text-xs md:leading-6  leading-5 mt-4 text-[#3a4456] max-w-lg">
                We empower automotive, aerospace, and energy industries with
                advanced computational software consultancy — enhancing
                operational efficiency and driving technical innovation
                worldwide.
             </motion.p>

             <motion.button
  variants={item} className="md:mt-9 mt-8 font-mono-400 bg-[#1D3C66] text-xs hover:bg-white hover:text-black hover:border hover:border-[#1D3C66] md:px-8 px-6 py-3 text-white uppercase tracking-[2px]">
                Get Consultation
            </motion.button>
            </div>

            {/* Right */}

            <img
              src="/hero1.png"
              alt=""
              className="
    w-full h-full
    scale-125 -translate-x-10 -translate-y-5
    md:scale-125 md:-translate-y-32 md:-translate-x-10
  "
              style={{
                WebkitMaskImage: `
      linear-gradient(to right, transparent 0%, black 85%),
      linear-gradient(to bottom, transparent 0px, black 176px)
    `,
                WebkitMaskComposite: "source-in",
                maskImage: `
      linear-gradient(to right, transparent 0%, black 85%),
      linear-gradient(to bottom, transparent 0px, black 176px)
    `,
              }}
            />
       </motion.div>
        </div>
      </section>
    </>
  );
};

export default Hero;
