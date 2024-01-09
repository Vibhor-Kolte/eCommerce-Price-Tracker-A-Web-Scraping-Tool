"use client"
// https://www.npmjs.com/package/react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag'},
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp'},
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer'},
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair'},
  ]

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
        <Carousel
            // Props for Carousel
            showThumbs={false}
            // autoPlay
            infiniteLoop
            // interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImages.map((image) => (
            <Image 
                src={image.imgUrl}
                alt={image.alt}
                width={484}
                height={484}
                className="object-contain"
                key={image.alt}
            />  // Error: Super expression must either be null or a function, not undefined {.\node_modules\react-easy-swipe\lib\react-swipe.js}
            //  It is due to we haven't given any props and also it should be client side rendered 
            // as it deals with interactivity, as react-responsive-carousel is using onClick(), onChanges() BTS.          
            ))}
        </Carousel>
    </div>
  )
}

export default HeroCarousel