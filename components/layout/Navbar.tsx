import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
type Props = {
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (

      <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="md:hidden w-16 absolute top-4 right-4 inline-flex justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" />
      </button>
   
  );
};

export default Navbar;
