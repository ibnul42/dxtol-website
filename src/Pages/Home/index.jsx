import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Network Installations',
    desc: 'We provide profession and bespoke managed network installations from network switches to rack mounted fire suppression systems. We can design, build and install any size network & take care of all the network securities for you. We are able to support and service any network and offer remote support and maintenance contracts for any size of network.'
  },
  {
    title: 'Building Security Systems',
    desc: 'We provide, installation, servicing & support Unifi’s Protect CCTV systems & Unifi Access door entry systems, fully integrating these into your Unifi network if required. Everything can be managed by one device enabling you and us to efficiently manage and support your businesses security and ensuring your building is as secure and staff are safe at all times.'
  },
  {
    title: 'Alarm Systems',
    desc: 'We also specialise in intruder alarm systems and are able to fully secure your premises with motion & door sensors, brake glass sensors, inferred curtains, leak detection, panic alarms and many other alarm security products. All connected to a main hub wirelessly.'
  },
  {
    title: 'Hotels & Developments',
    desc: 'We provide bespoke installation for hotels, campsites & leisure centres. We build your WiFi and ethernet network and securities round your business’s requirements. We are also able to provide broadband infrastructure and wireless networks for new developments houses or flats.'
  }
]

const Home = () => {
  const texts = ['Global Logistics Extraordinaire', 'Home Theater Geek', 'Computer Enthusiast', 'Photographer', 'Creative', 'Creative', 'Tuffer', 'Stylist']

  const onChangeHandler = (e) => {
    console.log(e.target)
  }
  return (
    <div className='flex-1'>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="bg-primary font-poppins">
        <div className="max-w-6xl mx-auto px-2 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="flex flex-col gap-2 h-auto justify-center">
            {/* <p className='text-yellow font-secure font-bold text-xl uppercase'>Empowering Networks:</p> */}
            <p className='text-xl md:text-2xl lg:text-5xl text-gradient font-secure font-extrabold'>VitalSAT Ubiquiti-Networks (VSATUi) Ubiquiti Unifi & Edge Specialist</p>
            <p className='text-gray text-lg my-2'>Providing professional & qualified installations, servicing, maintenance & advice for all your Unifi network, Protect, Access, Talk, Connect & UID services, as well as Edge Networks and Ajax Alarm Systems.</p>
            <Link to="/" className='px-6 py-3 btngradient text-white w-fit font-secure font-extrabold rounded'>Contact Us</Link>
          </div>
          <div className="">
            <img src="/assets/images/home1.png" className='w-full max-w-[687px] max-h-[542px]' alt="home" />
          </div>
        </div>
      </div>
      <div className="bg-secondary font-poppins">
        <div className="max-w-6xl mx-auto px-2 py-8 bg-secondary grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
          <div className="flex flex-col gap-2 h-auto justify-center">
            <p className='text-yellow font-secure font-semibold text-base uppercase'>Who Are We?</p>
            <p className='text-xl md:text-2xl lg:text-3xl text-gradient font-secure font-extrabold'>We are not just specialists, we are perfectionists!</p>
            <p className='text-gray text-base my-2'>VSATUi is part of the Digital Empire Group and is a sub-section of VitalSAT communication Solutions. This part of the business was formed in 2021 to promote and support Ubiquiti products specifically, along with Ajax Security Alarm Systems. Our services are supplied across the UK primarily to businesses but we do also support consumer customers. We are one of the leading Ubiquiti specialists in the UK and can provide an all-in-one service from design to installation, monitoring, support and everything else in-between.</p>
            <div className="flex gap-3 font-inter">
              {/* <button className='px-6 py-3 font-inter bg-[rgba(41,88,255,.99)] hover:bg-[rgba(41,88,255,0.6)] transition delay-75 text-white w-fit font-normal rounded'>Learn More</button> */}
              <button class="px-6 py-3 font-inter text-[#2958FF] border border-[#2958FF] hover:bg-[#2958FF] hover:text-white w-fit font-normal rounded flex items-center gap-2">
                Video Intro
                <img src="/assets/icon/video.svg" alt="video" class="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          <div className="">
            <p className='my-4 text-gradient font-secure font-bold text-3xl'>We Provide & Support</p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
              <div className="card-background flex flex-col px-3 py-6 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-14 w-14' alt="handshake" />
                <p className='uppercase text-[#FDD10E] font-secure font-semibold text-2xl'>300 years</p>
                <p className='font-poppins text-xs text-center'>Combined partner experience</p>
              </div>
              <div className="card-background flex flex-col px-3 py-6 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-14 w-14' alt="handshake" />
                <p className='uppercase text-[#FDD10E] font-secure font-semibold text-2xl'>40 years</p>
                <p className='font-poppins text-xs text-center'>Experience as a firm</p>
              </div>
              <div className="card-background flex flex-col px-3 py-6 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-14 w-14' alt="handshake" />
                <p className='uppercase text-[#FDD10E] font-secure font-semibold text-2xl'>$ 10 BILLION +</p>
                <p className='font-poppins text-xs text-center'>Saved for our clients globally</p>
              </div>
              <div className="card-background flex flex-col px-3 py-6 h-40 text-[rgba(253,209,14,0.5)] justify-center items-center gap-2">
                <img src="/assets/icon/handshake.svg" className='h-14 w-14' alt="handshake" />
                <p className='uppercase text-[#FDD10E] font-secure font-semibold text-2xl'>18 - 23%</p>
                <p className='font-poppins text-xs text-center'>Average client savings over the last 25 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary font-poppins">
        <div className="max-w-6xl mx-auto px-2 py-8 md:gap-40">
          <p className='text-yellow font-secure font-semibold text-base uppercase'>Our Services</p>
          <div className="grid grid-cols-12 gap-3">
            <p className='col-span-12 my-3 text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-bold flex flex-col'>Here are some services you may be interested in</p>
            {/* <p className='col-span-12 md:col-span-5 text-gray text-base my-2'>Lorem ipsum dolor sit amet consectetur. Purus massa sit nulla non non bibendum. A mauris amet in massa diam id. Sit nec sed pulvinar et mi consectetur feugiat. Congue</p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 my-5">
            {services && services.map((item, index) => (
              <div key={index} className={`rounded-lg flex flex-col gap-4 justify-between bg-gradient-to-r from-[rgba(27,176,190,0.2)] to-[rgba(41,88,255,0.2)] py-2 px-3 ${index === 1 ? 'bg-[#FFD700]' : ''}`}>
                {/* <p className='text-[#A0BCF8] text-6xl font-secure font-bold opacity-25'>01</p> fdd10e */}
                <p className='text-gradient font-secure text-xl uppercase font-bold'>{item.title}</p>
                <p className={`font-poppins text-sm text-gray ${index === 1 ? 'hover:text-black' : ''}`}>{item.desc}</p>
                <div className="flex justify-end">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#1BB0BE] to-[#1BB0BE] p-[2px] cursor-pointer">
                    <div className="h-full w-full rounded-full bg-[#232323] flex justify-center items-center -rotate-90">
                      <img src="/assets/icon/arrowDown.svg" alt="arrowDown" className='h-5 w-5' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-col justify-center items-center">
            <p className='text-yellow font-secure font-semibold uppercase text-center'>More about our services</p>
            <div className="max-w-2xl">
              <p className='text-xl text-center md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold flex flex-col'><span>We provide FREE standard</span> <span>quotations for all our services</span></p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:my-20">
            <div className="flex flex-col justify-center h-auto">
              <img src="/assets/images/network.png" className='w-full max-w-[658px] max-h-[438px]' alt="" />
            </div>
            <div className="flex flex-col gap-2 h-auto justify-center px-8">
              <p className='text-[#A0BCF8] text-5xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>PC & Data Network Infrastructure</p>
              <p className='text-gray text-base my-2'><span>We start by visiting your premises to go over your businesses network requirements and take a survey or the site. We then design the network and create a network topology to work from. This includes all the required devices for the
                installation, the configuration for each device and the securities along with any other specific requirements that have been requested.</span> <span>Although we provide the network and support to some of the biggest companies in the UK, around 63% of our customers are SME’s. Our standard quotations are free with no obligation to use our service.</span></p>
              <button className='bg-[rgba(41,88,255,.99)] hover:bg-[rgba(41,88,255,0.6)] transition delay-75 px-6 py-3 rounded w-fit'>Contact Us Today</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:my-20">
            <div className="flex flex-col gap-2 h-auto justify-center px-8 order-2 md:order-1">
              <p className='text-[#A0BCF8] text-5xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Security Systems</p>
              <p className='text-gray text-base my-2'>We will visit your premises and complete a site survey checking for all camera and sensor locations. If door access is also required, we will discuss with you how you would like to manage and monito these systems. We then go a design the security system including any specific requirements you have requested. Standard quotations are free with no obligation to use our services.</p>
              <button className='bg-[rgba(41,88,255,.99)] hover:bg-[rgba(41,88,255,0.6)] transition delay-75 px-6 py-3 rounded w-fit'>Contact Us Today</button>
            </div>
            <div className="flex flex-col justify-center h-auto order-1 md:order-2">
              <img src="/assets/images/network.png" className='w-full max-w-[658px] max-h-[438px]' alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:my-20">
            <div className="flex flex-col justify-center h-auto">
              <img src="/assets/images/network.png" className='w-full max-w-[658px] max-h-[438px]' alt="" />
            </div>
            <div className="flex flex-col gap-2 h-auto justify-center px-8">
              <p className='text-[#A0BCF8] text-5xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Wireless</p>
              <p className='text-gray text-base my-2'>Need wireless coverage or, need to connect to a building hundreds or thousands of meters away to the same network without having to order another broadband service or use VPN’s? we got you covered. We can provide wireless building to building connections with 10GB connectivity between locations. We can also provide full wireless coverage for any area such are parks, stadiums, shopping centres & any other location which requires a large wireless network. Like with all our installation services, standard quotations are free and you are not obligated to use our services.</p>
              <button className='bg-[rgba(41,88,255,.99)] hover:bg-[rgba(41,88,255,0.6)] transition delay-75 px-6 py-3 rounded w-fit'>Contact Us Today</button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:my-20">
            <div className="flex flex-col gap-2 h-auto justify-center px-8 order-2 md:order-1">
              <p className='text-[#A0BCF8] text-5xl font-secure font-semibold opacity-25 my-3'>01</p>
              <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Security</p>
              <p className='text-gray text-base my-2'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
              <button className='bg-[rgba(41,88,255,.99)] hover:bg-[rgba(41,88,255,0.6)] transition delay-75 px-6 py-3 rounded w-fit'>Contact Us Today</button>
            </div>
            <div className="flex flex-col justify-center h-auto order-1 md:order-2">
              <img src="/assets/images/network.png" className='w-full max-w-[658px] max-h-[438px]' alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative overflow-hidden bg-[url('/assets/images/testimonial.png')] bg-cover bg-center py-10">
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
    </div>
  )
}

export default Home