import Image from "next/image";

import avatar from "../public/icons/avatar.avif";
import vector from "../public/icons/vector.svg";
import shells from "../public/icons/shells.svg";
import artvenue from "../public/icons/artvenue.svg";
import leftArrow from "../public/icons/left-arrow.svg";
import rightArrow from "../public/icons/right-arrow.svg";

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
    <div className="mx-auto max-w-7xl py-16 sm:px-4 lg:px-6">
      <div className="flex flex-col lg:flex-row items-center justify-between py-8">
        <h2 className="text-3xl lg:text-6xl lg:leading-[61px] font-bold text-[#0F172A]">
          Because they love us
        </h2>
        <div className="md:flex lg:justify-center lg:gap-x-2 hidden">
          <button>
            <Image src={leftArrow} width={48} height={48} alt="leftArrow" />
          </button>
          <button>
            <Image src={rightArrow} width={48} height={48} alt="rightArrow"/>
          </button>
        </div>
      </div>
      <div className="bg-[#FDE68A] px-16 pt-5 rounded-sm h-96">
        <ul
          role="list"
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8 lg:px-5"
        >
          {people.map((person) => (
            <li
              key={person.iconname}
              className="col-span-1 flex flex-col rounded-[20px] bg-white text-center shadow"
            >
              <div className="flex flex-1 flex-col px-7 pt-12">
                <div className="flex justify-start items-center gap-x-2 pb-3">
                  <Image src={person.icon} width={32} height={32} alt="icon" />
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
                    className="rounded-full bg-gray-50"
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
