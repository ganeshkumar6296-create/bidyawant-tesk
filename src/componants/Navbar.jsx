import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    name: "HOME",
    href: "#home",
  },
  {
    name: "PORTFOLIO",
    href: "#portfolio",
  },
  {
    name: "SERVICES",
    href: "#services",
  },
  {
    name: "ABOUT",
    href: "#about",
  },
  {
    name: "CONTACT",
    href: "#contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 font-mono-400 border-b transition-all duration-300 ${
          scrolled
            ? "bg-[#EEF1F5] border-gray-300 "
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="responsive-mx">
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}

            <a href="#home">
              <img src="/logo.svg" className="md:w-20 w-16" alt="" />
            </a>

            {/* Desktop */}

            <nav className="hidden md:flex items-center gap-5">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative uppercase tracking-[5px] text-[13px] text-[#5F6775] group"
                >
                  {item.name}

                  <span
                    className="
                    absolute
                    left-0
                    -bottom-1
                    h-[1px]
                    w-0
                    bg-black
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                  />
                </a>
              ))}
            </nav>

            {/* Mobile */}

            <button onClick={() => setOpen(true)} className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}

      {/* <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] transition-opacity duration-500
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      /> */}

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 transition-opacity duration-500
  ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      {/* Drawer */}

      <div
        className={`fixed top-16 left-0 w-full bg-[#F1F4F9] pb-12 z-40 border-t border-gray-300
  transition-all duration-500 ease-in-out origin-top
  ${
    open
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-5 invisible"
  }`}
      >
        <nav className="flex flex-col mt-4">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={` py-4 border-b border-gray-300 mx-4 uppercase text-xs tracking-[3px]
        transition-all duration-500
        ${open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"}`}
              style={{
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
