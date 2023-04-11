import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
/* img */
import Image from "next/image";
import Head from "next/head";

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
        <div>รูปภาพ</div>
        {/* box 2 */}
        <div>
          <div className="flex flex-warp justify-between gap2">
            <div>1. หน้าจอจะแสดงข้อมูล Overview</div>
            <div>
              {"<"}
              {">"}
            </div>
          </div>
          <div className="flex mt-5">text</div>
        </div>
      </div>
    </>
  );
}

export default healthLink;
