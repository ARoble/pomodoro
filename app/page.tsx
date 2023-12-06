import { LuBrain, LuSettings } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";

import { IoMdAddCircleOutline } from "react-icons/io";
import Todo from "./components/todo";
import Time from "./components/Time";
import Modes from "./components/Modes";
import Buttons from "./components/Buttons";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center max-w-[436px] col-span-2">
        <Modes />
        <Time />
        <Buttons />
        <div className="border-b border-gray-500 w-full my-4"></div>
        <button className="flex items-center justify-center w-full p-3 rounded-lg border-2">
          <IoMdAddCircleOutline size={20} className="mr-1" />
          Add Task
        </button>

        {/* <Todo /> */}
      </div>
    </div>
  );
}
