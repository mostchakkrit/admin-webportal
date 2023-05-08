import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

import { signIn } from "next-auth/react";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};
const Navbar = (props: Props) => {
  // console.log(props.open);
  return (
    <>
      {props?.open === false ? (
        <button className="absolute md:hidden">
          <Bars3Icon
            onClick={() => props.setOpen(true)}
            className="bg-slate-200 md:hidden w-12 fixed top-[20px] z-20 right-5 inline-flex justify-center rounded-md p-2 text-gray-800 hover:bg-gradient-to-r from-gra-s to-gra-e hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          />
        </button> /*  : props?.open === true ? (
        <button className="absolute md:hidden">
          <Bars3Icon className="bg-slate-200 md:hidden w-12 fixed top-[20px] z-20 right-5 inline-flex justify-center rounded-md p-2 text-gray-800 hover:bg-gradient-to-r from-gra-s to-gra-e hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
        </button>
      )  */
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
