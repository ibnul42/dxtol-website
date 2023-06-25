import React from 'react'
import { Helmet } from 'react-helmet-async'

const BroadbandNetwork = () => {
    return (
        <div className='flex-1'>
            <Helmet>
                <title>Broadband Network</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className="bg-primary font-poppins">
                <div className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                    <div className="flex flex-col gap-2 h-auto justify-center order-2 md:order-1">
                        <p className='text-yellow font-secure font-semibold leading-7 uppercase'>Empowering Networks:</p>
                        <p className='text-xl md:text-2xl lg:text-4xl text-gradient font-secure font-extrabold'>High Speed Broadband Internet Connection</p>
                        <p className='text-gray text-sm lg:text-base my-2'>Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cursus diam at fermentum. Ullamcorper amet integer sed erat. Quam sem molestie in egestas est. Accumsan morbi lacus velit pulvinar donec. Cum hendrerit pellentesque mattis vel dictumst sit nibh. Semper morbi scelerisque donec viverra congue.</p>
                        <button className='px-6 py-3 btngradient text-white w-fit font-secure font-medium rounded flex gap-2 items-center'>Watch  Demo <img src="/assets/icon/play.svg" className='h-3 w-3' alt="play" /></button>
                    </div>
                    <div className="h-auto flex items-center justify-end order-1 md:order-2">
                        <img src="/assets/images/broadband-header.svg" className='w-full lg:w-10/12' alt="security" />
                    </div>
                </div>
                <div className="bg-[#000328]">
                    <div className="max-w-6xl mx-auto px-2 pt-2 pb-10 flex flex-col items-center gap-3">
                        <div className="my-2">
                            <p className='font-secure focus-text font-extrabold text-xl md:text-3xl lg:text-7xl text-center capitalize flex flex-col items-center'>Need new connection?</p>
                            <p className='font-light font-poppins text-center lg:text-xl text-gray my-5'>We are one step ahead of installing high quality Covarage</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BroadbandNetwork