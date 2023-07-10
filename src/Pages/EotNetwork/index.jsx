import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/ContactForm'

const EotNetwork = () => {
  return (
    <div className='flex-1'>
            <Helmet>
                <title>EoT Network</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className="bg-primary font-poppins">
                <div className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2 h-auto justify-center order-2 md:order-1">
                        <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Eot</p>
                        <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>EoT - Unifi Connect</p>
                        <p className='text-gray text-sm lg:text-base my-2'>Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cursus diam at fermentum. Ullamcorper amet integer sed erat. Quam sem molestie in egestas est. Accumsan morbi lacus velit pulvinar donec. Cum hendrerit pellentesque mattis vel dictumst sit nibh. Semper morbi scelerisque donec viverra congue.</p>
                        <button className='px-6 py-3 btngradient text-white w-fit font-secure font-medium rounded flex gap-2 items-center'>Watch  Demo <img src="/assets/icon/play.svg" className='h-3 w-3' alt="play" /></button>
                    </div>
                    <div className="h-auto flex items-center justify-end order-1 md:order-2">
                        <img src="/assets/images/eot.svg" className='w-full lg:w-10/12' alt="security" />
                    </div>
                </div>
                <div className="bg-[#000328]">
                    <div className="max-w-6xl mx-auto px-2 pt-2 pb-10 flex flex-col items-center gap-3">
                        <div className="my-5 flex flex-col justify-center items-center">
                            <p className='text-yellow font-secure font-semibold leading-7 uppercase'>What we do</p>
                            <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold flex flex-col items-center'><span>EoT - Unifi Connect</span> <span>slogan goes here</span></p>
                        </div>
                        {/* service */}
                        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 my-10">
                            <div className="md:col-span-5 h-auto flex flex-col justify-center items-center">
                                <img src="/assets/images/eot2.png" className='w-full md:w-3/4' alt="eot" />
                            </div>
                            <div className="md:col-span-7 md:px-5">
                                <div className="p-2 md:p-4 flex gap-2 flex-col items-start">
                                    <img src="/assets/icon/wifi1.png" alt="wifi" className='w-14 h-14 my-2' />
                                    <p className='text-gradient font-secure text-lg md:text-2xl font-extrabold capitalize'>fixed wire</p>
                                    <p className='text-gray text-sm md:text-base font-poppins text-left'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <button className='px-4 py-3 bg-[#2958FF] text-white font-inter rounded'>Request a Quote for Installation</button>
                                        <div className="flex gap-4">
                                            <button className='flex-1 px-4 py-3 border-gradient-network text-gradient font-inter '>Order Online</button>
                                            {/* <img src="/assets/images/eot2.png" alt="eot" className='cursor-pointer w-14 h-auto' /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:grid md:grid-cols-12 gap-10 my-10">
                            <div className="md:col-span-5 md:order-2 h-auto flex flex-col justify-center items-center">
                                <img src="/assets/images/eot2.png" className='w-full md:w-3/4' alt="eot" />
                            </div>
                            <div className="md:col-span-7 md:order-1 md:px-5">
                                <div className="p-2 md:p-4 flex gap-2 flex-col items-start">
                                    <img src="/assets/icon/wifi1.png" alt="wifi" className='w-14 h-14 my-2' />
                                    <p className='text-gradient font-secure text-lg md:text-2xl font-extrabold capitalize'>wireless</p>
                                    <p className='text-gray text-sm md:text-base font-poppins text-left'>Lorem ipsum dolor sit amet consectetur. Massa turpis et felis commodo adipiscing neque dui ut. At nec massa diam ut augue. Mattis semper facilisis dictum odio in lobortis. Pellentesque lectus neque massa at ultrices elit sit habitant. Ut semper vitae ut integer. Tellus interdum sit ultricies fusce ut bibendum a. Ipsum turpis nisl.</p>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <button className='px-4 py-3 bg-[#2958FF] text-white font-inter rounded'>Request a Quote for Installation</button>
                                        <div className="flex gap-4">
                                            <button className='flex-1 px-4 py-3 border-gradient-network text-gradient font-inter '>Order Online</button>
                                            {/* <img src="/assets/images/eot2.png" alt="eot" className='cursor-pointer w-14 h-auto' /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* service */}
                    </div>
                </div>
            </div>
            <ContactForm />
        </div>
  )
}

export default EotNetwork