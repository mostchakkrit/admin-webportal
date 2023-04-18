import React, { PropsWithChildren, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ToggleSidebar = () => {
    sidebarOpen === false ? setSidebarOpen(true) : setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen">
      <div>
        <Navbar open={sidebarOpen} setOpen={setSidebarOpen}  />
      </div>

      <div className="grid md:grid-cols-sidebar">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="m-5">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
