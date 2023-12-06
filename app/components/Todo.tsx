import { GoTrash } from "react-icons/go";
import useTodoStore from "../store/todoStore";
import { TiTick } from "react-icons/ti";
interface TodoD {
  todo: { id?: number; title?: string; isComplete?: boolean };
}

export default function Todo({ todo }: TodoD) {
  const { removeTodo } = useTodoStore((state) => state);
  return (
    <div className="flex items-center justify-between border-l-4 py-2 pl-2  w-[250px] hover:border-gray-500 hover:cursor-pointer">
      <div className="flex items-center">
        <TiTick size={20} className="text-green-600" />
        <h1 className="">{todo.title}</h1>
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
