'use client';

import { conventions } from "@/config/conventions";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function ConventionsSlider() {
    return (
        <section className="w-full mx-auto mb-20">
            <Swiper
                spaceBetween={16}
                slidesPerView={6}  
                breakpoints={{
                    1024: { slidesPerView: 6 },
                    768: {slidesPerView: 3}
                }}                allowTouchMove={false} // Disable manual sliding
                autoplay={{
                  delay: 1, // Minimal delay for continuous scrolling
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={3000} // Adjust speed for smoother scrolling
                loop={true} // Enable looping for seamless scrolling                className="mt-8"
            >
                {conventions.map((convention, idx) => (
                    <SwiperSlide key={idx} className="flex justify-center">
                        <div className="relative w-10 h-10 lg:w-30 lg:h-30"> 
                            <Image 
                                src={convention.url} 
                                alt={convention.label} 
                                fill
                                className="object-cover object-center rounded-3xl"
                                quality={100}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
