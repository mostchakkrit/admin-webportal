import React from "react";
import Image from "next/image";
import Banner from "../public/images/menu/healthLink-banner.png";
function steps() {
  return (
    <>
      <div className="flex gap-3 items-center mt-3 mb-5">
        <h1 className="text-3xl">การใช้งาน Health Link</h1>
        <h1 className="text-base">ของแพทย์</h1>
      </div>
      {/* <div>
        <Image src={Banner} alt="Banner" />
      </div> */}
      <div className="containerrounded-md bg-gradient-to-r from-gra-s to-gra-e h-72 flex items-center">
        <div className="lg:ml-32 md:ml-10 sm:ml-5">
          <div className="text-white mb-4">
            <h1 className="text-3xl">การใช้งาน Health Link</h1>
            <p className="text-base">ของแพทย์</p>
          </div>
          <button className="rounded-full  w-44 h-10 bg-white hover:scale-105 hover:duration-200">
            อ่านเพิ่มเติม
          </button>
        </div>
      </div>
    </>
  );
}

export default steps;
