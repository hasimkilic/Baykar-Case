import Image from "next/image";
import ellipses from "../public/icons/ellipses.png";
import footerCard from "../public/icons/footer-card.png";
export default function FooterTop() {
  return (
    <div className="w-full bg-[#78350e] h-screen">
        <div className="max-w-5xl mx-auto py-16 sm:px-6 lg:px-8 bg-world-section h-[90%] bg-center flex flex-col justify-center items-center relative">
            <Image src={footerCard} width={255} height={250} alt="footer-card" className="absolute left-4 top-20 pb-20"/>
            <Image src={ellipses} width={725} height={455} alt="ellipses" className="ml-20 mb-10"/>
            <span className="absolute text-[#FFFBEB] bottom-[15rem] lg:bottom-[17rem] text-4xl lg:text-[96px] lg:leading-[105px] font-extrabold">11,658,467</span>
            <span className="absolute bottom-[13rem] lg:bottom-[13.5rem] text-[#FFFBEB] text-2xl lg:text-[56px] lg:leading-[61px] font-extrabold">Shoes Collected</span>
        </div>
    </div>
  )
}
