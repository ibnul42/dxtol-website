import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  })

  const { name, email, password } = inputValue

  const onChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='flex-1 flex gap-0'>
      <Helmet>
        <title>Login</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="bg-[#00042E] py-10 md:py-16 w-full md:w-1/2 flex justify-center md:justify-end px-2 md:px-10">
        <form onSubmit={onSubmit} className="shadow-[15px_15px_60px_rgba(26,35,169,0.2)] w-full max-w-lg h-auto bg-[#00042E] rounded-2xl px-5 py-5 flex flex-col gap-2">
          <img src="/assets/icon/arrowLight.svg" className="h-5 w-5" alt="" />
          <p className="font-secure text-gray font-semibold text-sm md:text-lg py-2">Continue with your email or Phone Number</p>
          <div className="w-full h-[1px] bg-gradient-to-r from-[rgba(27,176,190,0.3)] to-[rgba(41,88,255,0.3)] my-1"></div>
          <div className="flex gap-3 my-2">
            <p className="font-poppins text-gray text-sm lg:text-base">Already have an Account?</p>
            <Link to="/login" className="text-join font-poppins text-xs lg:text-base underline underline-offset-2 decoration-gray flex items-center gap-3"><img src="/assets/icon/user.svg" alt="user" className="w-4 h-4" />Sign In</Link>
          </div>
          <div className="mb-4 my-2">
            <label className="block text-gray text-xs md:text-sm font-poppins mb-2" htmlFor="name">
              Full Name
            </label>
            <div class="pl-[1px] pr-[2px] py-[2px] rounded-md bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]">
              <label for="name" class="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={onChange}
                class="px-3 py-2 md:py-3 w-full rounded-md bg-[#00042E] focus:outline-none" />
            </div>
          </div>
          <div className="mb-4 my-2">
            <label className="block text-gray text-xs md:text-sm font-poppins mb-2" htmlFor="email">
              Email Address/ Phone Number
            </label>
            <div class="pl-[1px] pr-[2px] py-[2px] rounded-md bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]">
              <label for="name" class="sr-only">Name</label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={onChange}
                class="px-3 py-2 md:py-3 w-full rounded-md bg-[#00042E] focus:outline-none" />
            </div>
          </div>
          <div className="mb-4 my-2">
            <div className="flex justify-between">
              <label className="block text-gray text-xs md:text-sm font-poppins mb-2" htmlFor="password">
                Password
              </label>
              <Link to="/login" className="block text-[#FF833E] text-xs md:text-sm font-poppins mb-2" htmlFor="password">
                Forgot Password?
              </Link>
            </div>
            <div class="pl-[1px] pr-[2px] py-[2px] rounded-md bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]">
              <label for="name" class="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={onChange}
                class="px-3 py-2 md:py-3 w-full rounded-md bg-[#00042E] focus:outline-none" />
            </div>
          </div>
          <div className="flex items-center justify-end my-2">
            <button
              className="bg-[#2958FF] hover:bg-hover text-white px-10 py-2 md:py-3 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      <div className="hidden md:w-1/2 bg-[#000328] py-16 px-5 h-auto md:flex flex-col items-center justify-center">
        <img src="/assets/images/world.svg" className="w-full lg:w-9/12 max-h-[600px]" alt="world" />
      </div>

    </div>
  )
}

export default Signup
