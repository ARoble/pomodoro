"use client";
import { IoMdAddCircleOutline } from "react-icons/io";
import useTodoStore from "../store/todoStore";
import React, { useState } from "react";
import { createTodo } from "../lib/todo";
import { useSession } from "next-auth/react";
function Add(): React.JSX.Element {
  const [task, setTask] = useState("");
  const { toggleIsOpen, addTodo } = useTodoStore((state) => state);
  const { data: session, status } = useSession();

  const handleOnSubmit = async (): Promise<void> => {
    try {
      addTodo(session, task);
      setTask("");
    } catch (e) {
      console.log("here");
    }
  };
  return (
    <div className="mt-3 rounded-lg bg-white">
      <div className="py-3 px-2">
        <input
          type="text"
          placeholder="What are you working on?"
          className="p-2 w-full my-3 bg-white placeholder:text-gray-400 text-black font-bold placeholder:font-bold placeholder:italic focus:outline-none"
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="flex justify-end space-x-4 bg-gray-200 rounded-b-lg p-3">
        <button className="text-xs text-black" onClick={toggleIsOpen}>
          Cancel
        </button>
        <button
          className="flex items-center justify-center py-3 px-5 text-xs rounded-lg border-2 bg-black"
          onClick={handleOnSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default function AddTodo() {
  const { toggleIsOpen, isOpen } = useTodoStore((state) => state);
  return (
    <div className="w-full">
      <button
        className="flex items-center justify-center w-full p-3 rounded-lg border-2"
        onClick={toggleIsOpen}
      >
        <IoMdAddCircleOutline size={20} className="mr-1" />
        Add Task
      </button>
      {isOpen && <Add />}
    </div>
  );
}
