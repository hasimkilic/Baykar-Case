import Image from "next/image";

import avatar from "../public/icons/avatar.avif";
import vector from "../public/icons/vector.svg";
import shells from "../public/icons/shells.svg";
import artvenue from "../public/icons/artvenue.svg";


const people = [
  {
    iconname: "Zoomer",
    title:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    icon: vector,
    author: {
      name: "Hellen Jummy",
      role: "Team Lead",
      href: "#",
      imageUrl: avatar,
    },
  },
  {
    iconname: "SHELLS",
    title:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    icon: shells,
    author: {
      name: "Hellen Jummy",
      role: "Co-Founder",
      href: "#",
      imageUrl: avatar,
    },
  },
  {
    iconname: "ArtVenue",
    title:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    icon: artvenue,
    author: {
      name: "Hellen Jummy",
      role: "Manager",
      href: "#",
      imageUrl: avatar,
    },
  },
];

export default function BecauseOfWhy() {
  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-8">
        <h2 className="text-6xl leading-[61px] font-bold text-[#0F172A]">
          Because they love us
        </h2>
        <div className="flex justify-center gap-x-2">
          <button>
            {/* <Image src={leftArrow} width={48} height={48} alt="leftArrow" /> */}
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_1_1221)">
                <rect
                  x="4"
                  y="3"
                  width="46"
                  height="46"
                  rx="23"
                  stroke="#78350F"
                  stroke-width="2"
                />
                <path
                  d="M33.5 26H21H33.5ZM21 26L27 20L21 26ZM21 26L27 32L21 26Z"
                  fill="#78350F"
                />
                <path
                  d="M21 26L27 32M33.5 26H21H33.5ZM21 26L27 20L21 26Z"
                  stroke="#78350F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_1_1221"
                  x="0"
                  y="0"
                  width="54"
                  height="54"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1221"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_1_1221"
                    result="effect2_dropShadow_1_1221"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1_1221"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          <button>
            {/* <Image src={rightArrow} width={48} height={48} alt="rightArrow"/> */}
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_1_1222)">
                <rect
                  x="4"
                  y="3"
                  width="46"
                  height="46"
                  rx="23"
                  stroke="#78350F"
                  stroke-width="2"
                />
                <path
                  d="M21 26H33.5H21ZM33.5 26L27.5 20L33.5 26ZM33.5 26L27.5 32L33.5 26Z"
                  fill="#78350F"
                />
                <path
                  d="M33.5 26L27.5 32M21 26H33.5H21ZM33.5 26L27.5 20L33.5 26Z"
                  stroke="#78350F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_1_1222"
                  x="0"
                  y="0"
                  width="54"
                  height="54"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1222"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_1_1222"
                    result="effect2_dropShadow_1_1222"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1_1222"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-[#FDE68A] px-16 pt-5 rounded-sm h-96">
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {people.map((person) => (
            <li
              key={person.iconname}
              className="col-span-1 flex flex-col rounded-[20px] bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col px-5 pt-12">
                <div className="flex justify-start items-center gap-x-2 pb-3">
                  <Image className="w-8 h-8" src={person.icon} width={32} height={32} alt="icon" />
                  <h3 className="text-2xl leading-6 font-normal text-[#475569]">
                    {person.iconname}
                  </h3>
                </div>
                <div className="pt-4">
                  <span className="text-2xl font-light leading-9 text-black flex justify-start items-start text-left">
                    {person.title}
                  </span>
                </div>
              </div>
              <div className="pb-5">
                <div className="relative mt-8 ml-5 flex justify-start items-center text-left gap-x-4">
                  <Image
                    src={avatar}
                    width={40}
                    height={40}
                    alt="person"
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-md leading-6">
                    <p className="font-light text-black">
                      <a href={person.author.href}>
                        <span className="absolute inset-0" />
                        {person.author.name}
                      </a>
                    </p>
                    <p className="text-[#475569] font-light text-sm">
                      {person.author.role}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
