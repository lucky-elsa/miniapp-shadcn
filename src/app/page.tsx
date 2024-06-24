"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SlRocket, SlEnergy } from "react-icons/sl";
import { TbUser } from "react-icons/tb";
import { Icons } from "@/components/Icons";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

export default function Home() {
  const [clicker, setClicker] = useState<number>(0);
  const [charge, setCharge] = useState<number>(1000);
  const [isScaled, setIsScaled] = useState<boolean>(false);
  const [pregress, setProgress] = useState<number>(0);

  const handleEggClicker = () => {
    setClicker((prevClicker) => prevClicker + 1);
    setCharge((prevCharge) => prevCharge - 1);

    setIsScaled(true);

    setTimeout(() => {
      setIsScaled(false);
    }, 50);
  };

  useEffect(() => {
    if (charge < 1000 && charge >= 100) {
      const interval = setInterval(() => {
        setCharge((prevCharge) => {
          if (prevCharge >= 1000) {
            clearInterval(interval);
            return prevCharge;
          }
          return prevCharge + 3;
        });
      }, 1000);

      return () => clearInterval(interval);
    }

    if (charge > 1000) {
      setCharge(1000);
    }
  }, [charge]);

  useEffect(() => {
    if (clicker % 10 === 0 && clicker !== 0) {
      setProgress((prevProgress) => prevProgress + 0.2);
    }
  }, [clicker]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="fixed top-0 left-0 bg-black/40 w-full min-h-screen"></div>
      <div className="relative z-10 w-full flex flex-col items-center pb-36 gap-4 text-white animate-opacity-scale">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start gap-3">
            <Icons.tasks.coin />
            <span className="text-white text-4xl font-semibold">{clicker}</span>
          </div>
          <div className="w-11 h-11 flex justify-center items-center bg-[#0f0f0f] rounded-full">
            <TbUser className="w-6 h-6 text-[#88dde7]" />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <Progress value={pregress} />
          <div className="flex items-center justify-between">
            <p className="font-display flex items-center text-xs leading-none gap-1">
              <span>Level 1</span>
              <span>/</span>
              <span className="text-border">10</span>
              <span>-</span>
              Egg
            </p>
            <p className="font-display whitespace-nowrap leading-none text-xs flex gap-1 items-center">
              {clicker} / <span className="text-border">5000</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex items-center h-9 rounded-lg font-display backdrop-blur gap-2 bg-foreground/10 border-b text-xs font-semibold text-white border-border px-3 text-center justify-center pointer-events-none">
            <dt className="block">Earn per tap</dt>
            <dd className="block font-display text-border text-[16px] whitespace-nowrap">
              +1
            </dd>
          </div>
          <div className="flex items-center h-9 rounded-lg font-display backdrop-blur gap-2 bg-foreground/10 border-b text-xs font-semibold text-white border-border px-3 text-center justify-center pointer-events-none">
            <dt className="block">Gold to level up</dt>
            <dd className="block font-display text-border text-[16px] whitespace-nowrap">
              5K
            </dd>
          </div>
        </div>

        <button
          onClick={handleEggClicker}
          className="cursor-pointer select-none w-full transform-none"
        >
          <div className="flex w-full aspect-square items-center justify-center">
            <Image
              className={`transition-all ${isScaled ? "scale-[0.95]" : ""}`}
              width={350}
              height={450}
              src={"/egg.png"}
              alt="Dragon Egg"
            />
          </div>
        </button>
      </div>
      <div className="fixed bottom-[100px] w-[92%] mx-auto flex justify-between rounded-xl cursor-pointer gap-2 z-10">
        <div className="flex items-center h-9 rounded-lg font-display backdrop-blur gap-1 bg-foreground/10 border-b text-xs font-semibold text-white border-border px-3 text-center justify-center fixed bottom-[88px] left-4 pointer-events-none">
          <SlEnergy className="text-border w-4 h-4" />
          {charge} / <span className="text-xs text-border">1000</span>
        </div>
        <div className="bg-border w-24 flex items-center h-9 rounded-lg font-display gap-2 text-xs font-semibold text-black justify-center fixed bottom-[88px] right-4">
          <SlRocket className="w-[14px] h-[14px]" />
          Boosters
        </div>
      </div>
      <Navbar />
    </main>
  );
}
