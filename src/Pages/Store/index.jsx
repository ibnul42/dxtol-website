import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/ContactForm'

const network = [
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_net1.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  },
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_net2.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  },
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_net3.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  }
]

const security = [
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_security1.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  },
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_security2.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  },
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_security3.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  },
  {
    title: 'Ethernet',
    price: '10.99',
    stock: '999',
    sold: '258876',
    source: '/assets/images/store_security4.png',
    details: 'Lorem ipsum dolor sit amet consectetur. A viverra id laoreet sed. Non scelerisque cursus fames nulla facilisi. Netus metus ac ac varius tellus porttitor gravida id. Consectetur augue a adipiscing et sit pretium faucibus quis interdum. Sit in pretium sit et sed tempus rhoncus. Tortor lectus dolor eget amet. Dui lectus ut cursus massa sodales cur'
  }
]

const EotNetwork = () => {
  return (
    <div className='flex-1'>
      <Helmet>
        <title>Store</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="bg-[rgba(0,2,30,0.8)] py-10">
        <div className="max-w-6xl mx-auto px-2 grid grid-cols-12">
          <div className="col-span-12 md:col-span-8">
            <img src="/assets/images/store_ad.png" alt="store" className='w-full' />
          </div>
          <div className="hidden md:block col-span-4 bg-slate-500 h-auto"></div>
        </div>
      </div>
      <div className="bg-[#000328]">
        <div className="max-w-6xl mx-auto px-2 py-10">
          <p className='text-gradient font-secure text-xl md:text-3xl font-bold'>Top Category</p>
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-4 my-4">
            <div className="border-gradient px-6 py-4 flex flex-col items-center gap-4 cursor-pointer">
              <img src="/assets/icon/store_category.svg" className='w-16 h-16' alt="store" srcset="" />
              <p className='font-secure text-gradient text-lg md:text-xl font-bold'>Network Installation</p>
            </div>
            <div className="border-gradient px-6 py-4 flex flex-col items-center gap-4 cursor-pointer">
              <img src="/assets/icon/store_category.svg" className='w-16 h-16' alt="store" srcset="" />
              <p className='font-secure text-gradient text-lg md:text-xl font-bold'>Security System</p>
            </div>
            <div className="border-gradient px-6 py-4 flex flex-col items-center gap-4 cursor-pointer">
              <img src="/assets/icon/store_category.svg" className='w-16 h-16' alt="store" srcset="" />
              <p className='font-secure text-gradient text-lg md:text-xl font-bold'>Broadband Connection</p>
            </div>
            <div className="border-gradient px-6 py-4 flex flex-col items-center gap-4 cursor-pointer">
              <img src="/assets/icon/store_category.svg" className='w-16 h-16' alt="store" srcset="" />
              <p className='font-secure text-gradient text-lg md:text-xl font-bold'>EoT</p>
            </div>
          </div>
          <div className="my-10">
            <p className='text-[#FDD10E] font-secure text-xl md:text-3xl font-bold my-2'>Network Installation</p>
            <div className=" p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-[rgba(27,176,190,0.3)]">
              {network && network.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <img src={item.source} className='w-full' alt="card" />
                  <div className="flex justify-between font-bold">
                    <p className="text-[#FDD10E] text-xl font-secure">{item.title}</p>
                    <p className='text-xl text_gradient_store_card font-poppins'>${item.price}/mo</p>
                  </div>
                  <div className="flex justify-between font-poppins text-[#7A7A7A]">
                    <p className="">In Stock: {item.stock}pc</p>
                    <p className=''>Sold: {item.sold}</p>
                  </div>
                  <p className='font-poppins text-[rgba(234,234,234,0.75)]'>{item.details}</p>
                  <div className="flex justify-between gap-2 font-inter">
                    <button className='px-6 py-3 text-xs md:text-base bg-[rgba(41,88,255,0.8)] hover:bg-[rgba(41,88,255,1)] text-white w-1/2 rounded'>Details</button>
                    <button className='px-6 py-3 text-xs md:text-base text-gradient border-gradient border-gradient-store text-white w-1/2'>Order Online</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10">
            <p className='text-[#FDD10E] font-secure text-xl md:text-3xl font-bold my-2'>Security</p>
            <div className=" p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 border border-[rgba(27,176,190,0.3)]">
              {security && security.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <img src={item.source} className='w-full' alt="card" />
                  <div className="flex justify-between font-bold">
                    <p className="text-[#FDD10E] text-xl font-secure">{item.title}</p>
                    <p className='text-xl text_gradient_store_card font-poppins'>${item.price}/mo</p>
                  </div>
                  <div className="flex justify-between font-poppins text-[#7A7A7A]">
                    <p className="">In Stock: {item.stock}pc</p>
                    <p className=''>Sold: {item.sold}</p>
                  </div>
                  <p className='font-poppins text-[rgba(234,234,234,0.75)]'>{item.details}</p>
                  <div className="flex justify-between gap-2 font-inter">
                    <button className='px-6 py-3 text-xs bg-[rgba(41,88,255,0.8)] hover:bg-[rgba(41,88,255,1)] text-white w-1/2 rounded'>Details</button>
                    <button className='px-6 py-3 text-xs text-gradient border-gradient border-gradient-store text-white w-1/2'>Order Online</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  )
}

export default EotNetwork