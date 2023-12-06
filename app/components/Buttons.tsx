"use client";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import useTimeStore from "../store/timeStore";
export default function Buttons() {
  const { isRunning, toggleRunning } = useTimeStore((state: any) => state);
  return (
    <div className="flex items-center space-x-1">
      <button className="py-4 px-7 rounded-2xl">
        <BsThreeDots size={28} />
      </button>
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
