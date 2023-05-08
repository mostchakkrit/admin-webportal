import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
import { BsCardList, BsFillQuestionSquareFill } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { AiOutlineFileText } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { BsQuestionCircle } from "react-icons/bs";
export const defaultNavItems: NavItem[] = [
  {
    label: "ขั้นตอนการเข้าใช้งานระบบ",
    href: "/steps",
    icon: <AiOutlineFileText className="w-6 h-6" />,
  },
  /* {
    label: "คู่มือการใช้งานระบบ",
    href: "/manual",
    icon: <HiOutlineBookOpen className="w-6 h-6" />,
  }, */
  {
    label: "รายการ API ที่ให้บริการ",
    href: "/listapi",
    icon: <BsCardList className="w-6 h-6" />,
  },

  {
    label: "ช่องทางติดต่อช่วยเหลือ",
    href: "/contact",
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6" />,
  },
  {
    label: "คำถามที่พบบ่อย",
    href: "/question",
    icon: <BsQuestionCircle className="w-6 h-6" />,
  },
  {
    label: "คำถามที่พบบ่อยทั้งหมด",
    href: "/question-details",
    icon: <BsQuestionCircle className="w-6 h-6" />,
  },
];
