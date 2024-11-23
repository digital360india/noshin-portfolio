
"use client";

import Image from "next/image";
import React, { useState } from "react";

const Experiences = [
  {
    number: "01",
    description1: "Tailored Study Plans for Academic Excellence and Balanced Growth",
    description2:
       " Developed personalized study schedules and strategies for students, focusing on enhancing academic skills while maintaining a balanced lifestyle",
},

  {
    number: "02",
    description1: "Holistic Preparation for Boarding School Admissions: Collaborating with Families",
    description2:
     "Worked with families to prepare their children for entrance exams and school - specific criteria, ensuring they are well - rounded applicants",
},

  {
    number: "03",
    description1: "Holistic Preparation for Boarding School Admissions: Collaborating with Families",
    description2:
      "Coordinated group study sessions and workshops that addressed common academic challenges in competitive exams and boarding school interviews",
},

];

const Experience2 = () => {

  return (
    <div className="bg-[#F3EDE6]">

      <div className="flex flex-row items-center pb-20">
        <div className="bg-[#A14622] md:w-[260px] w-[100px] md:h-[200px] h-[81px] md:p-16 p-6">
          <Image
            src="/Literature.svg"
            className="md:w-[83px] md:h-[83px] w-[38px] h-[38px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="md:w-[1000px] w-[215px] md:pl-20 pl-10">
          <h1 className="md:text-[40px] text-[20px] text-[#000000] font-bold">
          Academic Coach  &  Study Mentor
          </h1>
          
        </div>
      </div>

      <div className=" bg-[#F3EDE6] pb-16 ">
        {Experiences.map((Experience, index) => (
          <div
            className={`md:flex md:justify-between border-2 border-black group border-t border-b md:p-20 md:h-[340px] bg-[#F3EDE6] hover:bg-[#A14622] hover:text-white p-14 space-y-4`}
            key={index}
            
          >
            <h1 className="md:text-[30px] text-[15px] font-bold">{Experience.number}</h1>
            <p className="md:w-[325px] w-[315px] h-[40px] md:h-[82px] md:text-[25px] text-[15px] font-semibold">
              {Experience.description1}
            </p>
            <p className="text-[#A14622] md:text-[25px] text-[12px] md:w-[540px] md:h-[204px]  w-[315px] h-[40px] text-left group-hover:text-white">
              {Experience.description2}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience2;
