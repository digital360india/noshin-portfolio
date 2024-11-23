"use client";

import Image from "next/image";
import React, { useState } from "react";

const Experiences = [
  {
    number: "01",
    description1: "Elite Boarding School Admissions Coaching",
    description2:
      " Specialized in guiding students through the rigorous application process for top Indian boarding schools, focusing on entrance exampreparation, interview coaching, and personality development",
  },

  {
    number: "02",
    description1: "Personalized One-on-One Exam Coaching for Success",
    description2:
      " Conduct one - on - one coaching sessions, providing personalized study plans and strategies for excelling in competitive exams.",
  },

  {
    number: "03",
    description1: "Interactive Learning Modules for Exam and Interview Mastery",
    description2:
      " Develop interactive learning materials that simulate real exam conditions and interview settings",
  },

  {
    number: "04",
    description1:
      "Comprehensive Application Support: Personal Statements & Portfolios",
    description2:
      "Offer guidance on personal statement writing, portfolio creation, and other aspects of the school application process.",
  },

  {
    number: "05",
    description1:
      "Expert Mentorship for Admissions to Premier Indian Boarding Schools",
    description2:
      "Mentored students aiming for schools like Welham Girls' School, Mayo College, Scindia Kanya Vidyalaya, The Doon School, and more.",
  },
];

const Experience = () => {

  return (
    <div className="bg-[#F3EDE6]">
      <div className="flex flex-col justify-center items-center pt-16 pb-14">
        <h1 className="md:text-[40px] text-[20px] text-[#A14622] font-tienne ">Professional Experience</h1>

        <Image
            src="/line.svg"
            className="w-[213px] h-10"
            width={1000}
            height={1000}
            alt=""
          />
      </div>

      <div className="flex flex-row items-center pb-20">
        <div className="bg-[#A14622] md:w-[260px] w-[100px] md:h-[200px] h-[81px] md:p-16 p-6">
          <Image
            src="/Teacher.svg"
            className="md:w-[83px] md:h-[83px] w-[38px] h-[38px]"
            width={1000}
            height={1000}
            alt=""
          />
        </div>

        <div className="md:w-[1000px] w-[215px] md:pl-20 pl-10">
          <h1 className="md:text-[40px] text-[20px] text-[#000000] font-bold">
            Online Educator & Boarding School Admission Mentor
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

export default Experience;
