'use client';
import React from 'react';
import Navbar from './Navbar';

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
          <h2 className="text-xl text-gray-500 mb-4">
            Experience fashion like never before
          </h2>
          <h1 className="text-4xl text-black md:text-5xl font-bold leading-tight mb-6">
            Your Ultimate Destination for Timeless Style.
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover a world of fashion-forward trends, curated collections, and
            timeless pieces that inspire. Unleash your inner fashionista and
            embark on a journey of confidence, elegance, and impeccable style.
          </p>
          <a href="https://wa.me/447763238511">
            <button className="bg-black text-white text-lg py-3 px-8 rounded-full">
              Get started
            </button>
          </a>
        </div>

        {/* Image Gallery */}
        <div className="mt-16 flex justify-center gap-4 max-w-4xl">
          {images.map((image, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
