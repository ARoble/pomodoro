import { LuBrain, LuSettings } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";

import Todo from "./components/Todos";
import Time from "./components/Time";
import Modes from "./components/Modes";
import Buttons from "./components/Buttons";
import AddTodo from "./components/AddTodo";

export default function Home() {
  return (
    <div className="flex gap-10 pt-[120px]">
      <div className="flex flex-col items-center  max-w-[436px] ">
        <Modes />
        <Time />
        <Buttons />
        <div className="border-b border-gray-500 w-full my-4"></div>
        <AddTodo />
      </div>
      <Todo />
    </div>
  );
}
