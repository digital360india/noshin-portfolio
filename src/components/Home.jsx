import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      <div
        className="md:w-full md:h-screen h-[917px] md:bg-no-repeat bg-cover bg-bottom md:flex md:justify-evenly mb-28 pt-16 justify-center items-center"
        style={{ backgroundImage: 'url("/Desktopicon.svg")' }}
      >
        <div className="md:w-[540px]  font-tienne pt-40 px-14  md:px-0 py-5 md:py-0">
          <span className="text-[#FFFFFF] md:text-[55px] text-[30px] font-bold">HELLO I AM</span>
          <br />
          <span className="text-[#FFFFFF] md:text-[55px] text-[30px] font-bold py-5 md:py-0 ">
            Dr. Noshin Aslam
          </span>

          <p className="md:text-[30px] text-[15px] text-[#FFFFFF] py-5 md:py-0">
            An experienced online educator with a focus on preparing students
            for admission into India&apos;s most prestigious boarding schools.
          </p>
        </div>

        <div className="relative flex justify-center items-center">

          <div className="pt-8">
          <div className="md:w-[200px] md:h-[200px] px-3 py-3 w-[115px] h-[115px] bg-[#FFFFFF] md:rounded-[40px] rounded-[30px] md:px-7 md:py-4 absolute md:left-[-70px] left-[30px] md:leading-tight">
            <p className="md:text-[67px] text-[32px] font-bold ">5+</p>
            <span className="md:text-[22px] text-[10px] font-bold  md:mt-2 md:leading-7 leading-3">
              years of Guidance & Consultation
            </span>
          </div>
          </div>
          

          <img
            src="/img.svg"
            className="md:h-[622px] md:w-[600px] w-[276px] h-[295px] rounded-full object-cover mt-8"
            alt="Dr. Noshin Aslam"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
