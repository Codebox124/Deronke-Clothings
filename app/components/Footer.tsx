import Image from 'next/image'
import React from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='max-w-[1640px] mx-auto py-[20px] px-5 md:px-14 lg:px-24 bg-white text-[#494040]'>
      <div className=' max-w-[1420px] mx-auto h-full py-8 md:py-14 lg:py-20 text-center md:text-left'>

        <div className='flex justify-between items-center lg:hidden mb-8'>
          <div className='flex items-center gap-3 lg:gap-5 lg:hidden'>
            <div>
              <Image src='/Logo.png' width={70} height={70} alt='' className='text-black' />
            </div>
            <div className=' capitalize font-bold mt-0 lg:mt-5'>
              <p>Deronke Clothings </p>
            </div>
          </div>

          <div>
            <BiMenu className='h-8 w-8 text-[#494040]' />
          </div>
        </div>

        <div className=' flex justify-center md:justify-between flex-wrap'>
          <div className=' max-w-[390px] w-full'>
            <div className=' mb-5'>

              <div className='lg:flex items-center gap-3 lg:gap-5 hidden'>
                <div>
                  <Image src='/Logo.png' width={70} height={70} alt='' className='text-black' />
                </div>

              </div>

              <div>
                <div className=' capitalize font-bold mt-0 lg:mt-5'>
                  <p>Deronke Clothings </p>
                </div>
                <div className='my-[25px]'>
                  <p className='font-light'>
                    Your Ultimate Destination for Timeless Style.
                  </p>
                </div>
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
          <div className=' w-[250px]  mb-5 hidden lg:block'>
            <div>
              <div className='capitalize font-bold mb-[20px] lg:mb-[30px]'>
                <h1>Links</h1>
              </div>
              <ul className=' capitalize flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px] font-light'>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#testimonia">Testimonia</a>
              </ul>
            </div>
          </div>
          <div className=' w-[250px]  mb-5 hidden lg:block'>
            <div>
              <div className='capitalize font-bold mb-[20px] lg:mb-[30px]'>
                <h1>Opening Days</h1>
              </div>
              <ul className=' capitalize font-light flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                <li className='cursor-pointer'>Monday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Tuesday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Wednesday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Thursday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Friday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Saturday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Sunday: CLOSED</li>
              </ul>
            </div>
          </div>
          <div className=' w-[250px] mb-5'>
            <div>
              <div className='capitalize font-bold mb-[20px] lg:mb-[30px]'>
                <h1>Contact</h1>
              </div>
              <ul className=' capitalize font-light flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                <li className='cursor-pointer'>Address: Br2 9sj
                  23 Balfour road Bromley London</li>
                <li className='cursor-pointer'>Phone: +44 7763 238511</li>
                <li className='cursor-pointer'>WhatsApp: +44 7763 238511</li>
                <li className='cursor-pointer'>Email: Tejumaiyeesther@yahoo.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col-reverse sm:flex-row justify-between'>
          <div className='text-[#BBA39B] font-medium text-xs cursor-pointer'>
            © DERONKE CLOTHINGS 2025
          </div>
          <div className='flex justify-center md:justify-normal gap-3 text-[#BBA39B] font-medium text-xs list-none mb-3 md:mb-0'>
            <li className='cursor-pointer'>
              Privacy Policy
            </li>
            <li className='cursor-pointer'>
              Terms of Service
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}
