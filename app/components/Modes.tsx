"use client";
import { PiBrain } from "react-icons/pi";
import { FiCoffee } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import useTimeStore from "../store/timeStore";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
export default function Modes() {
  const { mode, changeMode } = useTimeStore((state: any) => state);
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log(session);
    // console.log(status);
  }, [status]);
  return (
    <div className="flex items-center ">
      <button
        className={`flex items-center py-3 px-3 rounded-full ${
          mode === "long" ? "border-2 opacity-100" : "opacity-25"
        }  hover:opacity-95`}
        onClick={() => changeMode("long")}
      >
        <IoFastFoodOutline size={22} className="mr-1" /> Long break
      </button>
      <button
        className={`flex items-center py-3 px-5 rounded-full  ${
          mode === "focus" ? "border-2 opacity-100" : "opacity-25"
        }   hover:opacity-95`}
        onClick={() => changeMode("focus")}
      >
        <PiBrain size={30} className="mr-1" /> Focus
      </button>
      <button
        className={`flex items-center py-3 px-3 rounded-full  ${
          mode === "short" ? "border-2 opacity-100" : "opacity-25"
        }  hover:opacity-95`}
        onClick={() => changeMode("short")}
      >
        <FiCoffee size={22} className="mr-1" /> Short Break
      </button>
    </div>
  );
}
