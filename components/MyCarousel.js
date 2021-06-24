import React from 'react'
import NextImage from 'next/image'

import CarouselNO from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function MyCarousel({ data }) {
  // console.log('airtabledataOS:', data)
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  return (
    <CarouselNO responsive={responsive}>
      {data.map((item) => {
        return (
          <div key={item.Id}>
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
          </div>
        )
      })}
    </CarouselNO>
  )
}
