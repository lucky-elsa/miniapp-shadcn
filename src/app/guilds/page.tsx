"use client";

import { useState, ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import CardWrapper from "@/components/CardWrapper";
import { Input } from "@/components/ui/input";
import { GoSearch } from "react-icons/go";
import { Icons } from "@/components/Icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const GuildCard = ({
  title,
  amount,
  users,
  children,
}: {
  title: string;
  amount: string;
  users: string;
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div className="w-[42px] h-[42px] bg-[#0f0f0f] flex justify-center items-center text-[#88dde7] rounded-lg border border-[#787878]">
        {children}
      </div>
      <div className="flex flex-col flex-1 justify-center items-start gap-1">
        <span className="text-white font-semibold text-sm">{title}</span>
        <div className="flex justify-start items-center gap-1">
          <Icons.invite.coin />
          <span className="text-white text-xs">{amount}</span>
          <span className="w-1 h-1 bg-[#ffc95c]/50 rotate-45 ml-1"></span>
          <span className="text-white text-xs ml-1">{users} members</span>
        </div>
      </div>
      <MdOutlineKeyboardArrowRight className="w-5 h-5 text-border" />
    </div>
  );
};

export default function Home() {
  const [search, setSearch] = useState<string>("");

  const guilds = [
    { title: "GuildUnion", amount: "2.6B", users: "36K", img: "/channel (1).jpg" },
    { title: "NIGERIA", amount: "1B", users: "18K", img: "/channel (2).jpg" },
    { title: "What Not Crypto 🔋", amount: "464M", users: "6.6K", img: "/channel (3).jpg" },
    { title: "KamE LAHAT AY PILIPINO❗", amount: "280M", users: "2.2K", img: "/channel (4).jpg" },
    { title: "GARUDA", amount: "141M", users: "2K", img: "/channel (5).jpg" },
    { title: "Los Spartans🏹", amount: "139M", users: "1.1K", img: "/channel (6).jpg" },
    { title: "Ukraine", amount: "137M", users: "1.3K", img: "/channel (7).jpg" },
    { title: "Hamster Kombat Daily Combo Cards", amount: "59M", users: "903", img: "/channel (8).jpg" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="fixed top-0 left-0 bg-black/40 w-full min-h-screen"></div>
      <div className="relative z-10 w-full flex flex-col items-center pt-3 pb-20 gap-1 text-white animate-opacity-scale">
        <CardWrapper className="p-3">
          <div className="relative w-full">
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="bg-transparent border border-[#88dde7] h-11 text-border text-sm placeholder:text-[#a28040] placeholder:text-sm"
              placeholder="Enter a guild @name to search"
            />
            <GoSearch className="absolute right-3 top-3 w-5 h-5 text-border" />
          </div>
          <span className="text-xs text-white text-center px-2 mt-1">
            Search for the Guild by Telegram channel @name to join, or create a new one if it doesn&apos;t exist.
          </span>
        </CardWrapper>
        
        {guilds.map((guild, index) => (
          <CardWrapper key={index} className="bg-[#1d4c52] border border-[#19565d] mb-2">
            <GuildCard title={guild.title} amount={guild.amount} users={guild.users}>
              <img src={guild.img} className="w-full h-full rounded-lg" />
            </GuildCard>
          </CardWrapper>
        ))}
      </div>
      <Navbar />
    </main>
  );
}
