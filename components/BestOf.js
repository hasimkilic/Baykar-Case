import React from 'react'
import Image from 'next/image';
import image from '@/public/imageCard.png'
import background from '@/public/backGround.png'
import basket from '@/public/shopping-cart.svg';
export default function BestOf() {
    const products = [
        {
          id: 1,
          name: 'Title',
          desc: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
          href: '#',
          imageSrc: image,
          imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
          price: '$140',
        },
        {
            id: 2,
            name: 'Title',
            desc: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
            href: '#',
            imageSrc: image,
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            price: '$140',
          },
          {
            id: 3,
            name: 'Title',
            desc: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.',
            href: '#',
            imageSrc: image,
            imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
            price: '$140',
          },
      ]
  return (
    <div className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
        <div className='flex items-center justify-between'>
            <h2 className="text-6xl leading-[61px] font-bold text-white">The best of the best</h2>
            <button>
            <a
                href="#"
                className="rounded-lg px-12 py-4 text-sm font-bold text-white bg-transparent border-2 border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78350F]"
              >
                Sign up now
              </a>
            </button>
        </div>
        <div className="relative mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 bg-transparent">
            <span className='absolute w-full h-full -z-10'>
                <Image
                    src={background}
                    className='inset-0 w-full h-full'
                    alt='background'
                />
            </span>
          {products.map((product) => (
            <div key={product.id} className='shadow-[0_25px_50px_-12px_rgba(255,255,255,0.25)] bg-[#0F172A] py-5 rounded-md'>
              <div className="relative">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-60 w-full object-cover object-center"
                  />
                </div>
                <div className="relative mt-4 flex flex-col gap-y-2 px-5">
                  <h3 className="text-2xl font-medium leading-6 text-white">{product.name}</h3>
                  <p className="text-lg mt-4 font-light text-white">{product.desc}</p>
                </div>
              </div>
              <div className="mt-6 px-5">
                <a
                  href={product.href}
                  className="flex items-center justify-center gap-x-3 rounded-md border-2 border-white bg-transparent px-8 py-2 text-lg font-normal text-white hover:bg-white hover:text-[#0F172A]"
                >
                    <Image
                    src={basket}
                    className='inset-0 w-6 h-6'
                    alt='basket'
                    />
                    <span>Buy Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
