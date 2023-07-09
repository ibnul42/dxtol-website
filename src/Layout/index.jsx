import React, { useEffect, useState } from "react"
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About"
import Footer from "./Footer"
import Header from "./Header"
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import LoginForm from "../Pages/LoginForm";
import Policy from "../Pages/Policy";
import NetworkInstallation from "../Pages/NetworkInstallation";
import SecurityNetwork from "../Pages/SecurityNetwork";
import BroadbandNetwork from "../Pages/BroadbandNetwork";
import EotNetwork from "../Pages/EotNetwork";
import HotelDeveloper from "../Pages/HotelDeveloper";

const adminLinks = [
  { titile: "Profile", path: "/admin/profile" },
  { titile: "Photography", path: "/admin/photography" }
]

const Layout = () => {
  const [adminPanel, setAdminPanel] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user && location.pathname.toString().includes("/admin")) {
      setAdminPanel(true)
    }
    if (!location.pathname.toString().includes("/admin")) {
      setAdminPanel(false)
    }
  }, [location, user, dispatch, navigate, location])

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <div
      className={`${open ? "h-screen overflow-y-hidden md:min-h-screen md:overflow-y-visible" : "min-h-screen"} overflow-x-hidden flex flex-col justify-between text-white bg-black`}
    >
      <div className={`${adminPanel ? 'col-span-12' : ''}`}>
        <Header open={open} setOpen={setOpen} />
      </div>

      <div className={`${adminPanel ? "w-screen grid grid-cols-12" : ""} flex-grow`}>
        {adminPanel && (
          <div className="col-span-2 border-r flex flex-col justify-between">
            <div className="flex flex-col">
              {adminLinks &&
                adminLinks.map((item, index) => (
                  <Link
                    key={index}
                    className="bg-primary hover:bg-hover py-3 text-white px-3 font-medium"
                    to={item.path}
                  >
                    {item.titile}
                  </Link>
                ))}
            </div>
            <Link
              className="bg-primary py-3 px-3 font-medium hover:bg-hover text-white"
              to={"/login"}
              onClick={onLogout}
              state={{ logout: true }}
            >
              Logout
            </Link>
          </div>
        )}
        <div className={`${adminPanel ? "col-span-10 bg-white text-black" : ""}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/network-installation" element={<NetworkInstallation />} />
            <Route path="/security-network" element={<SecurityNetwork />} />
            <Route path="/broadband-network" element={<BroadbandNetwork />} />
            <Route path="/eot-network" element={<EotNetwork />} />
            <Route path="/hotel-developer" element={<HotelDeveloper />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>

      <div className={`${adminPanel ? 'col-span-12' : ''}`}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout