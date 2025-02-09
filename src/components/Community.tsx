import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Mona_Sans } from "next/font/google";

const Mona = Mona_Sans({ weight: "700", subsets: ["latin"] });

// Import images dynamically
const imageCount = 31;
const images: string[] = Array.from({ length: imageCount }, (_, i) => 
  `/comm/${i + 1}.png`
);

export default function Community(): React.JSX.Element {
  return (
    <div className="flex flex-col justify-center items-center bg-bg-black w-full gap-6 md:gap-12 my-12">
      <div className="w-[90%] md:w-[80%] h-auto">
        <h1 className={`text-5xl ${Mona.className} text-white text-center mb-14 mt-12`}>
          Community Partners
        </h1>
      </div>
      <Marquee>
        {images.slice(0, Math.ceil(images.length / 2)).map((src: string, index: number) => (
          <Image
        key={index}
        src={src}
        alt={`Community Partner ${index + 1}`}
        height={200}
        width={300}
        className="md:mx-12 w-1/2 md:w-[60%]"
          />
        ))}
      </Marquee>
      <Marquee direction="right">
        {images.slice(Math.ceil(images.length / 2)).map((src: string, index: number) => (
          <Image
            key={index + images.length / 2}
            src={src}
            alt={`Community Partner ${index + 1}`}
            height={200}
            width={300}
            className="md:mx-12 w-1/2 md:w-[60%]"
          />
        ))}
      </Marquee>
    </div>
  );
}
