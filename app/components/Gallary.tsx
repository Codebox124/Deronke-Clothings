'use client';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PiGreaterThanLight, PiLessThanLight } from 'react-icons/pi';

interface GalleryItem {
  image: string;
  alt: string;
  category: 'woman' | 'man';
}

const galleryData: GalleryItem[] = [
  { image: 'image1.png', alt: 'Image 2', category: 'woman' },
  { image: 'image2.png', alt: 'Image 1', category: 'woman' },
  { image: 'image3.png', alt: 'Image 1', category: 'woman' },
  { image: 'image4.png', alt: 'Image 1', category: 'woman' },
  { image: 'image5.png', alt: 'Image 1', category: 'woman' },
  { image: 'image6.png', alt: 'Image 1', category: 'woman' },
  { image: 'image7.png', alt: 'Image 1', category: 'woman' },
  { image: 'image8.png', alt: 'Image 1', category: 'man' },
  { image: 'image8.png', alt: 'Image 1', category: 'man' },

];

export default function Gallery() {
  const [filter, setFilter] = useState<'woman' | 'man' | 'all'>('woman');
  const sliderRef = useRef<Slider | null>(null);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const filteredData = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div id='gallery' className='pl-4 mx-auto md:py-20 text-black'>
      <div className='flex justify-between md:px-6 px-3 mx-auto mb-3 md:mb-10 items-center'>
        <p className='text-3xl border-l-4 pl-5'>GALLERY</p>
        <div className='md:flex items-center gap-5 hidden'>
          <div className='flex px-6 gap-4 md:gap-6'>
            <button onClick={() => setFilter('woman')} className={filter === 'woman' ? 'font-bold' : ''}>Woman</button>
            <button onClick={() => setFilter('man')} className={filter === 'man' ? 'font-bold' : ''}>Man</button>
          </div>

          <div>
            <button
              onClick={() => {
                sliderRef.current?.slickPrev();
                setPrevClicked(true);
                setTimeout(() => setPrevClicked(false), 200);
              }}
              className={`p-2 border ${prevClicked ? 'bg-[#DDC3BB66] text-white' : 'border-[#DDC3BB66]'}`}
            >
              <PiLessThanLight size={19} />
            </button>
            <button
              onClick={() => {
                sliderRef.current?.slickNext();
                setNextClicked(true);
                setTimeout(() => setNextClicked(false), 200);
              }}
              className={`p-2 border ${nextClicked ? 'bg-[#DDC3BB66] text-white' : 'border-[#DDC3BB66]'}`}
            >
              <PiGreaterThanLight size={19} />
            </button>
          </div>
        </div>
      </div>
      <div className='overflow-hidden '>
        <Slider className='overflow-hidden' ref={sliderRef} {...settings}>
          {filteredData.map((item, index) => (
            <div key={index} className='px-1'>
              <img src={item.image} alt={item.alt} className='w-full h-[500px] md:h-[600px] object-cover mx-auto transition-transform duration-500 hover:scale-105' />
            </div>
          ))}
        </Slider>
      </div>

      <div className='flex items-center justify-between md:hidden w-full pr-1 mt-3'>
        <div>
          <button
            onClick={() => {
              sliderRef.current?.slickPrev();
              setPrevClicked(true);
              setTimeout(() => setPrevClicked(false), 200);
            }}
            className={`p-2 border ${prevClicked ? 'bg-[#DDC3BB66] text-white' : 'border-[#DDC3BB66]'}`}
          >
            <PiLessThanLight size={19} />
          </button>
        </div>

        <div className='flex px-6 gap-4 md:gap-6'>
          <button onClick={() => setFilter('woman')} className={filter === 'woman' ? 'font-bold' : ''}>Woman</button>
          <button onClick={() => setFilter('man')} className={filter === 'man' ? 'font-bold' : ''}>Man</button>
        </div>

        <div>
          <button
            onClick={() => {
              sliderRef.current?.slickNext();
              setNextClicked(true);
              setTimeout(() => setNextClicked(false), 200);
            }}
            className={`p-2 border ${nextClicked ? 'bg-[#DDC3BB66] text-white' : 'border-[#DDC3BB66]'}`}
          >
            <PiGreaterThanLight size={19} />
          </button>
        </div>

      </div>
    </div>
  );
}
