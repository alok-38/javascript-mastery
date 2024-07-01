import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import path from "path";
import React from "react";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];
  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </div>
	  <div>
		{MenuList.map((menu, index) => (
			<div>
				<menu.icon />
				<h2>{menu.name}</h2>
			</div>
		))}
	  </div>
    </div>
  );
};

export default SideNav;
