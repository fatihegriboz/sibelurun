import React from 'react'
import NextImage from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function MySwiper({ data }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item) => {
        return (
          <SwiperSlide key={item.Id}>
            {item.Photo && (
              <NextImage
                src={item.Photo[0].thumbnails.large.url}
                alt={item.Name}
                width={item.Photo[0].thumbnails.large.width}
                height={item.Photo[0].thumbnails.large.height}
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={item.Photo[0].thumbnails.small.url}
                srl_gallery_image="true"
              />
            )}
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
