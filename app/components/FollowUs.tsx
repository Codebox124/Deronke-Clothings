'use client';
import React from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Image from 'next/image'
import { motion } from 'framer-motion';
export default function FollowUs() {
    return (
        <div className='  mx-auto w-full md:px-8 px-4 mt-7  bg-white text-black'>
            <div className='flex justify-between mb-10  bg-white'>
                <motion.p
                initial={{
                    x:50,
                    opacity:0
                  }}
                  whileInView={{
                    x:0,
                    opacity:1
                  }}
                  transition={{
                    duration:0.7,
                    ease:"easeInOut"
                  }}
                  viewport={{
                    once:true
                  }}
                className=' text-3xl border-l-4 pl-5'>FOLLOW US ON INSTAGRAM</motion.p>

            </div>



            <div className='bg-[#FAF3F2]'>
                <div className=' text-center py-28 px-5 md:px-0'>
                    <motion.div
                    initial={{
            y:50,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.7,
            ease:"easeInOut"
          }}
          viewport={{
            once:true
          }} className='text-[#84635C] flex justify-center'>
                        <FaInstagram size={24} />
                    </motion.div>
                    <motion.div
                    initial={{
            y:50,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.7,
            ease:"easeInOut"
          }}
          viewport={{
            once:true
          }} className=' text-[#84635C] text-[48px] md:text-[60px] lg:text-[80px] italic my-3'>
                        FOLLOW US
                    </motion.div>
                    <motion.div
                    initial={{
            y:50,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.7,
            ease:"easeInOut"
          }}
          viewport={{
            once:true
          }} className='capitalize text-[#84635C] mb-3 text-3xl'>
                        <p>ON INSTAGRAM AND OTHER SOCIAL NETWORK</p>
                    </motion.div>

                    <div className="flex flex-col md:flex-row gap-3 justify-center transition-all">
                    
                        <motion.a
                        initial={{
            y:50,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.7,
            ease:"easeInOut"
          }}
          viewport={{
            once:true
          }}
                            href="https://www.instagram.com/deronkeclothings?igsh=MWpib3c3OTdkbW12YQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium w-full md:w-fit py-4 px-7 text-white bg-[#A5775E] flex items-center justify-center gap-3 rounded-lg"
                        >
                            <FaInstagram className="text-lg" />
                            INSTAGRAM
                        </motion.a>

                      
                        <motion.a
                        initial={{
            y:50,
            opacity:0
          }}
          whileInView={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.7,
            ease:"easeInOut"
          }}
          viewport={{
            once:true
          }}
                            href="https://wa.me/447763238511"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium w-full md:w-fit py-4 px-7 text-[#25D366] bg-white border border-[#25D366] flex items-center justify-center gap-3 rounded-lg"
                        >
                            <FaWhatsapp className="text-lg" />
                            WHATSAPP
                        </motion.a>
                    </div>
                </div>
            </div>


        </div>
    )
}