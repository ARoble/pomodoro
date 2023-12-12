import { create } from "zustand";
import { createTodo } from "../lib/todo";
import axios from "axios";
interface todoList {
  id: number;
  todo: string;
  isComplete: boolean;
  userId?: number;
}

interface TodoState {
  isOpen: Boolean;
  todos: todoList[];
  toggleIsOpen: () => void;
  addTodo: (todo: todoList) => void;
  isComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [{ id: 1, todo: "Eat food", isComplete: true }],
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  addTodo: async (todo: todoList) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  isComplete: (id: number) => {
    const todos = get().todos;
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    todos[todoIndex].isComplete = todos[todoIndex].isComplete ? false : true;
    set(() => ({ todos }));
  },
  removeTodo: (id: number) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
}));

export default useTodoStore;
