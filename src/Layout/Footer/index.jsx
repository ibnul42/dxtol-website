import React from "react"

const Footer = () => {
  return (
    <div className="bg-footer py-8 font-inter">
      <div className="max-w-6xl mx-auto px-2 grid grid-cols-12 gap-3">
        <div className="col-span-12 md:col-span-4 lg:col-span-3 from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent">
          <img src="/assets/logo.png" className="h-10 w-10" alt="" />
          <p className="my-2">Lorem ipsum dolor sit amet consectetur. Tincidunt egestas condimentum at egestas vel dis sed sagittis. Fusce sagittis malesuada.</p>
        </div>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <p className="font-secure font-bold text-lg from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent my-1">Location</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2"><img src="/assets/icon/location_on.svg" className="h-4 w-4" alt="" />8819 Street Road. Scotland</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2"><img src="/assets/icon/message.svg" className="h-4 w-4" alt="" />outline@address.com</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2"><img src="/assets/icon/call.svg" className="h-4 w-4" alt="" />+1 30000 00000</p>
        </div>
        <div className="col-span-6 md:col-span-2">
          <p className="font-secure font-bold text-lg from-[#EAEAEA] to-[#FFFFFF] bg-gradient-to-r bg-clip-text text-transparent my-1">Services</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Network Installation</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Security</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">Broadband</p>
          <p className="flex gap-3 text-sm items-center text-[rgba(234,234,234,0.6)] py-2">EoT</p>
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
            <input type="text" className="min-w-0 px-2 py-2 placeholder:text-xs" placeholder="Input your email here" />
            <div className="flex justify-center items-center h-auto w-8 bg-[#FDD10E] cursor-pointer">
              <img src="/assets/icon/send.svg" className="w-4 h-4" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer