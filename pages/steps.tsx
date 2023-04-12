import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
/* img */
import Image from "next/image";

import step1 from "../public/images/stepsImg/step1.png";
import step2 from "../public/images/stepsImg/step2.png";
import step3 from "../public/images/stepsImg/step3.png";
import Link from "next/link";
import Head from "next/head";

function steps() {
  const imgStep = [
    {
      name: "step1",
      src: step1,
      topic: "1.xxxxxxxxxxxxxx",
    },
    {
      name: "step2",
      src: step2,
      topic: "2.xxxxxxxxxxxxxx",
    },
    {
      name: "step3",
      src: step3,
      topic: "3.xxxxxxxxxxxxxx",
    },
  ];
  return (
    <>
      <Head>
        <title>ขั้นตอนการเข้าใช้งานระบบ</title>
      </Head>
      <div className="flex gap-3 items-center my-3">
        <h1 className="text-2xl font-bold">การใช้งาน Health Link</h1>
        <h1 className="text-base">ของแพทย์</h1>
      </div>
      {/* <div>
        <Image src={Banner} alt="Banner" />
      </div> */}
      <div className="bg-steps-banner bg-right bg-no-repeat h-64 flex items-center relative rounded-md">
        <div className="lg:ml-32 md:ml-10 xs:ml-5 z-10">
          <div className="text-white mb-4">
            <h1 className="text-2xl font-bold">การใช้งาน Health Link</h1>
            <p className="text-base">ของแพทย์</p>
          </div>
          <Link href="/steps/health-link">
            <button className="rounded-full  w-44 h-10 bg-white hover:scale-105 hover:duration-200">
              อ่านเพิ่มเติม
            </button>
          </Link>
        </div>
      </div>
      {/* nav */}
      <div className="w-full grid sm:grid-cols-2 xs:grid-cols-1 my-4">
        <div className="flex justify-start items-center">
          <h1 className="text-xl font-bold">ขั้นตอนต่างๆ</h1>
        </div>
        <div className="flex sm:justify-end xs:justify-center xs:mt-1  items-center">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-s justify-end"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-gradient-to-r from-gra-s to-gra-e px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      {/* step */}

      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-10 xs:grid-cols-1  ">
        {imgStep.map((item, key) => {
          return (
            <div className="w-full" key={String(key)}>
              <Image src={item.src} className="w-full" alt={item.name} />
              <div className="text-base text-center mt-2">
                <p>{item.topic}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default steps;
