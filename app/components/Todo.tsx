import { GoTrash } from "react-icons/go";
import useTodoStore from "../store/todoStore";
// import { TiTick, TiTimes } from "react-icons/ti";
interface TodoD {
  todo: { id: number; title: string; isComplete: boolean };
}

export default function Todo({ todo }: TodoD) {
  const { removeTodo, isComplete } = useTodoStore((state) => state);
  return (
    <div
      className={`flex items-center justify-between border-l-4 py-2 pl-2  w-[250px]  hover:cursor-pointer ${
        todo.isComplete
          ? "opacity-30 hover:opacity-70 border-green-600"
          : "hover:opacity-30  "
      }`}
    >
      <div className="flex items-center" onClick={() => isComplete(todo.id)}>
        <h1 className={`${todo.isComplete ? "line-through" : ""}`}>
          {todo.title}
        </h1>
      </div>
      <div>
        <GoTrash
          className="hover:cursor-pointer hover:text-red-500"
          onClick={() => removeTodo(todo.id)}
        />
      </div>
    </div>
  );
}
