import { create } from "zustand";

import { createTodo, deleteTodo, toggleCompletedTodo } from "../lib/todo";

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
  initTodos: (todo: todoList[]) => void;
  addTodo: (session: any, todo: string) => void;
  isComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [{ id: 1, todo: "Eat food", isComplete: true }],
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  initTodos: (todos: todoList[]) => {
    set(() => ({
      todos: todos,
    }));
  },
  addTodo: async (session: any, todo: string) => {
    const newTodo = await createTodo(session, todo);

    set((state) => ({
      todos: [...state.todos, newTodo],
    }));
    get().toggleIsOpen();
  },
  isComplete: (id: number) => {
    const todos = get().todos;
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    todos[todoIndex].isComplete = todos[todoIndex].isComplete ? false : true;
    toggleCompletedTodo(todos[todoIndex].id, todos[todoIndex].isComplete);
    set(() => ({ todos }));
  },
  removeTodo: (id: number) => {
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
    deleteTodo(id);
  },
}));

export default useTodoStore;
