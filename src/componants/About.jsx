import React from "react";

const About = () => {
  return (
    <section id="about" className="relative bg-primary overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
          linear-gradient(#cfd6df 1px, transparent 1px),
          linear-gradient(90deg,#cfd6df 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative responsive-mx py-16 lg:pt-24">
        <div className="grid lg:grid-cols-2 md:gap-16 gap-12 items-start">
          {/* LEFT */}

          <div>
            {/* Small Heading */}

            <div className="flex items-center gap-3 md:mb-8 mb-5">
              <div className="w-6 h-[1px] bg-[#153a68]"></div>

              <span className="uppercase tracking-[4px] text-[11px] font-mono-400 text-[#153a68]">
                About
              </span>
            </div>

            <h2
              className="
              font-rajdhani-700
              uppercase
              leading-none
              text-[#0b1524]
              text-5xl tracking-wide
              md:text-6xl
              lg:text-7xl
            "
            >
              Bridging
              <br />
              Physics &
              <br />
              Reality
            </h2>

            <p
              className="
              md:mt-8 mt-5

              text-gray-700
              leading-6
              max-w-xl
              tracking-wide
              text-sm font-rajdhani-400 
            "
            >
              We bridge the critical gap between complex physical phenomena and
              operational reality. Combining decades of technical expertise in
              CFD and CAE, Epsinity delivers simulation software solutions that
              empower automotive and aerospace leaders to achieve peak technical
              efficiency and innovation.
            </p>
          </div>

          {/* RIGHT (Desktop Only) */}

          <div className="">
            <div className="md:border md:border-gray-300 md:bg-[#eef2f7] md:p-8">
              {/* Founder Card */}

              <div className="bg-white border border-gray-300 p-4 rounded">
                <h3 className="text-2xl tracking-wide font-rajdhani-700 text-[#0b1524]">
                  Venkata Ramana Eaga
                </h3>

                <p className="uppercase tracking-wide text-[11px] font-mono-400  text-gray-500">
                  Co-Founder & Managing Director
                </p>
              </div>

              <div className="mt-6 space-y-3 text-gray-700   leading-6 font-rajdhani-400 text-sm">
                <p>
                  Has two decades of deep expertise in Computational Fluid
                  Dynamics (CFD) and engineering simulation. M.Tech in Fluids &
                  Thermal Engineering from IIT-Guwahati, Venkat built his career
                  solving some of the most complex fluid dynamics challenges
                  across industries.
                </p>

                <p>
                  Before co-founding Epsinity, Venkat worked for ESI Group
                  (Keysight) where he spent over 17 years developing advanced
                  CFD workflows and collaborating with global engineering teams.
                </p>

                <p>
                  At Epsinity, Venkat combines simulation expertise, automation,
                  and AI-driven engineering to build smarter CFD/CAE solutions
                  for modern industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
