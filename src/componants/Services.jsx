import React from "react";

const basicTraining = [
  "Installation on Ubuntu / Windows",
  "Directory Structure",
  "Basic 2D Meshing",
  "Running a Simple Case",
  "3D Meshing",
  "Multi-Domain Meshing",
  "Running a 3D Model",
  "Post-processing in Paraview",
];

const applicationBased = [
  "External Aerodynamics",
  "Climate Control - Automotive",
  "Under-hood Thermal Simulations",
  "Aero-Acoustics",
];

const Services = () => {
  return (
    <section  id="services" className="bg-primary">

      <div className="md:max-w-[1600px] md:mx-auto">

        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT IMAGE (Desktop Only) */}

          <div className=" relative md:h-[760px] overflow-hidden">

            <img
              src="/service-3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Fade Effect */}

            <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-[#eef2f7] to-transparent"></div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="px-3 md:px-12 lg:px-16 py-10 md:py-14 flex flex-col justify-center">

            <h2 className="uppercase font-rajdhani-700 text-[#0b1524]
            text-[42px]
            md:text-[60px]
            leading-none">

              OpenFOAM Training

            </h2>

            <p className="mt-2 max-w-md tracking-wide font-rajdhani-400 text-gray-500 leading-5 text-sm">
              Accelerate your CFD mastery with hands-on OpenFOAM training from
              industry specialists.
            </p>

            {/* BASIC */}

            <div className="mt-8">

              <h3 className="uppercase font-rajdhani-700 tracking-[5px] text-sm text-[#0b1524]">
                Basic Training
              </h3>

              <div className="flex flex-wrap gap-3 mt-4">

                {basicTraining.map((item) => (
                  <span
                    key={item}
                    className="border border-gray-300 px-3 rounded-md py-2 text-xs tracking-wide hover:bg-[#173d6c] hover:text-white duration-300 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            {/* APPLICATION */}

            <div className="mt-8">

              <h3 className="uppercase font-rajdhani-700 tracking-[5px] text-sm text-[#0b1524]">
                Application Based
              </h3>

              <div className="flex flex-wrap gap-3 mt-6">

                {applicationBased.map((item) => (
                  <span
                    key={item}
                    className="border border-gray-300 px-3 rounded-md py-2 text-xs tracking-wide hover:bg-[#173d6c] hover:text-white duration-300 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            <div className=" mt-9">

              <button className="bg-[#173d6c] hover:bg-white hover:text-black hover:border hover:border-gray-700 text-white uppercase text-xs tracking-[4px] px-8 py-3 rounded-sm duration-300">

                View Course

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;