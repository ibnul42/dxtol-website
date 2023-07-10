import React from 'react'
import { Helmet } from 'react-helmet-async'
import ContactForm from '../../components/ContactForm'

const EotNetwork = () => {
  return (
    <div className='flex-1'>
            <Helmet>
                <title>Store</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className="bg-black font-poppins">
                
            </div>
            <ContactForm />
        </div>
  )
}

export default EotNetwork