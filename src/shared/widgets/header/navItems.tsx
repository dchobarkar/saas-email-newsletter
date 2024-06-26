import React from "react";
import Link from "next/link";

import { navItems } from "@/app/configs/constants";

const NavItems = () => {
  return (
    <div className="w-full hidden md:flex items-center">
      {navItems.map((item: NavItems, index: number) => (
        <Link key={index} href={"/"} className="px-5 text-lg">
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
