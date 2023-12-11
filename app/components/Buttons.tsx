"use client";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import useTimeStore from "../store/timeStore";
import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
export default function Buttons() {
  const { isRunning, toggleRunning } = useTimeStore((state: any) => state);
  const { data: session, status } = useSession();
  return (
    <div className="flex items-center space-x-1">
      {status === "authenticated" ? (
        <div className="py-4 px-7 rounded-2xl">
          <Image
            src={session?.user?.image || ""}
            height={45}
            width={45}
            alt="user image"
            className="rounded-full"
          />
        </div>
      ) : (
        <div
          className="bg-white p-2 rounded-full my-4 mx-7 hover:cursor-pointer"
          onClick={() => signIn("google")}
        >
          <FcGoogle size={25} />
        </div>
      )}

      <button
        className="bg-red-700 py-5 px-8 rounded-2xl"
        onClick={() => toggleRunning()}
      >
        {isRunning ? <FaPause size={50} /> : <FaPlay size={50} />}
      </button>
      <button className=" py-4 px-7  rounded-2xl">
        <MdOutlineLeaderboard size={28} />
      </button>
      <a onClick={() => signOut()}>Log out</a>
    </div>
  );
}
