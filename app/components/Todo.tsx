import { GoTrash } from "react-icons/go";
import useTodoStore from "../store/todoStore";

interface TodoD {
  todo: { id: number; todo: string; isComplete: boolean };
}

export default function Todo({ todo }: TodoD) {
  const { removeTodo, isComplete } = useTodoStore((state) => state);

  const handleRemoveTodo = async (todoId: number) => {
    removeTodo(todoId);
  };

  const handleToggleComplete = (id: number) => {
    isComplete(todo.id);
  };
  return (
    <div
      className={`flex items-center justify-between border-l-4 py-2 pl-2  w-[250px]  hover:cursor-pointer ${
        todo.isComplete
          ? "opacity-30 hover:opacity-70 border-green-600"
          : "hover:opacity-30"
      }`}
    >
      <div
        className="flex items-center"
        onClick={() => handleToggleComplete(todo.id)}
      >
        <h1 className={`${todo.isComplete ? "line-through" : ""}`}>
          {todo.todo}
        </h1>
      </div>
      <div>
        <GoTrash
          className="hover:cursor-pointer hover:text-red-500"
          onClick={() => handleRemoveTodo(todo.id)}
        />
      </div>
    </div>
  );
}
