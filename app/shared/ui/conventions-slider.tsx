'use client';

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function ImagesSlider({title, images}: {title: string, images: {label: string; url: string}[]}) {
    return (
        <section className="w-full mx-auto mb-20">
            <h2 className="text-3xl text-center font-bold mb-20">
                {title}
            </h2>
            <Swiper
                slidesPerView={1}  
                breakpoints={{
                    1024: { slidesPerView: 2 },
                }}                allowTouchMove={false} // Disable manual sliding
                autoplay={{
                  delay: 1, // Minimal delay for continuous scrolling
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={3000} // Adjust speed for smoother scrolling
                loop={true} // Enable looping for seamless scrolling                className="mt-8"
            >
                {images.map((image, idx) => (
                    <SwiperSlide key={idx} className="flex justify-center">
                        <div className="relative w-52 h-52 m-auto"> 
                            <Image 
                                src={image.url} 
                                alt={image.label} 
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
