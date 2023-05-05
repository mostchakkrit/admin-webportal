import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
/* img */
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH;

function healthLink() {
  return (
    <>
      <Head>
        <title>การใช้งาน Health Link</title>
      </Head>
      <div className="flex gap-3 items-center mb-3 mt-3">
        <h1 className="text-2xl font-bold">การใช้งาน Health Link</h1>
        <h1 className="text-base">ของแพทย์</h1>
      </div>
      {/* <div>
        <Image src={Banner} alt="Banner" />
      </div> */}
      <div className="grid lg:grid-cols-2 xs:grid-cols-1 gap-5">
        {/* box 1 */}
        <div className="w-full">
          <Image
            src={BASE_PATH + "/images/stepsImg/healthlink.png"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
            alt=""
          />
          <div>
            <button
              type="button"
              className="w-full bg-white text-left border rounded-full border-[#4DD0D5] hover:scale-x-105 transition p-3"
            >
              เพิ่มเติม
            </button>
          </div>
        </div>
        {/* box 2 */}
        <div className="w-full">
          <div className="flex flex-warp justify-between items-center gap2">
            <div>1. หน้าจอจะแสดงข้อมูล Overview</div>
            <div className="flex gap-4 mx-2">
              <AiFillLeftCircle className="w-7 h-auto text-[#273D4B] cursor-pointer hover:scale-105 duration-150" />
              <AiFillRightCircle className="w-7 h-auto text-[#273D4B] cursor-pointer hover:scale-105 duration-150" />
            </div>
          </div>
          <div className="flex flex-wrap mt-5 break-all">
            <p className="">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default healthLink;
