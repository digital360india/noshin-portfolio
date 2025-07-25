import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#F3EDE6]">
      <div className="text-[#A44924] flex flex-col justify-center items-center pt-10 pb-14 text-[12px] lg:text-[25px] px-4">
        SKILLS & EXPERTIES
        <div className="pt-6">
          <p className="text-[#555555] text-[20px] lg:text-[40px] text-center">
            What services I Offer...
          </p>
        </div>
        <Image
          src="/line.svg"
          className="w-[213px] h-10"
          width={213}
          height={40}
          alt=""
        />
      </div>

      <div className="bg-[#A44924]">
        {[
          {
            number: "01",
            title: "Competitive Entrance Exam Coaching",
            points: [
              "Tailored strategies for entrance exams of top Indian boarding schools (e.g., written exams, IQ tests, and personality tests).",
              "Focus on subjects like English, Mathematics, General Knowledge, and Logical Reasoning.",
              "Mock exams and practice tests with feedback",
            ],
            image: "/Frame1-2.svg",
          },
          {
            number: "02",
            title: "Boarding School Interview Preparation",
            points: [
              "Personal interview coaching to build confidence, presentation skills, and clarity of thought.",
              "Role-playing exercises to prepare students for various interview scenarios.",
              "Guidance on body language, articulation, and responding to tricky questions.",
            ],
            image: "/Frame2.svg",
          },
          {
            number: "03",
            title: "Personality Development & Soft Skills",
            points: [
              "Communication, confidence building, and emotional intelligence for students.",
              "Leadership skills and teamwork.",
              "Interview etiquette, self - presentation, and grooming",
            ],
            image: "/Frame3.svg",
          },
          {
            number: "04",
            title: "Academic Coaching & Study Strategies",
            points: [
              "Time management, memory techniques, and exam preparation.",
              "Goal - setting and academic motivation.",
              "Preparing students for high - performance academic environments.",
            ],
            image: "/Frame4.svg",
          },
        ].map((item, index) => (
          <div
            key={index}
            className=" py-10 w-full lg:sticky top-0 bg-[#A44924] lg:z-10  px-10"
          >
            <hr className="border-t-2 border-white mb-4 hidden lg:block" />
            <div className="lg:flex lg:justify-between lg:items-start gap-10">
              {/* Text Content */}
              <div className="pt-6 flex-1">
                <div className="space-y-5">
                  {/* Mobile Image */}
                  <div className="lg:hidden mb-4">
                    <hr className="border-t-2 border-white mb-4" />
                    <Image
                      src={item.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="w-full max-w-[500px] h-auto mx-auto"
                    />
                  </div>
                  <p className="text-white">{item.number}</p>
                  <p className="text-white text-[20px] lg:text-[35px] w-[50vw]">
                    {item.title}
                  </p>
                </div>
                <div className="pt-6">
                  <div className="text-white space-y-5 text-[15px] lg:text-[25px]">
                    {item.points.map((point, i) => (
                      <p key={i}>{point}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop Image */}
              <div className="hidden lg:block max-w-[400px] w-full h-auto">
                <Image
                  src={item.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
