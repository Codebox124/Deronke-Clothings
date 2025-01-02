"use client"
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between items-center p-4 bg-white shadow-md'>
            {/* Logo and brand */}
            <div className='flex items-center gap-2'>
                <div>
                    <img className='md:h-16 md:w-32 h-9 w-25' src='Logo.png' alt='Logo' />
                </div>
                <div>
                    {/* <span className='md:text-2xl text-sm uppercase'>Clothing</span> */}
                </div>
            </div>

            {/* Desktop menu */}
            <div className='hidden lg:flex text-gray-700 items-center gap-10'>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#testimonia">Testimonia</a>
            </div>

            {/* Mobile menu button */}
            <div className='lg:hidden'>
                <button onClick={handleToggle} className='focus:outline-none'>
                    {isOpen ? (
                        <MdClose className='h-8 w-8 text-black' />
                    ) : (
                        <BiMenu className='h-8 w-8 text-black' />
                    )}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <Menu as='div' className='absolute top-0 left-0 w-full bg-white text-black shadow-lg lg:hidden'>
                    <div className='p-6'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3'>
                                <Image src='/Logo.png' width={70} height={70} alt='' className='text-black' />

                            </div>
                            <div className='flex items-center'>
                                <button onClick={handleToggle} className='focus:outline-none'>
                                    <MdClose className='h-8 w-8 text-black' />
                                </button>
                            </div>
                        </div>

                        {/* Menu links */}
                        <div className='my-6 flex flex-col gap-4 pl-6'>
                            <a href="#home">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#services">Services</a>
                            <a href="#gallery">Gallery</a>
                            <a href="#testimonia">Testimonia</a>
                        </div>

                        {/* Hours & Social links */}
                        <div className='pl-6 mt-12 mb-5'>
                            <div className='capitalize font-bold mb-2'>
                                <h1>Opening Days</h1>
                            </div>
                            <div className='flex flex-col md:flex-row justify-between items-start md:items-center'>
                                <ul className='capitalize font-light flex flex-col md:flex-row gap-2'>
                                    <li className='cursor-pointer'>Mon - Sat: 10:00 — 19:30</li>
                                    <li className='cursor-pointer'>Sunday: CLOSED</li>
                                </ul>
                                <div className=' flex justify-center md:justify-normal gap-[25px] mt-6'>
                                    <a href="https://www.instagram.com/deronkeclothings?igsh=MWpib3c3OTdkbW12YQ==">
                                        <div className=' text-[#494040] cursor-pointer'><FaInstagram size={20} /></div>
                                    </a>
                                    <a href="https://wa.me/447763238511">
                                        <div className=' text-[#494040] cursor-pointer'><FaWhatsapp size={20} /></div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )}
        </div>
    );
}
