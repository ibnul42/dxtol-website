import React from 'react'

const ContactForm = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[url('/assets/images/contact_form.png')] bg-cover bg-center py-10">
        {/* <img src="/assets/images/testimonial.png" className='absolute left-0 top-0 h-auto w-full' alt="testimonial" /> */}
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-1 md:grid-cols-2 my-6">
          <p className='flex flex-col font-poppins font-bold text-xl md:text-4xl text-gradient text-center md:text-start'><span>What Are People Saying</span> <span>About Us</span></p>
          <div className="hidden md:flex justify-end gap-8 h-full items-center">
            <button><img src="/assets/icon/navRight.svg" className='w-5 h-5 rotate-180' alt="" nav /></button>
            <button><img src="/assets/icon/navRight.svg" className='w-5 h-5' alt="nav" /></button>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-12 gap-3">
          <div className="col-span-12 lg:col-span-6 testimonial-gradient p-3 md:p-2 rounded flex flex-col md:flex-row gap-3 border-gradient">
            <div className="bg-[#90ACF7] rounded h-60 md:h-auto w-full md:w-2/5"></div>
            <div className="flex-1 flex flex-col gap-3">
              <div class="flex gap-3 my-2">
                <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
                <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
                <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
                <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
                <img src="/assets/icon/starHalf.svg" className='h-5 w-5' alt="star" />
              </div>
              <p className='font-secure text-xl font-bold'>Lorem ipsum</p>
              <p className='font-roboto text-gray text-base'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user.  product that I have to have a quality for use by the user.  product that I have to have a quality for use by the user</p>
              <div className="flex gap-3 items-center">
                <div className="w-10 h-10 rounded-full bg-[#90ACF7]"></div>
                <div className="h-auto flex flex-col">
                  <p className='text-gradient font-extrabold'>Mang Oleh</p>
                  <p className='font-roboto text-gray'>Product Designer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 p-2 border-gradient h-auto shadow-[-2px_2px_60px_rgba(41,88,255,0.05)] flex flex-col gap-3 px-5 py-3 justify-between">
            <p className='font-secure text-xl font-extralight my-2'>Great Design!</p>
            <p className='flex-1 font-roboto text-base text-gray'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
            <div class="flex gap-3 justify-center my-2">
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/starHalf.svg" className='h-5 w-5' alt="star" />
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-[#90ACF7]"></div>
              <div className="h-auto flex flex-col">
                <p className='text-gradient font-extrabold'>Mang Oleh</p>
                <p className='font-roboto text-gray'>Product Designer</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-3 p-2 border-gradient h-auto shadow-[-2px_2px_60px_rgba(41,88,255,0.05)] flex flex-col gap-3 px-5 py-3 justify-between">
            <p className='font-secure text-xl font-extralight my-2'>Great Design!</p>
            <p className='flex-1 font-roboto text-base text-gray'>I am very helped in making a website and business development that makes the product that I have to have a quality for use by the user</p>
            <div class="flex gap-3 justify-center my-2">
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/star.svg" className='h-5 w-5' alt="star" />
              <img src="/assets/icon/starHalf.svg" className='h-5 w-5' alt="star" />
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-full bg-[#90ACF7]"></div>
              <div className="h-auto flex flex-col">
                <p className='text-gradient font-extrabold'>Mang Oleh</p>
                <p className='font-roboto text-gray'>Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactForm