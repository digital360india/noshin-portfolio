import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contect = () => {
  return (
    <>
      <div className="lg:flex justify-center lg:bg-white bg-[#F3F3F3] items-center lg:m-20 px-6 lg:px-0 pt-16 pb-16 lg:pb-0 ">
        <div className="bg-[#A14622] lg:text-[50px] text-[25px] text-[#FFFFFF] w-full p-10 px-6 lg:px-0 lg:w-[418px] lg:p-8 text-center justify-center -mr-10 z-20 font-tienne">
          Contact Information
        </div>

        <div className="text-[#5F5F5F]  bg-[#F3F3F3] font-tienne ">
          <div className=" border border-[#A14622] px-6 lg:px-24 py-10 space-y-6 ">
            <p className="font-bold text-[20px] lg:text-[25px] ">Email</p>
            <a href="mailto:Noshinaslam2211@gmail.com">
              Noshinaslam2211@gmail.com
            </a>

            <p className="font-bold text-[20px] lg:text-[25px]">LinkedIn</p>
            <a href="linkedin.com/in/noshin-aslam-94637b1a4">
              linkedin.com/in/noshin-aslam-94637b1a4
            </a>

            <div className="flex flex-wrap gap-3">
              <p className="font-bold text-[20px] lg:text-[25px]">Website</p>
              <a
                href="https://www.boardingadmissions.com/"
                className="break-words w-full "
              >
                https://www.boardingadmissions.com
              </a>
            </div>

            <p className="font-bold text-[20px] lg:text-[25px]">
              Social Media Links
            </p>

            <div className="flex flex-wrap gap-3">
              <Image
                src="/insta.svg"
                className="w-[30px] h-[30px]    "
                width={1000}
                height={1000}
                alt=""
              />
              <p className="font-bold text-[16px] lg:text-[25px]">Instagram:</p>
              <a
                href="dr.noshin_aslam"
                className="break-words w-full "
              >
                dr.noshin_aslam
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <Image
                src="/facebook.svg"
                className="w-[30px] h-[30px]"
                width={1000}
                height={1000}
                alt=""
              />
              <p className="font-bold text-[16px] lg:text-[25px]">Facebook :</p>
              <a
                href="https://www.facebook.com/noshin.aslam.1"
                className="break-words w-full "
              >
                https://www.facebook.com/noshin.aslam.1
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex justify-center items-center lg:p-20 bg-[#F3EDE6] px-6 lg:px-0 pb-12  ">
        <div className="pt-10">
          <div className="border-[6px] border-[#000000] text-[#000000] w-full p-6 bg-[#F3F3F3] lg:hidden ">
            <p className="lg:text-[40px] text-[20px] font-bold font-tienne pl-8">
              Future Projects & Plans
            </p>
          </div>
          <div className="-mb-16 -ml-10 hidden lg:block">
            <Image
              src="/cir.svg"
              className="w-[115px] h-[118px]    "
              width={1000}
              height={1000}
              alt=""
            />
          </div>
          <div className="bg-[#A14622] text-[#FFFFFF] lg:text-[25px] txt-[16px] w-full p-8  lg:w-[1032px] py-16 lg:py-16 lg:p-20">
            <p className="font-tienne">
              I am working on expanding my online platform to offer video
              courses and workshops that can guide students across various
              aspects of the boarding school admission process — from exam
              preparation to emotional intelligence training. I aim to reach
              more students across India and provide them with the tools they
              need to succeed in this competitive landscape.
            </p>
          </div>
        </div>

        <div className="border-[6px] border-[#000000] text-[#000000] w-[320px] px-8 mt-10 z-10 -ml-10 bg-[#F3F3F3] hidden lg:block">
          <p className="text-[40px] font-bold font-tienne">
            Future Projects & Plans
          </p>
        </div>
      </div>
    </>
  );
};

export default Contect;
