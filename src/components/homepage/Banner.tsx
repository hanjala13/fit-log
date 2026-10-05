import Image from 'next/image';
import React from 'react';
import banner from '@/assets/banner.png';


const Banner = () => {

    return (
        <section className="mx-3 my-4 sm:mx-4 sm:my-6 lg:mx-8">
            <div className="grid grid-cols-1 items-center gap-6 rounded-2xl border border-white/10 bg-[#0F0F14] px-5 py-8 text-center sm:px-8 sm:py-10 md:grid-cols-2 md:gap-4 md:text-left lg:px-12 lg:py-14">
                {/* Left: text */}
                <div className="order-2 md:order-1">
                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-[#C6FF00] sm:text-xs">
                        WORKOUT LIBRARY
                    </h4>

                    <h2 className={`font-oswald mt-3 text-3xl font-bold uppercase leading-[1.05] text-white sm:text-4xl lg:text-5xl`}>
                        Train with intent. Log <br className="hidden md:block" /> every set.
                    </h2>

                    <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-gray-400 sm:text-sm md:mx-0 lg:mt-4">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <button className="cursor-pointer mt-5 w-full rounded-sm bg-[#C6FF00] px-5 py-3 text-[10px] font-bold tracking-wider text-black transition hover:brightness-110 sm:w-auto sm:text-xs lg:mt-6">
                        BROWSE WORKOUTS
                    </button>
                </div>

                {/* Right: image */}
                <div className="order-1 flex justify-center md:order-2 md:justify-end">
                    <Image
                        src={banner}
                        alt="Banner Picture"
                        priority
                        className="h-auto w-36 object-contain sm:w-44 md:w-48 lg:w-64"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;