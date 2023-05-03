import React from "react";
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import Image from "next/image";

import Logo from "../public/images/menu/logo.png";

import Link from "next/link";
const navigation = [
  { name: "index", href: "/" },
  { name: "home", href: "/home" },
  { name: "login", href: "/login" },
  { name: "manual", href: "/manual" },
];

function SideNavbar() {
  return (
    <div className="float-left h-100">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu className="md:block h-6 w-6" aria-hidden="true" />
        </Disclosure.Button>
        <div className="lg:block md:hidden sm:hidden p-6 h-screen bg-white top-0 -left-96 lg:left-0 lg:w-80  peer-focus:left-0 peer:transition ease-out delay-150 duration-200 border-r">
          <div className="flex flex-col justify-center item-center">
            <div className="ml-3 flex items-center">
              <Image src={Logo} alt="Doh logo" className="w-[62px] h-[62px] " />
              <h1 className=" cursor-pointer font-bold text-doh-blue ml-3 text-2xl">
                กรมอนามัย
              </h1>
            </div>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <Link href="/manual">
                <div className="flex mb-2 justify-start items-center gap-4 p-3.5 hover:bg-gradient-to-r from-gra-s to-gra-e  rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <AiOutlineFileText className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    ขั้นตอนการเข้าใช้งานระบบ
                  </h3>
                </div>
              </Link>
              <div className="flex  mb-2 justify-start items-center gap-4 p-3.5 hover:bg-gradient-to-r from-gra-s to-gra-e  rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  รายการ API ที่ให้บริการ
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 p-3.5 hover:bg-gradient-to-r from-gra-s to-gra-e rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  เข้าใช้งานระบบ
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 p-3.5 hover:bg-gradient-to-r from-gra-s to-gra-e  rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  ช่องทางติดต่อช่วยเหลือ
                </h3>
              </div>
                <div className="flex mb-2 justify-start items-center gap-4 p-3.5 hover:bg-gradient-to-r from-gra-s to-gra-e  rounded-md group cursor-pointer hover:shadow-lg m-auto"></div>
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  คำถามที่พบบ่อย
                </h3>
            </div>
            {/* setting  */}

            {/* logout */}
            {/*  <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div> */}
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
