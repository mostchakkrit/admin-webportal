import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
/* img */
import Image from "next/image";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";

function Listapi() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>รายการ API ที่ให้บริการ</title>
      </Head>
      <div className="flex gap-3 items-center mb-3 mt-3">
        <h1 className="text-2xl font-bold">รายการ API ที่ให้บริการ</h1>
        <h1 className="text-base">ของแพทย์</h1>
      </div>
      {/* <div>
        <Image src={Banner} alt="Banner" />
      </div> */}
      <div className="rounded-md bg-gradient-to-r flex-wrap from-gra-s to-gra-e h-auto grid grid-cols-3 grid-flow-row	 items-center relative xs:py-2 lg:text-left xs:text-center">
        <div className="lg:ml-22 md:ml-10 xs:ml-5 z-10 lg:col-span-1 xs:col-span-3">
          <div className="text-white mb-4">
            <h1 className="text-3xl">กรุณาเข้าสู่ระบบก่อนการใช้งาน</h1>
            <p className="text-base">ดาวน์โหลดแอปพลิเคชันสำหรับเข้าสู่ระบบ</p>
          </div>
          {session?.user ? (
            <button className="rounded-full w-auto px-3 h-12 bg-white hover:scale-105 hover:duration-200">
              v1.11.0
              <p className="text-xs">ปรับปรุงเมื่อ 22/02/2565</p>
            </button>
          ) : (
            <button onClick={() => signIn()} className="rounded-full w-auto px-3 h-12 bg-white hover:scale-105 hover:duration-200">
              กรุณาเข้าสู่ระบบก่อนดาวน์โหลด
            </button>
          )}
          {/*    <button className="rounded-full w-44 h-12 bg-white hover:scale-105 hover:duration-200">
            v1.11.0
            <p className="text-xs">ปรับปรุงเมื่อ 22/02/2565</p>
          </button> */}
        </div>
        <div className="p-3 w-full h-auto lg:col-span-2 xs:col-span-3 flex flex-col gap-2">
          <div className="w-full bg-white py-3 px-6 rounded-md">
            <h1 className="font-bold">รูปแบบการร้องขอข้อมูล</h1>
            <div className="flex flex-wrap gap-2 my-2">
              <p className="bg-[#455EB5] text-white py-1 px-2 rounded-md text-sm">
                5000
              </p>
              <p className="bg-[#FFCC48] text-white py-1 px-2 rounded-md text-sm">
                T [32]
              </p>
              <p className="bg-[#4ABC9A] text-white py-1 px-2 rounded-md text-sm">
                Office [ID]
              </p>
              <p className="bg-[#D9534F] text-white py-1 px-2 rounded-md text-sm">
                Service Version [2]
              </p>
              <p className="bg-[#4BCCD4] text-white py-1 px-2 rounded-md text-sm">
                Service ID [3]
              </p>
              <p className="bg-[#989898] text-white py-1 px-2 rounded-md text-sm">
                PID [13]
              </p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              <p className="bg-[#455EB5] text-white py-1 px-2 rounded-md text-sm">
                5000
              </p>
              <p className="bg-[#FFCC48] text-white py-1 px-2 rounded-md text-sm">
                T [32]
              </p>
              <p className="bg-[#4ABC9A] text-white py-1 px-2 rounded-md text-sm">
                Office [ID]
              </p>
              <p className="bg-[#D9534F] text-white py-1 px-2 rounded-md text-sm">
                Service Version [2]
              </p>
              <p className="bg-[#4BCCD4] text-white py-1 px-2 rounded-md text-sm">
                Service ID [3]
              </p>
              <p className="bg-[#989898] text-white py-1 px-2 rounded-md text-sm">
                input
              </p>
            </div>
            <h1 className="font-bold">ข้อมูลตอบกลับ</h1>
            <div className="flex flex-wrap gap-2 my-2">
              <p className="bg-[#455EB5] text-white py-1 px-2 rounded-md text-sm">
                5000
              </p>
              <p className="bg-[#FDAA5E] text-white py-1 px-2 rounded-md text-sm">
                Status [5]
              </p>
              <p className="bg-[#1F8A8A] text-white py-1 px-2 rounded-md text-sm">
                JSON
              </p>
            </div>
            <div className="flex flex-wrap gap-2 my-2">
              <p className="bg-[#455EB5] text-white py-1 px-2 rounded-md text-sm">
                6000
              </p>
              <p className="bg-[#FDAA5E] text-white py-1 px-2 rounded-md text-sm">
                Status [5]
              </p>
              <p className="bg-[#1F8A8A] text-white py-1 px-2 rounded-md text-sm">
                JSON
              </p>
            </div>
          </div>
          <div className="w-full bg-white py-3 px-6 rounded-md">
            <h1 className="font-bold ">สถานะของบริการข้อมูล</h1>
            <div className="flex flex-wrap gap-2 my-2">
              <div className="flex items-center gap-2">
                <p className="w-3 h-3 bg-[#989898] rounded-xl"></p>
                <p>รอการตรวจสอบ</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-3 h-3 bg-[#238562] rounded-xl"></p>
                <p>เชื่อมต่อได้</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-3 h-3 bg-[#C5B62E] rounded-xl"></p>
                <p>พบความผิดพลาดจากการตอบกลับ</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-3 h-3 bg-[#D9534F] rounded-xl"></p>
                <p>เชื่อมต่อไม่ได้</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ประเภท */}
      <div className="w-full my-4">
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-3 md:mb-0 xs:mb-2">
            <h1 className="text-base">ประเภท</h1>
            <select
              name=""
              id=""
              placeholder="ทั้งหมด"
              className="w-52 flex text-center bg-[#4ED0D5] outline-[#455EB5] rounded-md text-white cursor-pointer"
            >
              <option value="" selected>
                ทั้งหมด
              </option>
              <option value="">1</option>
            </select>
            <div className="flex items-center gap-3">
              <input
                id="except-files"
                name="except-files"
                type="checkbox"
                value=""
                className="w-4 h-4 checked:bg-blue-500 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label
                htmlFor="except-files"
                className="text-sm hover:cursor-pointer"
              >
                เฉพาะ 116 เอกสาร
              </label>
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-3">
            <div className="flex items-center gap-3">
              <input
                id="typeAll"
                name="typeapi"
                type="radio"
                value=""
                className="w-4 h-4 checked:bg-blue-500 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="typeAll" className="text-sm cursor-pointer">
                ทั้งหมด
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="type5000"
                name="typeapi"
                type="radio"
                value=""
                className="w-4 h-4 checked:bg-blue-500 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="type5000" className="text-sm cursor-pointer">
                รองรับ 5000
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="type6000"
                name="typeapi"
                type="radio"
                value=""
                className="w-4 h-4 checked:bg-blue-500 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="type6000" className="text-sm cursor-pointer">
                รองรับ 6000
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* data */}
      <div className="md:my-10 ms:my-3">
        <p className="text-xl font-bold">จำนวนบริการ ข้อมูล 227</p>
        <table className="table-auto w-full rounded border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[#8D9DAD]">
              <td className="text-center">ลำดับ</td>
              <td>หน่วยงานเชื่อมโยง/รายการบริการข้อมูล</td>
              <td>รูปแบบ</td>
              <td>เวอร์ชั่น</td>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {/* loop */}
            <tr>
              <td className=" text-center">1</td>
              <td className="">
                <div className="flex flex-warp gap-3">
                  <p className="bg-[#4ABC9A]  text-white py-1 px-2 rounded-md text-sm">
                    01303
                  </p>
                  <p className="textbase">xxxxxxxxxxxxxxxxx</p>
                </div>
              </td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="shadow-md"></td>
              <td className="shadow-md pl-5">
                <div className="flex flex-warp gap-3 items-center">
                  <p className="bg-[#4BCCD4]  text-white py-1 px-2 rounded-md text-sm">
                    001
                  </p>
                  <p className="w-3 h-3 bg-[#238562] rounded-xl"></p>
                  <p className="textbase">xxxxxxxxxxxxxxxxx</p>
                </div>
              </td>
              <td className="p-2 shadow-md">
                <div className="flex flex-warp">
                  <p className="bg-[#455EB5]  text-white py-1 px-2 rounded-md text-sm">
                    5000
                  </p>
                </div>
              </td>
              <td className="p-2 shadow-md">
                <div className="flex flex-warp">
                  <p className="bg-[#D9534F]  text-white py-1 px-2 rounded-md text-sm">
                    02
                  </p>
                </div>
              </td>
            </tr>
            {/*end loop */}

            {/* loop */}
            <tr>
              <td className=" text-center">1</td>
              <td className="">
                <div className="flex flex-warp gap-3">
                  <p className="bg-[#4ABC9A]  text-white py-1 px-2 rounded-md text-sm">
                    01303
                  </p>
                  <p className="textbase">xxxxxxxxxxxxxxxxx</p>
                </div>
              </td>
              <td className=""></td>
              <td className=""></td>
            </tr>
            <tr>
              <td className="shadow-md"></td>
              <td className="shadow-md pl-5">
                <div className="flex flex-warp gap-3 items-center">
                  <p className="bg-[#4BCCD4]  text-white py-1 px-2 rounded-md text-sm">
                    001
                  </p>
                  <p className="w-3 h-3 bg-[#238562] rounded-xl"></p>
                  <p className="textbase">xxxxxxxxxxxxxxxxx</p>
                </div>
              </td>
              <td className="p-2 shadow-md">
                <div className="flex flex-warp">
                  <p className="bg-[#455EB5]  text-white py-1 px-2 rounded-md text-sm">
                    5000
                  </p>
                </div>
              </td>
              <td className="p-2 shadow-md">
                <div className="flex flex-warp">
                  <p className="bg-[#D9534F]  text-white py-1 px-2 rounded-md text-sm">
                    02
                  </p>
                </div>
              </td>
            </tr>
            {/*end loop */}
          </tbody>
        </table>
      </div>

      <div className="md:my-10 ms:my-3">
        <p className="text-xl font-bold">ตารางรหัสสถานะข้อมูลตอบกลับ</p>
        <table className="table-auto w-full rounded border-separate border-spacing-y-3">
          <thead>
            <tr className="text-[#8D9DAD]">
              <td className="text-center">รหัส</td>
              <td>ความหมายรหัสสภานะข้อมูลตอบกลับ</td>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {/* loop */}
            <tr>
              <td className="text-center shadow-md p-2">
                <div className="flex flex-warp justify-center">
                  <p className="bg-[#FDAA5E]  text-white py-1 px-2 rounded-md text-sm">
                    01303
                  </p>
                </div>
              </td>
              <td className="shadow-md ps-2">
                <p className="textbase">xxxxxxxxxxxxxxxxx</p>
              </td>
            </tr>
            {/*end loop */}
            {/* loop */}
            <tr>
              <td className="text-center shadow-md p-2">
                <div className="flex flex-warp justify-center">
                  <p className="bg-[#FDAA5E]  text-white py-1 px-2 rounded-md text-sm">
                    0000
                  </p>
                </div>
              </td>
              <td className="shadow-md ps-2">
                <p className="textbase">xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
              </td>
            </tr>
            {/*end loop */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Listapi;
