import Image from "next/image";

import search from "../public/icons/search.svg";
import check from "../public/icons/shield-check.svg";
import rightArrow from "../public/icons/arrow-right.svg";
import settings from "../public/icons/settings-alt.svg";
import rocket from "../public/icons/rocket.svg";
import computer from "../public/icons/screen.svg"
import podcast from "../public/icons/podcast.svg"
import desktops from "../public/icons/desktops.png";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function GrowYour() {
  const navigation = [
    {
      name: "Bibendum tellus",
      icon: search,
      iconRight: rightArrow,
      current: true,
    },
    { name: "Cras eget", icon: check, iconRight: rightArrow, current: false },
    {
      name: "Dolor pharetra",
      icon: rocket,
      iconRight: rightArrow,
      current: false,
    },
    {
      name: "Amet, fringilla",
      icon: computer,
      iconRight: rightArrow,
      current: false,
    },
    { name: "Amet nibh", icon: podcast, iconRight: rightArrow, current: false },
    { name: "Sed velit", icon: settings, iconRight: rightArrow, current: false },
  ];
  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col text-center lg:text-left items-start justify-between pt-8 pb-12 gap-y-4">
        <h2 className="text-6xl leading-[61px] font-bold text-[#0F172A]">
          Grow your collection
        </h2>
        <p className="text-[#0F172A] font-light text-lg leading-7">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center lg:justify-between lg:items-start w-full gap-x-2">
        <div className="w-1/4 mt-4">
          <div className="flex flex-col justify-start items-start">
            <ul className="flex md:flex-col justify-start gap-y-3">
              {navigation.map((item) => (
                <button key={item.name}>
                  <li
                    className={classNames(
                      item.current
                        ? "bg-white text-[#0F172A] text-lg leading-6 shadow-md"
                        : "bg-transparent text-[#0F172A] text-lg leading-6",
                      "px-5 py-2 rounded-lg w-64 h-14 flex justify-start items-center"
                    )}
                  >
                    <Image src={item.icon} width={24} height={24} alt="icon" />
                    <span className="ml-5">{item.name}</span>
                    <Image
                      className={classNames(
                        item.current
                          ? "opacity-100"
                          : "opacity-0",
                        "ml-auto"
                      )}
                      src={item.iconRight}
                      width={24}
                      height={24}
                      alt="icon"
                    />
                  </li>
                </button>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-3/4">
          <div className="w-full">
            <Image src={desktops} width={1096} height={556} alt="desktops" className="object-fill"/>
          </div>
        </div>
      </div>
    </div>
  );
}
