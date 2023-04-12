import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (

      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="bg-slate-200 md:hidden w-12 fixed top-[47px] z-50 right-5 inline-flex justify-center rounded-md p-2 text-gray-800 hover:bg-gradient-to-r from-gra-s to-gra-e hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
      </button>
   
  );
};

export default Navbar;
