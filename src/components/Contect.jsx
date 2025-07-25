"use client";

import Image from "next/image";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.send(
        "service_403m16w",
        "template_57edpli",
        formData,
        "_gcViyaYmp8cIM5j_"
      );
      console.log("SUCCESS!", response);
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        topic: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center lg:bg-white bg-[#F3F3F3] items-center   px-6 pt-16 pb-16  gap-12 lg:gap-32">
        {/* Contact Information */}
        <div className="text-[#5F5F5F] bg-[#F3F3F3] font-tienne w-full max-w-xl">
          <div className="text-[28px] sm:text-[36px] lg:text-[44px] bg-[#A14622] text-[#F3F3F3] p-2 text-center">
            Contact Information
          </div>

          <div className="border border-[#A14622] px-6 sm:px-10 lg:px-20 py-10 space-y-6">
            <p className="font-medium text-[20px] lg:text-[25px]">Email</p>
            <a
              href="mailto:Noshinaslam2211@gmail.com"
              className="text-[18px] lg:text-[20px]"
            >
              noshinaslam2211@gmail.com
            </a>

            <p className="font-medium text-[20px] lg:text-[25px]">LinkedIn</p>
            <a
              href="https://linkedin.com/in/noshin-aslam-94637b1a4"
              className="text-[18px] lg:text-[20px]"
            >
              linkedin.com/in/noshin-aslam-94637b1a4
            </a>

            <div className="flex flex-col gap-1">
              <p className="font-medium text-[20px] lg:text-[25px]">Website</p>
              <a
                href="https://www.boardingadmissions.com/"
                className="break-words text-[18px] lg:text-[20px]"
              >
                https://www.boardingadmissions.com
              </a>
            </div>

            <p className="font-medium text-[20px] lg:text-[25px]">
              Social Media Links
            </p>

            <div className="flex items-center gap-3">
              <Image src="/insta.svg" width={30} height={30} alt="Instagram" />
              <p className="font-medium text-[20px] lg:text-[25px]">
                Instagram:
              </p>
              <a
                href="https://instagram.com/dr.noshin_aslam"
                className="text-[18px] lg:text-[20px]"
              >
                dr.noshin_aslam
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 break-words">
              <Image
                src="/facebook.svg"
                width={30}
                height={30}
                alt="Facebook"
                className="flex-shrink-0"
              />
              <p className="font-medium text-[20px] lg:text-[25px]">
                Facebook:
              </p>
              <a
                href="https://www.facebook.com/noshin.aslam.1"
                className="text-[18px] lg:text-[20px] break-words max-w-[220px] sm:max-w-full pl-10"
              >
                facebook.com/noshin.aslam.1
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-xl p-6 sm:p-8 md:p-12 lg:p-0">
          <div className="text-[#A14622] text-[30px] sm:text-[40px] lg:text-[56px]">
            Contact me
          </div>
          <div className="text-[#A14622] text-[20px] sm:text-[24px] lg:text-[32px]">
            Let&apos;s get in Touch
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-white mt-8 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border bg-transparent border-[#A1462299] outline-none text-black placeholder-[#A1462299] w-full h-[45px] text-[18px] sm:text-[20px] rounded-lg p-3"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border bg-transparent border-[#A1462299] outline-none text-black placeholder-[#A1462299] w-full h-[45px] text-[18px] sm:text-[20px] rounded-lg p-3"
              required
            />
            <input
              type="text"
              name="topic"
              placeholder="Topic"
              value={formData.topic}
              onChange={handleChange}
              className="border bg-transparent border-[#A1462299] outline-none text-black placeholder-[#A1462299] w-full h-[45px] text-[18px] sm:text-[20px] rounded-lg p-3"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="border bg-transparent resize-none outline-none border-[#A1462299] text-black placeholder-[#A1462299] w-full h-[125px] text-[18px] sm:text-[20px] rounded-lg p-3"
              required
            ></textarea>
            <button
              type="submit"
              className={`border bg-[#A14622] w-full h-[56px] text-[20px] sm:text-[24px] rounded-lg text-[#F3EFE5] ${
                loading
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-[#a14622d6]"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Future Projects Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:p-20 bg-[#F3EDE6] px-4 sm:px-6 lg:px-0 pb-12">
        <div className="pt-10 w-full max-w-4xl relative">
          <div className="border-[6px] border-[#000000] text-[#000000] w-full p-6 bg-[#F3F3F3] lg:hidden">
            <p className="text-[20px] sm:text-[30px] font-medium font-tienne">
              Future Projects & Plans
            </p>
          </div>
          <div className="absolute -top-10 -left-10 hidden lg:block">
            <Image
              src="/cir.svg"
              className="w-[115px] h-[118px]"
              width={115}
              height={118}
              alt=""
            />
          </div>
          <div className="bg-[#A14622] text-[#FFFFFF] text-[16px] sm:text-[18px] lg:text-[25px] w-full p-6 sm:p-8 lg:w-[980px] lg:py-16 lg:px-20">
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

        <div className="border-[6px] border-[#000000] text-[#000000] w-full lg:w-[320px] px-6 mt-10 z-10 bg-[#F3F3F3] hidden lg:block">
          <p className="text-[32px] lg:text-[40px] font-medium font-tienne">
            Future Projects & Plans
          </p>
        </div>
      </div>
    </>
  );
};

export default Contect;
