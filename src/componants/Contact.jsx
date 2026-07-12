import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-primary overflow-hidden">
  

      <div className="relative responsive-mx py-14 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-[1px] bg-[#173d6c]" />
              <span className="uppercase font-rajdhani-600 tracking-[4px] text-[11px] text-[#1d3c66]">
                Contact
              </span>
            </div>

            <h2
              className="uppercase font-rajdhani-700 leading-none text-[#111827]
            text-5xl md:text-6xl lg:text-7xl"
            >
              Explain Your
              <br />
              Problem
            </h2>

            <p className="mt-3 max-w-md leading-6 text-xs tracking-wide text-gray-700 font-mono-400">
              Reach out to discuss your technical simulation requirements. Our
              consulting team is ready to assist with custom CFD and CAE
              inquiries and training sessions.
            </p>

            <div className="mt-9">
              <h4 className="uppercase tracking-[4px] text-[9px] text-gray-500">
                Technical Hub
              </h4>

              <p className="text-xl mt-2 text-[#111827]">epsinity@gmail.com</p>
            </div>

            <div className="mt-9">
              <h4 className="uppercase tracking-[4px] text-[9px] text-gray-500">
                Consultation Availability
              </h4>

              <p className="mt-2 text-xs tracking-wide leading-5 font-mono-500 text-gray-700">
                Global Operations
                <br />
                Monday - Friday
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="bg-white border border-gray-200 p-6 md:p-8  rounded-md">
            <form className="space-y-8">
              {/* Name */}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="uppercase tracking-[3px]  md:text-[10px] text-[9px] text-gray-500">
                    First Name *
                  </label>

                  <input
                    type="text"
                    className="w-full border-b border-gray-300 bg-transparent  outline-none"
                  />
                </div>

                <div>
                  <label className="uppercase tracking-[3px]  md:text-[10px] text-[9px] text-gray-500">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    className="w-full border-b border-gray-300 bg-transparent  outline-none"
                  />
                </div>
              </div>

              {/* Email */}

              <div>
                <label className="uppercase tracking-[3px]  md:text-[10px] text-[9px] text-gray-500">
                  Business Email *
                </label>

                <input
                  type="email"
                  className="w-full border-b border-gray-300 bg-transparent outline-none"
                />
              </div>

              {/* Mobile */}

              <div>
                <label className="uppercase tracking-[3px]  md:text-[10px] text-[9px] text-gray-500">
                  Mobile Number
                </label>

                <input
                  type="tel"
                  placeholder="+1 000 000 0000"
                  className="w-full border-b border-gray-300 bg-transparent placeholder:text-xs py-2 outline-none"
                />
              </div>

              {/* Select */}

              <div>
                <label className="uppercase tracking-[3px]  md:text-[10px] text-[9px] text-gray-500">
                  Consultation Type *
                </label>

                <select className="w-full border-b border-gray-300 bg-transparent py-2.5 outline-none">
                  <option className="text-xs" hidden>Select...</option>
                  <option>CFD Consulting</option>
                  <option>Training</option>
                  <option>CAE Simulation</option>
                </select>
              </div>

              {/* Description */}

              <div>
                <label className="uppercase tracking-[3px]  md:text-[10px] text-[9px] text-gray-500">
                  Project Description
                </label>

                <textarea
                  rows="3"
                  placeholder="Tell us about your engineering requirements..."
                  className="w-full border-b border-gray-300 bg-transparent py-2 text-xs font-mono-400 outline-none resize-none"
                />
              </div>

              {/* Button */}

              <button
                type="submit"
                className="w-full border border-[#173d6c] py-3.5 uppercase tracking-[3px]
                text-[#173d6c] hover:bg-[#173d6c] hover:text-white text-xs duration-300"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Contact;
