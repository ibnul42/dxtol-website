import React, { useState } from "react"
import { NavLink } from "react-router-dom"

function Header({ open, setOpen }) {
  // const [activeId, setActiveId] = useState('/')
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#dba124" : "",
      // borderBottom: isActive ? "3px solid #6366f1" : null,
    }
  }
  const links = [
    { name: "Network Installation", link: "/network", child:true },
    { name: "Security", link: "/security" },
    { name: "Broadband", link: "/broadband" },
    { name: "Blog", link: "/blog" },
    { name: "Store", link: "/store", child:true },
    { name: "Courses", link: "/courses", child:true },
  ]
  return (
    <div className="">
      <div className="bg-header">
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 py-1">
          <div className="flex gap-2 text-xs">
            <div className="flex gap-2 items-center">
              <img src="/assets/icon/clock.svg" className="w-4 h-4" alt="" />
              <div className="w-[1px] h-7 bg-[#3A3B3A]"></div>
              <div className="flex flex-col gap-0">
                <p className="text-[#F3F3F3]">Open Hours</p>
                <p className="text-[#F5CD76]">Mon-Fri : 9:00-17:00</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <img src="/assets/icon/phone.svg" className="w-4 h-4" alt="" />
              <div className="w-[1px] h-7 bg-[#3A3B3A]"></div>
              <div className="flex flex-col gap-0">
                <p className="text-[#F3F3F3]">Call Us</p>
                <p className="text-[#F5CD76]">+91 1672 654-545</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-2 text-[#FDD10E] text-sm my-2 md:my-0">
            <button>Sign Up</button>
            <button className="px-3 py-1 border border-[#FDD10E] rounded">Login</button>
          </div>
        </div>
      </div>
      <div className="bg-navbar">
        <div className="z-40 bg-primary text-white">
          <div className="max-w-6xl mx-auto px-3 lg:px-0 flex justify-between py-2">
            <div className="flex items-center cursor-pointer">
              <NavLink to="/" className="text-xl font-bold">
                <img src="/assets/logo.png" className="w-10 h-10" alt="Logo" />
              </NavLink>
            </div>
            <div
              className={`h-12 w-12 absolute top-3 right-5  flex-col justify-between items-center rounded cursor-pointer hidden border ${open ? "p-2" : "p-3"
              // className={`h-12 w-12 absolute top-3 right-5 flex flex-col justify-between items-center rounded cursor-pointer md:hidden border ${open ? "p-2" : "p-3"
                } z-50`}
              onClick={() => setOpen(!open)}
            >
              <div
                className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "rotate-45 mt-4 block" : ""
                  }`}
              ></div>
              <div
                className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "hidden mb-5" : ""
                  }`}
              ></div>
              <div
                className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "-rotate-45 mb-3 inline-block" : ""
                  }`}
              ></div>
            </div>
            <ul
              className={`flex flex-col gap-3 md:flex-row items-start md:items-center pt-10 md:pt-0 justify-start md:justify-center absolute left-0 md:static w-3/4 h-screen md:h-auto md:w-auto transition-all duration-500 ease-in ${open
                ? "opacity-100 top-[65px] bg-primary lg:bg-transparent h-[calc(100vh-65px)]"
                : "opacity-0 md:opacity-100 top-[65px] left-[-500px]"
                } z-50 font-roboto`}
            >
              {links.map((item, index) => (
                <div key={index}>
                  <NavLink
                    to={item.link}
                    className={`px-2 text-md font-normal py-3 md:my-0 cursor-pointer flex gap-2 items-center`}
                    // style={navLinkStyles}
                    onClick={() => setOpen(!open)}
                  >
                    {item.name} {item.child && <img src="/assets/icon/arrowDown.svg" className="h-4 w-4" />}
                  </NavLink>
                </div>
              ))}
              <a href="tel:8895959595" className="flex rounded overflow-hidden cursor-pointer">
                <p className="bg-[#2958FF] px-3 py-2">Call Me</p>
                <p className="bg-[#FDD10E] flex items-center px-2"><img src="/assets/icon/Calling.svg" className="h-4 w-4" alt="calling" /></p>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header