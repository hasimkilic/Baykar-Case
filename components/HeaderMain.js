import Image from "next/image";
import shoes from "../public/icons/shoes.png";

export default function HeaderMain() {
  return (
<div className="mx-auto max-w-7xl px-6 py-24 overscroll-x-none sm:py-32 flex-col lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-x-10 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
    <h1 className="max-w-2xl text-7xl font-bold text-[#0F172A] sm:text-6xl">
      Collectible Sneakers
    </h1>
    <p className="mt-8 text-lg leading-7 text-[#0F172A] font-normal">
      Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit.
    </p>
    <div className="mt-10 flex items-center gap-x-6">
      <a
        href="#"
        className="rounded-lg px-3.5 py-2.5 text-lg font-medium text-[#78350F] shadow-sm bg-transparent border-2 border-[#78350F] hover:bg-[#78350F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#78350F]"
      >
        Sign up now
      </a>
      <a
        href="#"
        className="flex gap-x-2 text-md font-medium leading-6 text-[#78350F]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
            />
          </svg>
        </span>
        <span>Watch Demo</span>
      </a>
    </div>
  </div>
  <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow flex justify-center lg:justify-end">
    <div className="relative max-w-xs sm:max-w-md lg:max-w-xl lg:w-[486px] lg:h-[423px]">
      <span className="bg-[#FBBF24] rounded-[50px] w-[200px] h-[200px] sm:w-[367px] sm:h-[367px] lg:w-[367px] lg:h-[372px] absolute inset-0 top-7 right-5 mx-auto"></span>
      <Image
        src={shoes}
        className="relative w-full h-auto"
        alt="shoes"
        width={300}
        height={300}
      />
    </div>
  </div>
</div>


  );
}
