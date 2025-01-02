'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesData from '@/app/data/services.json';
import { PiGreaterThanLight } from 'react-icons/pi';

interface ServiceItem {
    title: string;
    description: string;
    image: string;
}

export default function Service() {
    const [services, setServices] = useState<ServiceItem[]>([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const backgroundImageStyle = {
        backgroundImage: 'url("Rectangle 384.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    return (
        <div id='services' className='mx-auto my-24 px-4 md:px-10'>
            {/* Header Section */}
            <h1 className='border-l-4 border-[#A5775E] pl-4 text-black mb-8 text-3xl font-bold animate-fade-in'>Our Services</h1>

            {/* Background Section */}
            <div
                style={backgroundImageStyle}
                className="md:items-center relative md:static justify-center pb-4 grid grid-cols-1 md:grid-cols-2 overflow-hidden"
            >
                <div className='bg-[#1E1E1E66] md:h-full h-2/3 md:px-10 px-5 absolute md:relative bottom-0 flex md:gap-5 gap-8 flex-col justify-center animate-slide-in-left rounded-md md:rounded-none'>
                    <div>
                        <h1 className='text-white text-3xl md:text-5xl font-bold leading-tight'>Custom</h1>
                        <span className='text-4xl md:text-6xl text-white font-bold'>Styling Services</span>
                    </div>
                    <div>
                        <span className='text-white text-base md:text-lg leading-relaxed'>
                            Elevate your wardrobe with personalized styling advice from our fashion experts. Whether you're curating your everyday look or prepping for a special occasion, we’ll help you create a style that’s uniquely yours.
                        </span>
                    </div>
                    <div>
                        <button className="px-6 py-3 bg-[#A5775E] text-white font-semibold rounded-md hover:bg-[#8f624e] transition-all">
                            Get More Info
                        </button>
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className='hidden md:grid grid-cols-1 lg:grid-cols-2 mt-10 gap-8 text-black animate-fade-in'>
                {services.map((service, index) => (
                    <div
                        key={index}
                        className='flex gap-4 bg-[#FAF3F2] p-6 rounded-md shadow-md hover:shadow-lg transition-all'
                    >
                        <div className='w-1/3'>
                            <img
                                className='w-full h-auto rounded-md object-cover'
                                src={service.image}
                                alt={service.title}
                            />
                        </div>
                        <div className='flex flex-col gap-3 justify-center w-2/3'>
                            <h1 className='text-xl font-bold'>{service.title}</h1>
                            <span className='text-sm text-gray-700'>{service.description}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className='md:hidden animate-fade-in mt-10'>
                <Slider {...settings} className='overflow-hidden'>
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className='flex flex-col items-center text-black bg-[#FAF3F2] p-6 rounded-md shadow-md'
                        >
                            <div className='w-full'>
                                <img
                                    className='w-full h-48 rounded-md object-cover'
                                    src={service.image}
                                    alt={service.title}
                                />
                            </div>
                            <div className='flex flex-col gap-4 mt-4 text-center'>
                                <h1 className='text-xl font-bold'>{service.title}</h1>
                                <span className='text-sm text-gray-700'>{service.description}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
