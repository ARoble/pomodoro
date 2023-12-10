"use client";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import useTimeStore from "../store/timeStore";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
export default function Buttons() {
  const { isRunning, toggleRunning } = useTimeStore((state: any) => state);
  const { data: session, status } = useSession();
  return (
    <div className="flex items-center space-x-1">
      <Link href="/login" className="py-4 px-7 rounded-2xl">
        <BiLogIn size={28} />
        <Image
          src={session?.user?.image || ""}
          height={100}
          width={100}
          alt="user image"
        />
        {session?.user?.email}
      </Link>
      <a onClick={() => signOut()}>Log out</a>
      <button
        className="bg-red-700 py-5 px-8 rounded-2xl"
        onClick={() => toggleRunning()}
      >
        {isRunning ? <FaPause size={50} /> : <FaPlay size={50} />}
      </button>
      <button className=" py-4 px-7  rounded-2xl">
        <MdOutlineLeaderboard size={28} />
      </button>
    </div>
  );
}
