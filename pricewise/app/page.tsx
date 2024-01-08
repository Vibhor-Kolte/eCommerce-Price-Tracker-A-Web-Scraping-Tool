import React from 'react'
import Image from "next/image"

const Home = () => {
  return (
    <>
    <section className="px-6 md:px-20 py-24 border-2 border-red-500"> {/* On Medium Devices, define padding-x & padding-y */}
      <div className="flex max-xl:flex-col gap-16"> {/* On Max-XL Devices, it will show more in column way */}
        <div className="flex flex-col justify-center"> 
          <p className="small-text">
            Smart Shopping Starts Here:
            <Image 
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right"
              width={16}
              height={16}
            />
          </p>

          <h1 className="head-text">
            Unleash the Power of
            <span className="text-primary"> PriceWise</span>
          </h1>

          <p className="mt-6"> {/* margin top of 6*/}
            Powerful, system to track your products of any eCommerce Site and make smarter decisions while buying.
          </p>

          Search Bar
        </div>
        HeroCarousel for horizantal and vertical viewing, depending on the device.
      </div>
    </section>

    <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16"> {/** wrap images on smaller devices */}
          {["Apple Iphone 13", "Think and Grow Rich Book", "HRX Sneakers"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home