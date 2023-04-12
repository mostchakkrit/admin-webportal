import React from "react";

/* img */
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsFillTelephoneFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import Head from "next/head";

const contactData = [
  {
    label: "ขั้นตอนการเข้าใช้งานระบบ",
    src: "/images/contact/doc.jpg",
    social: [
      {
        icon: <BsFacebook className="text-[#1877f2]" />,
        name: "หมอแล็บแพนด้า",
        href: "https://th-th.facebook.com/MTlikesara/",
      },
    ],
  },
  {
    label: "Drama-addict",
    src: "/images/contact/drama.jpg",
    social: [
      {
        icon: <BsFacebook className="text-[#1877f2]" />,
        name: "Drama-addict",
        href: "https://www.facebook.com/DramaAdd/",
      },
    ],
  },
  {
    label: "Drama-addict",
    src: "/images/contact/missgrand.jpg",
    social: [
      {
        icon: (
          <Image
            src="/images/contact/LINE.png"
            width={18}
            height={18}
            className="text-[#1877f2]"
            alt=""
          />
        ),
        name: "@missgrand",
        href: "/contact",
      },
    ],
  },
  {
    label: "กลุ่มเส้นด้าย",
    src: "/images/contact/zendai.jpeg",
    social: [
      {
        icon: <TbWorld className="text-slate-600" />,
        name: "เส้นด้าย - Zendai  ",
        href: "https://zen-dai.org/",
      },
    ],
  },
  {
    label: "เราต้องรอด",
    src: "/images/contact/we-sur.jpg",
    social: [
      {
        icon: <BsFacebook className="text-[#1877f2]" />,
        name: "เราต้องรอด",
        href: "https://www.facebook.com/savethailandsafe/",
      },
    ],
  },
  {
    label: "พรรคกล้า - KLA Party",
    src: "/images/contact/kla.jpg",
    social: [
      {
        icon: <BsFacebook className="text-[#1877f2]" />,
        name: "พรรคกล้า - KLA Party",
        href: "https://www.facebook.com/chartpattanakla",
      },
    ],
  },
  {
    label: "สายด่วนจังหวัดปทุมธานี",
    src: "/images/contact/moph.jpg",
    social: [
      {
        icon: <BsFillTelephoneFill className="text-gra-s" />,
        name: "02-5815658",
        href: "",
      },
      {
        icon: <BsFillTelephoneFill className="text-gra-s" />,
        name: "065-950-5772",
        href: "",
      },
    ],
  },
  {
    label: "รถราษฎร",
    src: "/images/contact/rath.jpg",
    social: [
      {
        icon: <BsFillTelephoneFill className="text-gra-s" />,
        name: "063-245-9964",
        href: "",
      },
    ],
  },
  {
    label: "ต้องรอด",
    src: "/images/contact/upforthai.jpg",
    social: [
      {
        icon: <BsFacebook className="text-[#1877f2]" />,
        name: "ต้องรอด Up For Thai",
        href: "",
      },
      {
        icon: (
          <Image
            src="/images/contact/LINE.png"
            width={18}
            height={18}
            className="text-[#1877f2]"
            alt=""
          />
        ),
        name: "@upforthai",
        href: "",
      },
      {
        icon: <FaInstagramSquare className="text-[#FE007E]" />,
        name: "ต้องรอด Up For Thai",
        href: "",
      },
      {
        icon: <AiFillTwitterCircle className="text-[#2DAAE1]" />,
        name: "ต้องรอด Up For Thai",
        href: "",
      },
    ],
  },
];
function contact() {
  return (
    <>
      <Head>
        <title>ช่องทางติดต่อช่วยเหลือ</title>
      </Head>
      <div className="flex gap-3 items-center mb-3 mt-3">
        <h1 className="text-2xl font-bold">ช่องทางติดต่อช่วยเหลือ</h1>
      </div>
      {/* <div>
        <Image src={Banner} alt="Banner" />
      </div> */}
      <div className="bg-contact-banner bg-no-repeat bg-cover bg-center h-[546px] flex items-center justify-center relative w-full">
        {/* img left */}
        <Image
          src="/images/contact/zendai.jpeg"
          width={167}
          height={1}
          className="cursor-pointer xs:hidden 2xl:block rounded-full border-4 border-white drop-shadow-lg absolute left-[79px] top-[100px]"
          alt="zen-dai"
        ></Image>
        <Image
          src="/images/contact/missgrand.jpg"
          width={105}
          height={1}
          alt="miss"
          className="cursor-pointer xs:hidden 2xl:block border-4 border-white rounded-full drop-shadow-lg absolute left-[60px] bottom-[100px]"
        ></Image>
        <Image
          src="/images/contact/we-sur.jpg"
          width={140}
          height={1}
          alt="miss"
          className="cursor-pointer xs:hidden 2xl:block border-4 border-white rounded-full drop-shadow-lg absolute left-[230px] bottom-[118px]"
        ></Image>
        {/*  {img right} */}
        <Image
          src="/images/contact/moph.jpg"
          width={149}
          height={1}
          alt="miss"
          className="cursor-pointer xs:hidden 2xl:block border-4 border-white rounded-full drop-shadow-lg absolute right-[68px] top-[54px]"
        ></Image>
        <Image
          src="/images/contact/drama.jpg"
          width={132}
          height={1}
          alt="miss"
          className="cursor-pointer xs:hidden 2xl:block border-4 border-white rounded-full drop-shadow-lg absolute right-[218px] bottom-[197px]"
        ></Image>
        <Image
          src="/images/contact/doc.jpg"
          width={146}
          height={1}
          alt="miss"
          className="cursor-pointer xs:hidden 2xl:block border-4 border-white rounded-full drop-shadow-lg absolute right-[74px] bottom-[58px]"
        ></Image>
        {/* textMid */}
        <div className="z-10 mx-3 flex flex-col flex-wrap lg:text-start xs:text-center">
          <p className="text-white font-bold text-2xl mb-2">รวมช่องทาง</p>
          <div className="md:flex xs:inline-block items-center gap-3">
            <p className="text-white font-bold text-[90px] xs:leading-[80px]">
              ติดต่อฉุกเฉิน
            </p>
            <p className="text-white font-bold text-[30px] leading-7 my-3">
              พร้อม
              <br />
              ช่วยเหลือ
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              className="py-3 px-5 w-auto bg-white text-black font-bold text-[30px] shadow-md rounded-full"
            >
              เพื่อผู้ป่วยโควิดไร้เตียง
            </button>
          </div>
        </div>
      </div>

      {/* data */}
      <div className="md:my-10 xs:my-3 flex flex-wrap flex-col">
        <p className="text-xl font-bold">
          ติดต่อขอความช่วยเหลือผ่านช่องทางอื่น ๆ 
        </p>
        <div className="container flex flex-col md:px-[50px]">
          {contactData.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full my-3 py-2 items-center gap-3"
              >
                <div className="lg:w-auto xs:w-1/3">
                  <Image
                    src={item.src!}
                    width={140}
                    height={1}
                    alt="miss"
                    className="cursor-pointer border-4 border-white rounded-full drop-shadow-lg"
                  ></Image>
                </div>
                <div className="lg:w-auto xs:w-2/3 md:ms-1 xs:ms-2">
                  <div className="flex">
                    <p className="text-lg font-bold pb-3 mb-3 border-b border-[#4acfd5]">
                      {item.label}
                    </p>
                  </div>
                  <div className="flex flex-wrap my-2">
                    <p className="text-lg">ติดต่อขอความช่วยเหลือ ผ่าน </p>
                    {item.social.map((sc, i) => {
                      return (
                        <Link key={i} href={sc.href} className="xs:py-1 md:p-0">
                          <div className="flex">
                            <button
                              type="button"
                              className="text-lg shadow-lg px-3 ms-2 w-auto h-auto inline-flex items-center gap-2"
                            >
                              {sc.icon}
                              <span>{sc.name}</span>
                            </button>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default contact;
