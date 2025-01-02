import React from 'react';

export default function AboutUs() {
    return (
        <div id='about' className="md:py-20 grid md:grid-cols-2 grid-cols-1">
            <div className="flex justify-center items-center bg-[#FAF6F2]">
                <img 
                    className="animate-fade-in w-full max-w-[400px] h-auto object-cover md:rounded-none rounded-lg" 
                    src="Deronke.png" 
                    alt="About us" 
                />
            </div>
            <div className="bg-[#FAF6F2] text-black md:px-10 py-10 flex flex-col justify-center gap-5">
                <div className="flex flex-col gap-5 md:my-0 my-10 md:text-start text-center md:border-l-4 border-[#FF6F61] px-5 animate-slide-in-left">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <span className="text-base leading-7">
                        At Deronke Clothings, we believe clothing is more than just fabric—it's a reflection of your personality and a tool for self-expression. Our mission is to craft high-quality, trendy, and sustainable pieces that make you look and feel your best.
                        <br /><br />
                        Founded in 2014, Deronke Clothings merges innovation with tradition, offering collections inspired by global cultures, modern aesthetics, and timeless classics. Whether you're dressing for a casual day out, a formal event, or anything in between, we’ve got you covered.
                    </span>
                </div>
            </div>
        </div>
    );
}
