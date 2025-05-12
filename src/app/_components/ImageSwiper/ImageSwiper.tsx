'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface ImageSwiperProps {
  width: number;
  images: {
    src: string;
    caption: string;
  }[];
  ratio: [number, number];
  transition?: number;
}

function ImageSwiper({
  width,
  images,
  ratio,
  transition = 2500,
}: ImageSwiperProps) {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: transition,
      }}
      loop={true}
      className="mr-auto"
      // className="w-full"
    >
      {images.map(({ src, caption }) => (
        <SwiperSlide key={caption}>
          <figure
            style={{
              maxWidth: width,
            }}
            className="flex flex-col items-center gap-2 text-sm"
          >
            <div
              style={{
                aspectRatio: `${ratio[0]}/${ratio[1]}`,
              }}
              className="relative w-full"
            >
              <Image src={src} alt={caption} fill className="object-contain" />
            </div>
            <figcaption className="text-dark2">{caption}</figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSwiper;
