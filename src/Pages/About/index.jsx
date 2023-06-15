import React from 'react'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div className='flex-1'>
      <Helmet>
        <title>About Us</title>
        <link rel="canonical" href="https://www.dylanluper.com/about" />
      </Helmet>
      <div className="bg-[#00042E]">
        <div className="max-w-6xl mx-auto px-2">
          <div className="flex flex-col gap-2 h-auto justify-center items-center text-center py-5">
            <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Empowering Networks:</p>
            <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure md:max-w-lg lg:max-w-3xl font-extrabold'>We are the Unifi title goes here with good sales focus content</p>
            <p className='text-gray text-xs my-2'>Helped more than 200+ startups to develop their website lorum ipsump lorum ipsump lorum ipsump lorum ipsump lorum ipsum plorum ipsump</p>
            <button className='px-3 py-1 btngradient text-white w-fit font-secure font-medium rounded'>Talk with Us</button>
          </div>
          <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="flex flex-col gap-3 shadow-[15px_15px_60px_rgba(26,35,169,0.2)] bg-[#010433] rounded-xl w-full md:max-w-xs px-3 py-2">
              <p className='font-secure text-gradient text-xl font-bold'>Who We Are</p>
              <p className='text-[rgba(234,234,234,0.75)] text-xs font-poppins'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat suet.</p>
            </div>
            <div className="flex flex-col gap-3 shadow-[-15px_15px_60px_rgba(26,35,169,0.2)] bg-[#010433] rounded-xl w-full md:max-w-xs px-3 py-2">
              <p className='font-secure text-gradient text-xl font-bold'>Who We Are</p>
              <p className='text-[rgba(234,234,234,0.75)] text-xs font-poppins'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat suet.</p>
            </div>
          </div>
          <div className="w-full md:-mt-24 lg:-mt-32">
            <img src="/assets/images/about1.svg" alt="about" className='w-full' />
          </div>
        </div>
      </div>
      <div className="bg-[#000328]">
        <div className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-2 gap-5">
          <div className="col-span-2 md:col-span-1 columns-2 gap-2 justify-end">
            <img src="/assets/images/about2.png" className='w-1/2 my-2' alt="about" />
            <img src="/assets/images/about3.png" className='w-full my-2' alt="about" />
            <img src="/assets/images/about4.png" className='w-full my-2' alt="about" />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col gap-3">
            <img src="/assets/icon/about-circle.svg" className='w-20 h-20' alt="circle" />
            <p className='px-2 md:px-5 font-secure text-gradient text-xl font-bold'>Who We Are</p>
            <p className='px-2 md:px-5 text-[rgba(234,234,234,0.75)] text-xs font-poppins'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className='px-2 md:px-5 text-[rgba(234,234,234,0.75)] text-xs font-poppins'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      <div className="bg-[#00042E]">
        <div className="max-w-6xl mx-auto px-2 py-10 flex flex-col items-center">
          <img src="/assets/icon/about-circle.svg" className='w-20 h-20' alt="circle" />
          <p className='px-2 md:px-5 font-secure text-gradient text-xl font-bold'>VitalSAT</p>
          <p className='px-2 md:px-5 text-[rgba(234,234,234,0.75)] text-xs font-poppins my-3 max-w-3xl text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-4">
            <div className="card-about flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
              <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
              <p className='uppercase text-yellow font-secure font-medium text-lg'>300 years</p>
              <p className='font-poppins text-xs text-center'>Combined partner experience</p>
            </div>
            <div className="card-about flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
              <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
              <p className='uppercase text-yellow font-secure font-medium text-lg'>40 years</p>
              <p className='font-poppins text-xs text-center'>Experience as a firm</p>
            </div>
            <div className="card-about flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
              <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
              <p className='uppercase text-yellow font-secure font-medium text-lg'>$ 10 BILLION +</p>
              <p className='font-poppins text-xs text-center'>Saved for our clients globally</p>
            </div>
            <div className="card-about flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
              <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
              <p className='uppercase text-yellow font-secure font-medium text-lg'>18 - 23%</p>
              <p className='font-poppins text-xs text-center'>Average client savings over the last 25 years</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000328]">
        <div className="max-w-6xl mx-auto px-2 py-10">
          <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Our Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <p className='text-xl md:text-2xl lg:text-3xl text-gradient font-secure font-extrabold'>We Provide the Best Service Ubiquiti Unifi network</p>
            <p className='text-gray text-xs my-2 font-poppins md:px-2 lg:px-4'>Lorem ipsum dolor sit amet consectetur. Purus massa sit nulla non non bibendum. A mauris amet in massa diam id. Sit nec sed pulvinar et mi consectetur feugiat. Congue sit iaculis qu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 my-5">
            <div className="rounded-lg h-64 flex flex-col gap-4 justify-center bg-gradient-to-r from-[rgba(27,176,190,0.2)] to-[rgba(41,88,255,0.2)] py-2 px-3">
              <p className='text-[#A0BCF8] text-3xl font-medium opacity-25'>01</p>
              <p className='text-gradient font-secure text-xl uppercase font-bold'>Network Installation</p>
              <p className='font-poppins text-gray text-xs'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
              <div className="flex justify-end">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px] cursor-pointer">
                  <div className="h-full w-full rounded-full bg-[#232323] flex justify-center items-center -rotate-90">
                    <img src="/assets/icon/arrowDown.svg" alt="arrowDown" className='h-5 w-5' />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg h-64 flex flex-col gap-4 justify-center bg-[#FDD10E] py-2 px-3">
              <p className='text-[#A0BCF8] text-3xl font-medium opacity-25'>01</p>
              <p className='text-gradient font-secure text-xl uppercase font-bold'>Security</p>
              <p className='font-poppins text-gray text-xs'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
              <div className="flex justify-end">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px] cursor-pointer">
                  <div className="h-full w-full rounded-full bg-[#232323] flex justify-center items-center -rotate-90">
                    <img src="/assets/icon/arrowDown.svg" alt="arrowDown" className='h-5 w-5' />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg h-64 flex flex-col gap-4 justify-center bg-gradient-to-r from-[rgba(27,176,190,0.2)] to-[rgba(41,88,255,0.2)] py-2 px-3">
              <p className='text-[#A0BCF8] text-3xl font-medium opacity-25'>01</p>
              <p className='text-gradient font-secure text-xl uppercase font-bold'>Hotels & Developers</p>
              <p className='font-poppins text-gray text-xs'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
              <div className="flex justify-end">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px] cursor-pointer">
                  <div className="h-full w-full rounded-full bg-[#232323] flex justify-center items-center -rotate-90">
                    <img src="/assets/icon/arrowDown.svg" alt="arrowDown" className='h-5 w-5' />
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg h-64 flex flex-col gap-4 justify-center bg-gradient-to-r from-[rgba(27,176,190,0.2)] to-[rgba(41,88,255,0.2)] py-2 px-3">
              <p className='text-[#A0BCF8] text-3xl font-medium opacity-25'>01</p>
              <p className='text-gradient font-secure text-xl uppercase font-bold'>Eot</p>
              <p className='font-poppins text-gray text-xs'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
              <div className="flex justify-end">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px] cursor-pointer">
                  <div className="h-full w-full rounded-full bg-[#232323] flex justify-center items-center -rotate-90">
                    <img src="/assets/icon/arrowDown.svg" alt="arrowDown" className='h-5 w-5' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="contact-form">
        <div className="max-w-6xl mx-auto px-2 py-10">
          <div className=""></div>
        </div>
      </div> */}
    </div>
  )
}

export default About