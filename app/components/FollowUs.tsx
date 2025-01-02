import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'

export default function FollowUs() {
    return (
        <div className='  mx-auto w-full md:px-8 px-4 mt-7  bg-white text-black'>
            <div className='flex justify-between mb-10  bg-white'>
                <p className=' text-3xl border-l-4 pl-5'>FOLLOW US ON INSTAGRAM</p>

            </div>



            <div className='bg-[#FAF3F2]'>
                <div className=' text-center py-28 px-5 md:px-0'>
                    <div className='text-[#84635C] flex justify-center'>
                        <FaInstagram size={24} />
                    </div>
                    <div className=' text-[#84635C] text-[48px] md:text-[60px] lg:text-[80px] italic my-3'>
                        FOLLOW US
                    </div>
                    <div className='capitalize text-[#84635C] mb-3 text-3xl'>
                        <p>ON INSTAGRAM AND OTHER SOCIAL NETWORK</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-3 justify-center transition-all">
                    
                        <a
                            href="https://www.instagram.com/deronkeclothings?igsh=MWpib3c3OTdkbW12YQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium w-full md:w-fit py-4 px-7 text-white bg-[#A5775E] flex items-center justify-center gap-3 rounded-lg"
                        >
                            <FaInstagram className="text-lg" />
                            INSTAGRAM
                        </a>

                      
                        <a
                            href="https://wa.me/447763238511"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium w-full md:w-fit py-4 px-7 text-[#25D366] bg-white border border-[#25D366] flex items-center justify-center gap-3 rounded-lg"
                        >
                            <FaWhatsapp className="text-lg" />
                            WHATSAPP
                        </a>
                    </div>
                </div>
            </div>


        </div>
    )
}