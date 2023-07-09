import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/ContactForm'

const HotelDeveloper = () => {
    return (
        <div className='flex-1'>
            <Helmet>
                <title>Hotel & Developers</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className="bg-primary font-poppins">
                <div className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2 h-auto justify-center order-2 md:order-1">
                        <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Eot</p>
                        <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>Hotels & Developers</p>
                        <p className='text-gray text-sm lg:text-base my-2'>Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cursus diam at fermentum. Ullamcorper amet integer sed erat. Quam sem molestie in egestas est.
                            Accumsan morbi lacus velit pulvinar donec. Cum hendrerit pellentesque mattis vel dictumst sit nibh. Semper morbi scelerisque donec viverra congue.</p>
                        <button className='px-6 py-3 btngradient text-white w-fit font-secure font-medium rounded flex gap-2 items-center'>Watch  Demo <img src="/assets/icon/play.svg" className='h-3 w-3' alt="play" /></button>
                    </div>
                    <div className="h-auto flex items-center justify-end order-1 md:order-2">
                        <img src="/assets/images/eot.svg" className='w-full lg:w-10/12' alt="security" />
                    </div>
                </div>
            </div>
            <div className="bg-[#000328]">
                <div className="max-w-6xl mx-auto px-2 pt-2 pb-10 flex flex-col gap-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-1 relative max-h-[420px] md:max-h-[520px] lg:max-h-[720px]">
                            <img src="/assets/images/hotel1.png" className="h-full w-full object-cover" alt="hotels" />
                            <div className="absolute bottom-4 px-10 w-full">
                                <button className="bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.7)] hover:text-black rounded py-2 w-full font-secure font-bold">
                                    Hotel Development
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 h-full max-h-[420px] md:max-h-[520px] lg:max-h-[720px]">
                            <div className="p-1 relative flex-1 overflow-hidden">
                                <img src="/assets/images/hotel2.png" className="h-full w-full object-cover" alt="hotels" />
                                <div className="absolute bottom-4 px-10 w-full">
                                    <button className="bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.7)] hover:text-black rounded py-2 w-full font-secure font-bold">
                                        Why Accor?
                                    </button>
                                </div>
                            </div>
                            <div className="p-1 relative flex-1 overflow-hidden">
                                <img src="/assets/images/hotel3.png" className="h-full w-full object-cover" alt="hotels" />
                                <div className="absolute bottom-4 px-10 w-full">
                                    <button className="bg-[rgba(253,209,14,0.5)] hover:bg-[rgba(253,209,14,0.7)] text-black hover:text-white rounded py-2 w-full font-secure font-bold">
                                        Hotel Development
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-5">
                        <div className="my-5 flex flex-col justify-center items-center">
                            <p className='text-yellow font-secure font-semibold leading-7 uppercase'>What we do</p>
                            <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold flex flex-col items-center'>Hotel Developers - slogan goes here</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-2 md:p-4 flex gap-2 flex-col items-center">
                                <img src="/assets/icon/wifi1.png" alt="wifi" className='w-16 md:w-24 h-16 md:h-24 my-2' />
                                <p className='text-gradient font-secure text-lg md:text-xl font-extrabold capitalize'>Hotel Service Name</p>
                                <p className='text-gray text-sm md:text-base font-poppins text-center'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                            </div>
                            <div className="p-2 md:p-4 flex gap-2 flex-col items-center">
                                <img src="/assets/icon/wifi2.png" alt="wifi" className='w-[72px] md:w-28 h-16 md:h-24 my-2' />
                                <p className='text-gradient font-secure text-lg md:text-xl font-extrabold capitalize'>Hotel Service Name</p>
                                <p className='text-gray text-sm md:text-base font-poppins text-center'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                            </div>
                            <div className="p-2 md:p-4 flex gap-2 flex-col items-center">
                                <img src="/assets/icon/wifi3.png" alt="wifi" className='w-16 md:w-24 h-16 md:h-24 my-2' />
                                <p className='text-gradient font-secure text-lg md:text-xl font-extrabold capitalize'>Hotel Service Name</p>
                                <p className='text-gray text-sm md:text-base font-poppins text-center'>Lorem ipsum dolor sit amet con sec tetur. Purus massa sit nu ll a non non bibendum. A mauris ame</p>
                            </div>
                        </div>
                    </div>
                    {/* service */}
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-10 my-10">
                        <div className="md:col-span-5 h-auto flex flex-col justify-center items-center">
                            <img src="/assets/images/hotel.svg" className='w-full md:w-3/4' alt="hotel" />
                        </div>
                        <div className="md:col-span-7 md:px-5">
                            <div className="p-2 md:p-4 flex gap-2 flex-col items-start">
                                <img src="/assets/icon/wifi1.png" alt="wifi" className='w-14 h-14 my-2' />
                                <p className='text-gradient font-secure text-lg md:text-2xl font-extrabold capitalize'>Hotel development today</p>
                                <p className='text-gray text-sm md:text-base font-poppins text-left'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <button className='px-4 py-3 bg-[#2958FF] text-white font-inter rounded'>Request a Quote for Installation</button>
                                    <div className="flex gap-4">
                                        <button className='flex-1 px-4 py-3 border-gradient-network text-gradient font-inter '>Order Online</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:grid md:grid-cols-12 gap-10 my-10">
                        <div className="md:col-span-5 md:order-2 h-auto flex flex-col justify-center items-center">
                            <img src="/assets/images/hotel.svg" className='w-full md:w-3/4' alt="hotel" />
                        </div>
                        <div className="md:col-span-7 md:order-1 md:px-5">
                            <div className="p-2 md:p-4 flex gap-2 flex-col items-start">
                                <img src="/assets/icon/wifi1.png" alt="wifi" className='w-14 h-14 my-2' />
                                <p className='text-gradient font-secure text-lg md:text-2xl font-extrabold capitalize'>Hotel development today</p>
                                <p className='text-gray text-sm md:text-base font-poppins text-left'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <button className='px-4 py-3 bg-[#2958FF] text-white font-inter rounded'>Request a Quote for Installation</button>
                                    <div className="flex gap-4">
                                        <button className='flex-1 px-4 py-3 border-gradient-network text-gradient font-inter '>Order Online</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* service */}
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default HotelDeveloper