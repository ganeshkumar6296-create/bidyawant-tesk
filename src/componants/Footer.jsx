// import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="bg-primary border-t border-gray-300">
        <div className="responsive-mx md:pt-6 pt-8 md:pb-20 pb-14">
          {/* Desktop */}
          <div className="flex md:items-center items-start md:gap-0 gap-4 md:flex-row flex-col justify-between">
            <p className="uppercase tracking-[3px] md:block hidden text-[8px] text-[#2c4b74]">
              Automotive | Aerospace | Energy
            </p>

            <p className="text-[9px] tracking-[2px] text-gray-600 ">
              Copyright 2026 EPSINITY — Simulation at the precision of physics.
            </p>

            <img src="/logo1.svg" alt="logo" className="h-6 opacity-30" />
          </div>

     
        </div>
      </div>
    </div>
  )
}

export default Footer
