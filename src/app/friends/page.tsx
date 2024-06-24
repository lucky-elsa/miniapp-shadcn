import { Navbar } from "@/components/Navbar";
import type { JSX } from "react";
import CardWrapper from "@/components/CardWrapper";
import { Icons } from "@/components/Icons";
import { IoCopyOutline } from "react-icons/io5";
import InviteFriendModal from "@/components/InviteFriendModal";

interface T_InviteFriendCard {
  title: string;
  subTitle: string;
  amount: number;
  giftImage: JSX.Element;
  coin: JSX.Element;
}

const InviteFriendCard: React.FC<T_InviteFriendCard> = (props) => {
  return (
    <div className="w-full flex justify-between items-center gap-1">
      {props.giftImage}
      <div className="flex flex-col flex-1 justify-center items-start">
        <span className="text-white font-semibold text-sm">{props.title}</span>
        <div className="flex justify-start items-center gap-1">
          {props.coin}
          <span className="text-white text-xs">
            <strong className="text-sm">+{props.amount} </strong>
            {props.subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 w-full flex flex-col items-center py-2 gap-1 animate-opacity-scale">
        <h1 className="text-maintext text-2xl">Invite Friends</h1>
        <span className="text-white text-sm">
          You can your friend will receive bonuses.
        </span>
        <div className="border-t-[1px] border-maintext w-full my-3"></div>
        <CardWrapper className="flex flex-col gap-1">
          <InviteFriendCard
            title="Invite a Friend"
            subTitle="and even more after he levels up"
            amount={5000}
            giftImage={Icons.invite.gift({})}
            coin={Icons.invite.coin({})}
          />
          <div className="border-t-[1px] border-[#242424] w-full my-1"></div>
          <InviteFriendCard
            title="Invite a Friend"
            subTitle="and even more after he levels up"
            amount={5000}
            giftImage={Icons.invite.gift({})}
            coin={Icons.invite.coin({})}
          />
        </CardWrapper>
        <CardWrapper className="py-4">
          <span className="w-full text-center text-xs text-white">
            You haven&apos;t invited anyone yet
          </span>
        </CardWrapper>
      </div>
      <div className="absolute bottom-[90px] w-[92%] mx-auto flex justify-between gap-2">
        <InviteFriendModal />
        <div className="!w-11 !h-11 flex justify-center items-center rounded-full bg-border">
          <IoCopyOutline className="w-5 h-5 text-black" />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
