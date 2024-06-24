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

const tasks = [
  { type: "Daily Tasks", items: [
    { title: "Daily Reward", amount: 295000, icon: <TbCalendarCheck className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Like and RT a Daily Post", amount: 1000, icon: <FaXTwitter className="w-6 h-6 text-[#88dde7]" /> },
  ]},
  { type: "Invites", items: [
    { title: "Invite a Friend", amount: 5000, icon: <TbUserShare className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Invite a Friend with Premium Telegram", amount: 25000, icon: <TbUserStar className="w-6 h-6 text-[#88dde7]" /> },
  ]},
  { type: "One-time Tasks", items: [
    { title: "Follow Telegram Channel", amount: 2000, icon: <LiaTelegram className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Join Discord Server", amount: 2000, icon: <AiOutlineDiscord className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Follow on Twitter", amount: 2000, icon: <FaXTwitter className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Follow on TikTok", amount: 2000, icon: <TbBrandTiktok className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Subscribe on YouTube", amount: 2000, icon: <TbBrandYoutube className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Follow on Instagram", amount: 2000, icon: <TbBrandInstagram className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Like and RT an Announcement", amount: 1000, icon: <FaXTwitter className="w-6 h-6 text-[#88dde7]" /> },
    { title: "Visit Our Website", amount: 500, icon: <TbExternalLink className="w-6 h-6 text-[#88dde7]" /> },
  ]}
];

const TaskList = ({ type, items }: { type: string, items: { title: string, amount: number, icon: ReactNode }[] }) => (
  <>
    <p className="text-lg text-start w-full">{type}</p>
    {items.map((task, index) => (
      <CardWrapper key={index} className="mb-2">
        <TaskCard title={task.title} amount={task.amount}>
          {task.icon}
        </TaskCard>
      </CardWrapper>
    ))}
  </>
);

export default function Home() {
  return (
    <div className="flex relative min-h-screen flex-col items-center justify-between p-4">
      <div className="fixed top-0 left-0 bg-black/40 w-full min-h-screen"></div>
      <div className="relative z-10 w-full flex flex-col items-center pt-3 pb-20 gap-1 text-white animate-opacity-scale">
        <div className="w-[90px] mx-auto flex justify-around items-center">
          <Icons.tasks.coin />
          <p className="text-4xl font-semibold">0</p>
        </div>
        <h1 className="text-maintext text-2xl mt-2">Your Tasks</h1>
        <span className="text-white text-sm">Complete the tasks to earn more coins.</span>
        <div className="border-t-[1px] border-maintext w-full my-3"></div>
        
        {tasks.map((taskGroup, index) => (
          <TaskList key={index} type={taskGroup.type} items={taskGroup.items} />
        ))}
      </div>
      <Navbar />
    </div>
  );
}
