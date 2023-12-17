"use client";
import Todo from "./Todo";
import useTodoStore from "../store/todoStore";
import { useEffect } from "react";
import { getTodos } from "../lib/todo";

export default function Todos() {
  const { todos, initTodos } = useTodoStore((state) => state);

  async function fetchTodos() {
    const { todos } = await getTodos();
    initTodos(todos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

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
