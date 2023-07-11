import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-footer py-8 font-inter">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent">
          <img src="/assets/logo.png" className="h-14 w-14" alt="" />
          <p className="my-2">VSATUi is a trading name of VitalSAT Communication Solutions part of the Digital Empire Group.</p>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <p className="font-secure font-bold text-lg from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent my-1">Contact Information</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2"><img src="/assets/icon/location_on.svg" className="h-4 w-4" alt="" />Head Office: VitalSAT, Watertight House, 22-24 Napier Road, South Croydon, Surrey, CR2 6HG</p>
          {/* <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2"><img src="/assets/icon/message.svg" className="h-4 w-4" alt="" />outline@address.com</p> */}
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2"><img src="/assets/icon/call.svg" className="h-4 w-4" alt="" /><a href="tel:+08081643636">0808 164 3636</a></p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="font-secure font-bold text-lg from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent my-1">Services</p>
          <Link to="/network-installation" className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Network Installation</Link>
          <Link to="/security-network" className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Security</Link>
          <Link to="/broadband-network" className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Broadband</Link>
          <Link to="/eot-network" className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">EoT</Link>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="font-secure font-bold text-lg from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent my-1">Sitemap</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Terms & Conditions</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Menu Item</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Menu Item</p>
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-2">
          <p className="font-secure font-bold text-lg from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent my-1">Join a Newsletter</p>
          <div className="flex rounded overflow-hidden">
            <input type="text" className="min-w-0 px-2 py-3 placeholder:text-xs focus:text-black focus:text-xs focus:outline-0" placeholder="Input your email here" />
            <div className="flex justify-center items-center h-auto w-10 bg-[#FDD10E] cursor-pointer">
              <img src="/assets/icon/send.svg" className="w-4 h-4 pl-1" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer