import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="lg:w-full lg:h-screen h-[917px] lg:bg-no-repeat bg-cover bg-bottom lg:flex lg:justify-evenly mb-28 pt-16 justify-center items-center"
        style={{ backgroundImage: 'url("/Desktopicon.svg")' }}
      >
        <div className="lg:w-[540px]  font-tienne lg:pt-24 pt-20 px-14  lg:px-0 py-5 lg:py-0">
          <span className="text-[#FFFFFF] lg:text-[52px] text-[30px] font-bold">
            HELLO I AM
          </span>
          <br />
          <span className="text-[#FFFFFF] lg:text-[48px] text-[30px]  py-5 lg:py-0 ">
            Dr. Noshin Aslam
          </span>

          <p className="lg:text-[25px] text-[15px] text-[#FFFFFF] py-5 lg:py-0 leading-tight">
            An experienced online educator with a focus on preparing students
            for admission into India&apos;s most prestigious boarding schools.
          </p>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="pt-8">
            <div className="lg:w-[180px] lg:h-[180px] px-3 py-3 w-[115px] h-[115px] bg-[#FFFFFF] lg:rounded-[40px] rounded-[15px] lg:px-7 lg:py-4 absolute lg:left-[-60px] left-[30px] lg:leading-tight">
              <p className="lg:text-[60px] text-[32px] font-semibold ">5+</p>
              <span className="lg:text-[20px] text-[10px]  lg:mt-2 lg:leading-7 leading-3">
                years of Guidance & Consultation
              </span>
            </div>
          </div>

          <Image
            src="/noshin.jpg"
            className="lg:h-[622px] lg:w-[600px] w-[276px] h-[295px] rounded-full object-cover mt-8"
            alt="Dr. Noshin Aslam"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
