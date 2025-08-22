'use client';

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function MediaSlider({title, media}: {title: string, media: {label: string; url: string, type: 'images' | 'video'}[]}) {
    return (
        <section className="w-full mx-auto mb-20">
            <h2 className="text-3xl text-center font-bold mb-20">
                {title}
            </h2>
            <Swiper
                slidesPerView={1}  
                breakpoints={{
                    1024: { slidesPerView: 3 },
                }}                
                allowTouchMove={false} // Disable manual sliding
                autoplay={{
                  delay: 1, // Minimal delay for continuous scrolling
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={3000} // Adjust speed for smoother scrolling
                loop={true} // Enable looping for seamless scrolling           
            >
                {media.map((media, idx) => (
                    <SwiperSlide key={idx} className="flex justify-center">
                        <div className="relative w-80 h-80 m-auto"> 
                            {media.type === 'images' &&  <Image 
                                src={media.url} 
                                alt={media.label} 
                                fill
                                className="object-cover object-center rounded-3xl"
                                quality={100}
                            />}
                           {media.type === 'video' && <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-3xl w-full h-full object-cover"
                            >
                                <source
                                    src={media.url}
                                    type="video/mp4"
                                    media="(min-width: 768px)"
                                    className="rounded-3xl"
                                />
                            </video>}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
