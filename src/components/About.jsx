import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className=" ">
        <div className="flex flex-col justify-center items-center md:space-y-6">
          <h1 className="text-[#A14622] md:text-2xl ">ABOUT ME</h1>
          <p className="text-[#555555] font-tienne md:w-[668px] w-[315px] h-[54px] md:h-[54px] text-center md:text-[36px] font-semibold">
            Some core information about me
          </p>

          <Image
            src="/line.svg"
            className="w-[213px] h-10  object-cover"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="md:mt-16 mt-8 bg-[#A14622] py-1 ">
          <Image
            src="/video.svg"
            className="md:w-full w-[415px] md:h-[500px] h-[144px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
        <p className="text-[#5F5F5F] md:px-40 px-8 text-left  md:text-[24px]  md:my-20 my-8 font-manrope ">
          After transitioning from a background in physiotherapy, I&apos;ve dedicated
          myself to helping young learners navigate the competitive entrance
          processes for renowned institutions like Welham Girls&apos; School, Mayo
          College, Scindia Kanya Vidyalaya, The Doon School, and others. My goal
          is to guide students toward academic success while fostering their
          personal growth, helping them stand out in competitive entrance exams,
          interviews, and overall school applications.
        </p>
      </div>
    </div>
  );
};

export default About;
