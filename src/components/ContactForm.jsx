import React, { useState } from 'react'

const ContactForm = () => {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })

    const { name, email, phone, service, message } = inputValue

    const onChange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const serviceChangeHandler = (e) => {
        setInputValue((prev) => ({
            ...prev,
            service: e.target.value,
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(inputValue)
    }
    return (
        <div className="w-full relative bg-[url('/assets/images/contact_form.png')] bg-cover bg-center py-10 overflow-hidden">
            <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8 bg-gradient-to-r from-[#2958FF] to-[#1BB0BE] text-white px-1 md:px-5 py-8 font-secure rounded">
                <div className="col-span-12 md:col-span-5 flex flex-col gap-5">
                    <h2 className="text-xl md:text-3xl font-bold">Let’s Talk</h2>
                    <div className="border-t border-b border-[rgba(0,192,193,0.6)] py-5 flex flex-col gap-1 font-poppins">
                        <p className="text-lg md:text-2xl font-semibold font-secure">Contact Us</p>
                        <a href="tel:+12525550126" className='flex gap-2 items-center text-[rgba(255,255,255,0.85)]'><img src="/assets/icon/calling_contact.svg" className='h-4 w-4' alt="calling" />(252) 555-0126</a>
                        <a href="tel:+61412739178" className='flex gap-2 items-center text-[rgba(255,255,255,0.85)]'><img src="/assets/icon/calling_contact.svg" className='h-4 w-4' alt="calling" />+61 412 739 178</a>
                        <a href="mailto:kenzi.lawson@example.com" className='flex gap-2 items-center text-[rgba(255,255,255,0.85)]'><img src="/assets/icon/email_contact.svg" className='h-4 w-4' alt="calling" />kenzi.lawson@example.com</a>
                    </div>
                    <div className="py-5 flex flex-col gap-1 font-poppins">
                        <p className="text-lg md:text-2xl font-semibold font-secure">We are located here</p>
                        <p className='flex gap-2 items-start text-[rgba(255,255,255,0.85)] max-w-[280px]'><img src="/assets/icon/location_contact.svg" className='h-4 w-4 mt-1' alt="calling" />8502 Preston Rd. Inglewood, Maine 98380</p>
                        <p className='flex gap-2 items-start text-[rgba(255,255,255,0.85)] max-w-[280px]'><img src="/assets/icon/location_contact.svg" className='h-4 w-4 mt-1' alt="calling" />2464 Royal Ln. Mesa, New Jersey 45463</p>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-7 contact_bg_gradient px-2 md:px-8 py-7 md:py-12 flex flex-col gap-3 font-lato">
                    <h2 className="text-xl md:text-3xl font-bold font-secure">Get a free Quote</h2>
                    <p className=''>Whenever you need any solution to your problems, you can contact us 24/7. Our friendly customer service team will get back to you immediately.</p>
                    <form className='flex flex-col gap-3 text-black' onSubmit={submitHandler}>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="text" className='min-w-0 w-full md:w-1/2 px-4 py-2 rounded focus-visible:outline-0' placeholder='Name' name='name' value={name} onChange={onChange} />
                            <input type="text" className='min-w-0 w-full md:w-1/2 px-4 py-2 rounded focus-visible:outline-0' placeholder='Email' name='email' value={email} onChange={onChange} />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <input type="tel" className='min-w-0 w-full md:w-1/2 px-4 py-2 rounded focus-visible:outline-0' placeholder='Phone' name='phone' value={phone} onChange={onChange} />
                            <select name="service" id="service" className='min-w-0 w-full md:w-1/2 px-4 py-2 rounded focus-visible:outline-0' value={service} onChange={serviceChangeHandler}>
                                <option value="" disabled>Select a service</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </div>
                        <div className="">
                            <textarea className='min-w-0 w-full md:w-full h-32 px-4 py-2 rounded focus-visible:outline-0' placeholder='Your Message' id="" cols="30" rows="10" name='message' value={message} onChange={onChange}></textarea>
                        </div>
                        <button type="submit" className='bg-[rgba(41,88,255,0.6)] hover:bg-[rgba(41,88,255,1)] text-white py-4 px-8 w-min rounded'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm