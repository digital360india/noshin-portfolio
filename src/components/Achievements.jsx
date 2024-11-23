import Image from "next/image";
import React from "react";

const Achievements = () => {
  return (
    <div className="md:pb-96 pb-10 bg-[#F3F3F3]">
      <div className="md:flex  md:items-center md:justify-evenly bg-gray-50 py-12 px-6 pt-24">
        <div className="md:hidden justify-center items-center pb-32">
          <div className="flex  justify-center items-center">
            <p className="text-[#A14622] md:text-[25px] text-center text-[15px] pt-4">
              SUCCESS STORIES & ACHIEVEMENTS
            </p>
            <Image
              src="/Star.svg"
              alt="star"
              width={1000}
              height={1000}
              className="w-[35px] h-[70px] hidden md:block"
            />
          </div>

          <p className="md:text-[40px] text-center text-[20px] font-extrabold mt-4 text-[#A14622] font-manrope">
            Successful Admissions
          </p>

          <div className="flex justify-center items-center">
            <Image
              src="/line.svg"
              className="w-[213px] h-10"
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/image.svg"
              alt="Student"
              width={1000}
              height={1000}
              className="object-cover rounded-lg shadow-md md:w-[469px] md:h-[471px] w-[210px] h-[210px]"
            />

            <Image
              src="/circle.svg"
              alt="Circle"
              width={1000}
              height={1000}
              className="absolute top-[60%] left-[50%] w-[850px] transform -translate-x-[50%] -translate-y-[50%]"
            />
          </div>

          <div className="absolute bottom-0 right-16">
            <div className="w-20 h-20 bg-orange-100 rounded-full blur-3xl"></div>
          </div>

          <div className="absolute top-[-110px] right-[12px] w-[270px] md:top-[-50px] md:right-[50px] bg-white shadow-lg p-4 md:w-[270px] md:h-[122px] rounded-lg">
            <div className="absolute top-[-35px] left-[-20px]">
              <Image
                src="/Star.svg"
                alt="star"
                width={1000}
                height={1000}
                className="w-[35px] h-[70px]"
              />
            </div>

            <h4 className="text-sm font-semibold text-[#5F5F5F] leading-snug">
              <span className="text-[#A14622] font-bold">Vasundhra Goel</span>{" "}
              secured <span className="text-[#5F5F5F]">admission</span> to{" "}
              <span className="font-bold">Welham Girl&apos;s School</span> with a{" "}
              <br />
              <span className="text-[#A14622] font-bold">Perfect Score</span> in
              their entrance exam and an impressive personal interview.
            </h4>
          </div>

          <div className="absolute bottom-[-90px] left-[7px] md:bottom-[-20px] md:left-[50px] bg-white shadow-lg p-4 w-[214px] h-[100px] rounded-lg">
            <div className="absolute top-[-35px] left-[-20px]">
              <Image
                src="/Star.svg"
                alt="star"
                width={1000}
                height={1000}
                className="w-[35px] h-[70px]"
              />
            </div>
            <h4 className="text-sm font-semibold text-[#5F5F5F] leading-snug">
              <span className="text-[#A14622] font-bold">Arratreca</span>{" "}
              received offers from{" "}
              <span className="font-bold">Mayo College</span> and{" "}
              <span className="font-bold">Scindia</span>.
            </h4>
          </div>
        </div>

        <div className="md:w-[539px] md:h-[400px] text-center mt-0 justify-center items-center flex flex-col">
          <div className=" hidden md:block">
            <div className="flex items-center">
              <h4 className="text-[#A14622] md:text-[25px] text-[15px] pt-4">
                Success Stories & Achievements
              </h4>
              <Image
                src="/Star.svg"
                alt="star"
                width={1000}
                height={1000}
                className="w-[35px] h-[70px]"
              />
            </div>

            <span className="md:text-[40px] text-[20px] font-extrabold mt-4 text-[#A14622] font-manrope">
              Successful Admissions
            </span>

            <div className="">
              <Image
                src="/line.svg"
                className="w-[213px] h-10"
                width={1000}
                height={1000}
                alt=""
              />
            </div>
          </div>

          <p className="text-[#5F5F5F] text-lg leading-relaxed mt-32">
            Over the years, I&apos;ve helped many students secure admission to{" "}
            <span className="font-bold text-[#A14622]">
              Prestigious Boarding Schools
            </span>
            , including Welham Girl&apos;s School, Mayo College, Scindia Kanya
            Vidyalaya, and The Doon School.
          </p>
          <p className="text-[#5F5F5F] text-lg leading-relaxed mt-6">
            After comprehensive preparation sessions focused on{" "}
            <span className="font-bold text-[#A14622]">
              Academics, Personality & Interview Skills
            </span>
            .
          </p>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="w-full h-[100vh] relative">
          <Image
            src="/bgimg.svg"
            className="object-cover w-full"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div>

      {/* <div className=" md:hidden">
        <div className="w-full h-[100vh] relative">
          <Image
            src="/bgimg2.svg"
            className="object-cover w-full"
            width={1000}
            height={1000}
            alt=""
          />
        </div>
      </div> */}



      <div className=" md:min-h-screen pb-24 bg-[#A34724] w-full md:hidden px-6 ">
   <div className="pt-24">
      <div className="border-t-8  border-l-8 border-r-8 border-s-2 drop-shadow-lg border-[#C8927C] bg-white p-4">
      <div className=" absolute -top-16 -right-6 bg-[#ebab92] h-[85px] w-[85px] rounded-full border-4 border-white "></div>

          <h2 className="text-center text-[#A34724] text-[20px]   font-semibold font-tienne">
            Teaching Philosophy
          </h2>
          </div>
        <div className=" relative bg-white shadow-lg  md:w-[770px] md:h-[570] p-8 ">

         
          
          <div className=" absolute -bottom-14 -left-4 bg-[#f5bea8] h-[85px] w-[85px] rounded-full border-4 border-white"></div>

          <p className="text-gray-700 leading-relaxed">
            <span className="text-3xl text-[#A34724] font-bold">I</span> believe
            that success in boarding school admissions requires more than just
            academic ability; it requires confidence, clear communication, and
            the ability to manage pressure. My teaching approach focuses on
            holistic development — preparing students academically, emotionally,
            and socially for the challenges ahead. I strive to create a
            supportive and engaging online environment that encourages students
            to grow not only as learners but as individuals ready to take on new
            challenges in top-tier boarding schools.
          </p>
        </div>
      </div>

      
      </div>
    </div>
  );
};

export default Achievements;
