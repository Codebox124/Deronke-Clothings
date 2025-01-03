'use client';
import React from 'react'
import { motion } from 'framer-motion';
export default function Appointment() {
    const backgroundImageStyle = {
        backgroundImage: 'url("juan-manuel-merino-wNQ180WtW5g-unsplash-2 1 (1).png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: 'fit',
    };
    
    return (
        <div style={backgroundImageStyle} className="flex items-end lg:items-start justify-end ">
            <div className=' w-full lg:w-[50%] h-[70%] lg:h-[100%] text-center lg:text-start'>
                <div className='bg-[#1E1E1E66] h-full px-0 md:px-10 flex gap-8 flex-col justify-center'>
                    <div>
                        <span className=' text-5xl md:text-6xl lg:text-7xl uppercase'>Oferecemos 15% de desconto </span>
                    </div>

                    <div>
                        <span className=' text-2xl md:text-3xl lg:text-5xl'>
                            na sua primeira visita
                        </span>
                    </div>
                    <div>
                        <button className=" w-[100%] md:w-fit px-6 py-3 bg-[#A5775E]">FAZER MARCAÇÃO</button>
                    </div>

                </div>
            </div>
        </div>
    )
}