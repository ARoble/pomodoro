"use client";
import Todo from "./Todo";
import useTodoStore from "../store/todoStore";

export default function Todos() {
  const { todos } = useTodoStore((state) => state);

  if (todos.length == 0) return;
  return (
    <div className="mt-5">
      <div className="flex justify-center ">
        <h1 className="">Tasks</h1>
      </div>

      <div className="mt-4 space-y-2">
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
      </div>
    </div>
  );
}
