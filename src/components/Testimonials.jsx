import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-[#F3F3F3] pb-6">
      <div className="">
        <div className="flex flex-col justify-center items-center md:space-y-6 space-y-3">
          <h1 className="text-[#A14622] md:text-2xl">TESTIMONIALS & REVIEWS</h1>
          <p className="text-[#555555] font-tienne md:w-[668px] h-[54px] md:text-center md:text-[36px] font-semibold">
            My Impressions..
          </p>

          <Image
            src="/line.svg"
            className="w-[213px] h-10"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="mt-16 bg-[#A14622] py-1 ">
          <Image
            src="/video.svg"
            className="md:w-full md:h-[500px] w-[414px] h-[144px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>

      <div className="md:flex justify-center items-center gap-10 md:m-20 space-y-8 md:space-y-0 px-6 md:px-0 pt-5 md:pt-0">
        <div className="bg-[#A14622]  md:w-[520px] md:h-[500px]">
          <Image
            src="/ticon.svg"
            className="w-[100px] h-[100px] p-4"
            width={1000}
            height={1000}
            alt=""
          />

          <p className="text-[#FFFFFF] text-[12px] md:text-[25px] p-4">
            Dr. Noshin&apos;s coaching truly helped me during my admission process!
            Her interview tips were so valuable, and I felt much more confident
            when facing the panel. I&apos;m now a proud student of Mayo College!
          </p>
          <p className="text-[#FFFFFF] text-[16px] md:text-[25px] p-4">
            <span className="font-bold text-[20px] md:text-[30px]">Vasunndhra Goel </span>
            (Student)
          </p>
          <p className="text-[#FFFFFF] text-[12px] md:text-[20px] p-4">6th, Welham Girls&apos;s School</p>
        </div>

        <div className="bg-[#A14622] md:w-[520px] md:h-[500px]">
          <Image
            src="/ticon.svg"
            className="w-[100px] h-[100px] p-4"
            width={1000}
            height={1000}
            alt=""
          />

          <p className="text-[#FFFFFF] text-[12px]  md:text-[25px] p-4">
            We struggled to navigate the boarding school admission process until
            we found Dr. Noshin. Her personalized approach helped our daughter
            prepare academically and emotionally, and she received offers from
            multiple top schools!
          </p>
          <p className="text-[#FFFFFF] text-[16px] md:text-[25px] p-4">
            <span className="font-bold text-[20px] md:text-[30px]">Princy Gupta</span>
            (Parent)
          </p>
          <p className="text-[#FFFFFF] text-[12px] md:text-[20px] p-2">Amish Gupta (Daughter), 7th, Welham Girls&apos;s School</p>

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
