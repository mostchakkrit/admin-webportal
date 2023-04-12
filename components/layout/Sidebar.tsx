import React, { useRef } from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";
import { defaultNavItems } from "./defaultNavitems";
import { useOnClickOutside } from "usehooks-ts";
import Logo from "../../public/images/menu/logo.png";
import { useRouter } from "next/router";
import { CgProfile } from "react-icons/cg";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useSession, signIn, signOut } from "next-auth/react";

// define a NavItem prop
export type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
// add NavItem prop to component prop
type Props = {
  open: boolean;
  navItems?: NavItem[];
  setOpen(open: boolean): void;
};

const Sidebar = ({ open, navItems = defaultNavItems, setOpen }: Props) => {
  const { data: session } = useSession();
  const router = useRouter();
  /* console.log(router.pathname); */
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    setOpen(false);
  });
  return (
    <div
      className={classNames({
        "flex flex-col justify-between h-screen border-r p-5": true, // layout
        "bg-white ": true, // colors
        "md:w-full md:sticky md:z-0 top-0 z-20 fixed": true, // positioning
        "w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
        "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
      ref={ref}
    >
      <nav className="md:sticky top-0 ">
        <div className="ml-3 flex items-center">
          <Image src={Logo} alt="Doh logo" className="w-[62px] h-[62px] " />
          <h1 className="cursor-pointer font-bold text-doh-blue ml-3 text-2xl">
            กรมอนามัย
          </h1>
        </div>
        {/* nav items */}
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.href}
                className={`cursor-pointer ${
                  router.pathname === item.href
                    ? "bg-gradient-to-r from-gra-s to-gra-e text-white rounded-md"
                    : "text-doh-text-gray hover:bg-gradient-to-r rounded-md from-gra-s to-gra-e hover:text-white"
                }`}
              >
                <li
                  id={item.href}
                  className={classNames({
                    "flex gap-4 items-center ": true, //layout
                    "transition-colors duration-300": true, //animation
                    "rounded-md p-3": true, //self style
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {/* account  */}
      <div className="border-t  py-4">
        <ul className="py-2 flex flex-col gap-2">
          {session?.user ? (
            <>
              <li className="flex gap-4 items-center px-3 rounded-md cursor-default">
                <CgProfile className="w-6 h-6"></CgProfile>
                <span>
                  {session.user.username} ({session.user.institution})
                </span>
              </li>
              <li
                onClick={() => signOut()}
                className={classNames({
                  "flex gap-4 items-center": true, //layout
                  "transition-colors duration-300": true, //animation
                  "text-doh-text-gray hover:bg-gradient-to-r from-gra-s to-gra-e p-3 hover:text-white cursor-pointer rounded-md":
                    true, //self style
                })}
              >
                <CiLogout className="w-6 h-6"></CiLogout>
                <span>ออกจากระบบ</span>
              </li>
            </>
          ) : (
            <li
              onClick={() => signIn()}
              className={classNames({
                "flex gap-4 items-center ": true, //layout
                "transition-colors duration-300": true, //animation
                "text-doh-text-gray hover:bg-gradient-to-r from-gra-s to-gra-e p-3 hover:text-white cursor-pointer rounded-md":
                  true, //self style
              })}
            >
              <CiLogin className="w-6 h-6"></CiLogin>
              <span>เข้าใช้งานระบบ</span>
            </li>
          )}
        </ul>
        {/*   <div className="flex gap-3 items-center">
          <div className="flex flex-col ">
            <CgProfile className="y w-6 h-6"/>
          </div>
          <div className="flex flex-col text-md font-medium">
            <span className=" my-0">Tom Cook</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default Sidebar;
