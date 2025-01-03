'use client';
import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
export default function Hero() {
  const images = [
    { src: 'image1.png', alt: 'Fashion Image 1' },
    { src: 'image2.png', alt: 'Fashion Image 2' },
    { src: 'image3.png', alt: 'Fashion Image 3' },
    { src: 'image4.png', alt: 'Fashion Image 4' },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-neutral-100 min-h-screen flex flex-col items-center justify-center text-center px-4">

        <div className="max-w-3xl">
          <motion.h2
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
          className="text-xl text-gray-500 mb-4">
            Experience fashion like never before
          </motion.h2>
          <motion.h1
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
          className="text-4xl text-black md:text-5xl font-bold leading-tight mb-6">
            Your Ultimate Destination for Timeless Style.
          </motion.h1>
          <motion.p
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
          className="text-lg text-gray-600 mb-8">
            Discover a world of fashion-forward trends, curated collections, and
            timeless pieces that inspire. Unleash your inner fashionista and
            embark on a journey of confidence, elegance, and impeccable style.
          </motion.p>
          <a href="https://wa.me/447763238511">
            <motion.button
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
            className="bg-black text-white text-lg py-3 px-8 rounded-full">
              Get started
            </motion.button>
          </a>
        </div>

        {/* Image Gallery */}
        <div className="mt-16 flex justify-center gap-4 max-w-4xl">
          {images.map((image, index) => (
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
              ease:"easeInOut",
              delay: 0.05 * index
            }}
            viewport={{
              once:true
            }}
              key={index}
              className="w-1/4 overflow-hidden rounded-xl"
              style={{
                clipPath: 'polygon(0% 15%, 100% 0%, 100% 85%, 0% 100%)',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
