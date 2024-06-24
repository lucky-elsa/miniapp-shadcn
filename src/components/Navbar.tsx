"use client";

import React, { useCallback, useEffect, useState } from "react";
import type { JSX } from "react";
import { Icons } from "@/components/Icons";
import { useRouter, usePathname } from "next/navigation";

interface Route {
  path: string;
  title?: string;
  icon?: JSX.Element;
}

export const route: Route[] = [
  {
    path: "/",
    title: "Feed",
    icon: <Icons.navigator.feed />,
  },
  { path: "/tasks", title: "Tasks", icon: <Icons.navigator.tasks /> },
  { path: "/friends", title: "Friends", icon: <Icons.navigator.friends /> },
  {
    path: "/guilds",
    title: "Guilds",
    icon: <Icons.navigator.guilds />,
  },
];

export const Navbar = () => {
  const [active, setActive] = useState(-1);

  const router = useRouter();
  const pathname = usePathname();

  const updateActiveState = useCallback(() => {
    switch (pathname) {
      case "/":
        setActive(0);
        break;
      case "/tasks":
        setActive(1);
        break;
      case "/friends":
        setActive(2);
        break;
      case "/guilds":
        setActive(3);
        break;
      default:
        setActive(-1);
    }
  }, [pathname]);

  useEffect(() => {
    updateActiveState();
  }, [pathname, updateActiveState]);

  return (
    <div className="fixed bottom-5 w-[92%] mx-auto h-[60px] flex justify-between p-[3px] rounded-xl border border-border cursor-pointer gap-2 z-10 bg-black/70 bg-backdrop-filter">
      {route.map((item, index) => (
        <div
          key={index}
          onClick={() => router.push(item.path)}
          className={`flex flex-col flex-1 justify-center items-center p-2 gap-1 rounded-xl ${active === index ? 'bg-[#ffc95c] text-black' : 'bg-transparent text-white'}`}
        >
          {item.icon}
          <span className="text-xs font-[600]">{item.title}</span>
        </div>
      ))}
    </div>
  );
};
