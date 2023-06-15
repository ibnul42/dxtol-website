import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
  const texts = ['Global Logistics Extraordinaire', 'Home Theater Geek', 'Computer Enthusiast', 'Photographer', 'Creative', 'Creative', 'Tuffer', 'Stylist']

  const onChangeHandler = (e) => {
    console.log(e.target)
  }
  return (
    <div className='flex-1'>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.dylanluper.com" />
      </Helmet>
      <div className="bg-primary font-poppins">
        <div className="max-w-6xl mx-auto px-2 py-5 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
          <div className="flex flex-col gap-2 h-auto justify-center">
            <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Empowering Networks:</p>
            <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>VitalSAT Ubiquiti Networks Innovative Technologies</p>
            <p className='text-gray text-xs my-2'>Helped more than 200+ startups to develop their website lorum ipsump lorum ipsump lorum ipsump lorum ipsump lorum ipsum plorum ipsump</p>
            <button className='px-3 py-1 btngradient text-white w-fit font-secure font-medium rounded'>Talk with Us</button>
          </div>
          <div className="">
            <img src="/assets/images/home1.png" className='w-full' alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="bg-secondary font-poppins">
        <div className="max-w-6xl mx-auto px-2 py-5 bg-secondary grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
          <div className="flex flex-col gap-2 h-auto justify-center">
            <p className='text-yellow font-secure font-semibold leading-7 uppercase'>At our core:</p>
            <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>About us Section About us Section
              Lorem ipsum </p>
            <p className='text-gray text-xs my-2'>Lorem ipsum dolor sit amet consectetur. Purus massa sit nulla non non bibendum. A mauris amet in massa diam id. Sit nec sed pulvinar et mi consectetur feugiat. Congue sit iaculis quis suspendisse turpis mauris integer cras aliquam. Volutpat nunc id sodales interdum risus erat. Augue consectetur diam orci scelerisque. Vitae amet a aliquam sit. Orci.</p>
            <div className="flex gap-3 font-inter">
              <button className='px-3 py-1 bg-[#2958FF] text-white w-fit font-medium rounded'>Learn More</button>
              <button className='px-3 py-1 text-[#2958FF] border border-[#2958FF] w-fit font-medium rounded flex items-center gap-2 '>Video Intro <img src="/assets/icon/video.svg" alt="video" className='w-4 h-4' /></button>
            </div>
          </div>
          <div className="">
            <p className='my-2 text-gradient font-secure font-semibold text-xl'>VitalSAT AT A GLANCE</p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              <div className="card-background flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
                <p className='uppercase text-yellow font-secure font-medium text-lg'>300 years</p>
                <p className='font-poppins text-xs text-center'>Combined partner experience</p>
              </div>
              <div className="card-background flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
                <p className='uppercase text-yellow font-secure font-medium text-lg'>40 years</p>
                <p className='font-poppins text-xs text-center'>Experience as a firm</p>
              </div>
              <div className="card-background flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
                <p className='uppercase text-yellow font-secure font-medium text-lg'>$ 10 BILLION +</p>
                <p className='font-poppins text-xs text-center'>Saved for our clients globally</p>
              </div>
              <div className="card-background flex flex-col px-3 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-10 w-10' alt="handshake" />
                <p className='uppercase text-yellow font-secure font-medium text-lg'>18 - 23%</p>
                <p className='font-poppins text-xs text-center'>Average client savings over the last 25 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary font-poppins">
        <div className="max-w-6xl mx-auto px-2 py-5 md:gap-40">
          <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Our Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className='text-xl md:text-2xl lg:text-3xl text-gradient font-secure font-extrabold'>We Provide the Best Service Ubiquiti Unifi network</p>
            <p className='text-gray text-xs my-2'>Lorem ipsum dolor sit amet consectetur. Purus massa sit nulla non non bibendum. A mauris amet in massa diam id. Sit nec sed pulvinar et mi consectetur feugiat. Congue sit iaculis qu</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 my-5">
            <div className="rounded-lg h-64 flex flex-col gap-4 justify-center bg-gradient-to-r from-[rgba(27,176,190,0.2)] to-[rgba(41,88,255,0.2)] py-2 px-3">
              <p className='text-[#A0BCF8] text-3xl font-medium opacity-25'>01</p>
              <p className='text-gradient font-secure text-xl uppercase font-bold'>Network Installation</p>
              <p className='font-poppins text-gray text-xs'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
              <div className="flex justify-end">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px]">
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
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px]">
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
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px]">
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
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px]">
                  <div className="h-full w-full rounded-full bg-[#232323] flex justify-center items-center -rotate-90">
                    <img src="/assets/icon/arrowDown.svg" alt="arrowDown" className='h-5 w-5' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="max-w-6xl mx-auto px-2 py-5">
          <div className="flex flex-col justify-center items-center">
            <p className='text-yellow font-secure font-semibold leading-7 uppercase text-center'>What we do:</p>
            <div className="max-w-2xl">
              <p className='text-xl text-center md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>We Provide the Best Service Ubiquiti Unifi network</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="flex flex-col justify-center h-auto">
              <img src="/assets/images/network.png" className='w-full' alt="" />
            </div>
            <div className="flex flex-col gap-2 h-auto justify-center">
              <p className='text-[#A0BCF8] text-4xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Network Installation</p>
              <p className='text-gray text-xs my-2'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
              <button className='bg-[#2958FF] px-4 py-2 rounded w-fit'>Contact Us Today</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="flex flex-col gap-2 h-auto justify-center order-2 md:order-1">
              <p className='text-[#A0BCF8] text-4xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Security</p>
              <p className='text-gray text-xs my-2'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
              <button className='bg-[#2958FF] px-4 py-2 rounded w-fit'>Contact Us Today</button>
            </div>
            <div className="flex flex-col justify-center h-auto">
              <img src="/assets/images/network.png" className='w-full' alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="flex flex-col justify-center h-auto">
              <img src="/assets/images/network.png" className='w-full' alt="" />
            </div>
            <div className="flex flex-col gap-2 h-auto justify-center">
              <p className='text-[#A0BCF8] text-4xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Network Installation</p>
              <p className='text-gray text-xs my-2'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
              <button className='bg-[#2958FF] px-4 py-2 rounded w-fit'>Contact Us Today</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            <div className="flex flex-col gap-2 h-auto justify-center order-2 md:order-1">
              <p className='text-[#A0BCF8] text-4xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Security</p>
              <p className='text-gray text-xs my-2'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
              <button className='bg-[#2958FF] px-4 py-2 rounded w-fit'>Contact Us Today</button>
            </div>
            <div className="flex flex-col justify-center h-auto">
              <img src="/assets/images/network.png" className='w-full' alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home