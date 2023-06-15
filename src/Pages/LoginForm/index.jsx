import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"

const LoginForm = () => {

    return (
        <div className='flex-1 flex gap-0'>
            <Helmet>
                <title>Login</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className="bg-[#00042E] py-10 md:py-16 w-full md:w-1/2 flex justify-center md:justify-end px-2 md:px-10">
                <form className="shadow-[15px_15px_60px_rgba(26,35,169,0.2)] w-full max-w-lg h-auto bg-[#00042E] rounded-2xl px-4 md:px-6 lg:px-8 py-6 flex flex-col gap-2">
                    <p className="font-secure text-gray font-semibold text-sm md:text-lg py-2">Sign In to Your Account</p>
                    <div className="w-full h-[1px] bg-gradient-to-r from-[rgba(27,176,190,0.3)] to-[rgba(41,88,255,0.3)] my-1"></div>
                    <div className="flex gap-3 my-2">
                        <p className="font-poppins text-gray text-sm lg:text-base">Don’t Have an Account?</p>
                        <Link to="/register" className="text-join font-poppins text-xs lg:text-base underline underline-offset-2 decoration-gray">Join Here</Link>
                    </div>
                    <div className="py-5 flex flex-col gap-3">
                        <div class="p-[1px] rounded-md bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]">
                            <Link to="/login" className="bg-[#00042E] rounded-md flex gap-3 w-full justify-center items-center py-2 text-gray font-poppins"><img src="/assets/icon/google.svg" className="w-5 h-5" alt="google" />Continue with Google</Link>
                        </div>
                        <div class="p-[1px] rounded-md bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]">
                            <Link to="/login" className="bg-[#00042E] rounded-md flex gap-3 w-full justify-center items-center py-2 text-gray font-poppins"><img src="/assets/icon/google.svg" className="w-5 h-5" alt="google" />Continue with Email</Link>
                        </div>
                        <p className="my-2 text-center">OR</p>
                        <div class="p-[1px] rounded-md bg-gradient-to-r from-[#1BB0BE] to-[#2958FF]">
                            <Link to="/login" className="bg-[#00042E] rounded-md flex gap-3 w-full justify-center items-center py-2 text-gray font-poppins"> <img src="/assets/icon/facebook.svg" className="w-5 h-5" alt="facebook" />Continue with Facebook</Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className="hidden md:w-1/2 bg-[#000328] py-16 px-5 h-auto md:flex flex-col items-center justify-center">
                <img src="/assets/images/world.svg" className="w-full lg:w-9/12 max-h-[600px]" alt="world" />
            </div>

        </div>
    )
}

export default LoginForm
