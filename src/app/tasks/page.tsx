import { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Icons } from "@/components/Icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CardWrapper from "@/components/CardWrapper";
import {
  TbCalendarCheck,
  TbUserShare,
  TbBrandTiktok,
  TbBrandYoutube,
  TbBrandInstagram,
  TbExternalLink,
  TbUserStar,
} from "react-icons/tb";
import { LiaTelegram } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDiscord } from "react-icons/ai";

const TaskCard = ({
  title,
  amount,
  children,
}: {
  title: string;
  amount: number;
  children: ReactNode;
}) => {
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div className="w-[42px] h-[42px] bg-[#0f0f0f] flex justify-center items-center text-[#88dde7] rounded-full">
        {children}
      </div>
      <div className="flex flex-col flex-1 justify-center items-start gap-1">
        <span className="text-white font-semibold text-sm">{title}</span>
        <div className="flex justify-start items-center gap-1">
          <Icons.invite.coin />
          <span className="text-white text-xs">+{amount.toLocaleString()}</span>
        </div>
      </div>
      <MdOutlineKeyboardArrowRight className="w-5 h-5 text-border" />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col items-center justify-between p-4">
      <div className="fixed top-0 left-0 bg-black/40 w-full min-h-screen"></div>
      <div className="relative z-10 w-full flex flex-col items-center pt-3 pb-20 gap-1 text-white">
        <div className="w-[90px] mx-auto flex justify-around items-center">
          <Icons.tasks.coin />
          <p className="text-4xl font-semibold">0</p>
        </div>
        <h1 className="text-maintext text-2xl mt-2">Your Tasks</h1>
        <span className="text-white text-sm">
          Comlete the tasks to earn more coins.
        </span>
        <div className="border-t-[1px] border-maintext w-full my-3"></div>
        <p className="text-lg text-start w-full">Daily Tasks</p>
        <CardWrapper className="mb-2 animate-scale animate-scaleDown">
          <TaskCard title="Daily Reward" amount={295000}>
            <TbCalendarCheck className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Like and RT a Daily Post" amount={1000}>
            <FaXTwitter className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>

        <p className="text-lg text-start w-full">Invites</p>
        <CardWrapper className="mb-2">
          <TaskCard title="Invite a Friend" amount={5000}>
            <TbUserShare className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard
            title="Invite a Friend with Premium Telegram"
            amount={25000}
          >
            <TbUserStar className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>

        <p className="text-lg text-start w-full">One-time Tasks</p>
        <CardWrapper className="mb-2">
          <TaskCard title="Follow Telegram Channel" amount={2000}>
            <LiaTelegram className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Join Discord Server" amount={2000}>
            <AiOutlineDiscord className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Follow on Twitter" amount={2000}>
            <FaXTwitter className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Follow on TikTok" amount={2000}>
            <TbBrandTiktok className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Subscribe on YouTube" amount={2000}>
            <TbBrandYoutube className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Follow on Instagram" amount={2000}>
            <TbBrandInstagram className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Like and RT and Ammouncement" amount={1000}>
            <FaXTwitter className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
        <CardWrapper className="mb-2">
          <TaskCard title="Visit Our Website" amount={500}>
            <TbExternalLink className="w-6 h-6 text-[#88dde7]" />
          </TaskCard>
        </CardWrapper>
      </div>
      <Navbar />
    </div>
  );
}
