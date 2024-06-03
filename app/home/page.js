"use client"
import { useState } from 'react';
import Image from 'next/image';

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Section from '@/components/Section';
import BestOf from '@/components/BestOf';

const navigation = [
  { name: 'Products', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Resours', href: '#' },
  { name: 'Log In', href: '#' },
];


export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#fffbed]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-24" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Collers</span>
              <span className="font-semibold text-3xl text-[#78350F]">Collers</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-normal leading-6 text-[#78350F] hover:opacity-75">
                {item.name}
              </a>
              
            ))}
            <button>
            <a
                href="#"
                className="rounded-lg px-3.5 py-2.5 text-sm font-normal text-[#78350F] bg-transparent border border-[#78350F] hover:bg-[#78350F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78350F]"
              >
                Sign up now
              </a>
            </button>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <span className="font-semibold text-3xl text-[#78350F]">Collers</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-6 text-[#78350F] hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate pt-14">
        {/* üçgen bg */}
        {/* <div className='absolute isolation-auto w-96 bottom-0 right-0 bg-transparent border-l-[100px] border-l-transparent border-b-[100px] border-[#fff4c7] '>
        </div> */}
        <div className=" mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
            <h1 className="max-w-2xl text-7xl font-bold text-[#0F172A] sm:text-6xl">
                Collectible Sneakers
            </h1>
            <p className="mt-8 text-lg leading-7 text-[#0F172A] font-normal">
                Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip
            nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-lg px-3.5 py-2.5 text-lg font-medium text-[#78350F] shadow-sm bg-transparent border-2 border-[#78350F] hover:bg-[#78350F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78350F]"
              >
                Sign up now
              </a>
              <a href="#" className="flex gap-x-2 text-md font-medium leading-6 text-[#78350F]">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                    </svg>
                  </span>
                  <span>Watch Demo</span>
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className='relative w-[486px] h-[423px]'>
                <span className='bg-[#FBBF24] rounded-[50px] w-[367px] h-[372px] absolute inset-0 top-7 right-5 m-auto '>
                </span>
                <Image
                        src="/shoes.png"
                        className='absolute'
                        width={486}
                        height={388}
                        alt="shoes"
                    />
            </div>
          </div>
        </div>
        <Section/>
        <BestOf/>
      </div>
    </div>
  )
}
