import { create } from "zustand";

interface todoList {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TodoState {
  isOpen: Boolean;
  todos: todoList[];
  toggleIsOpen: () => void;
  addTodo: (id: number, task: string) => void;
  isComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set, get) => ({
  todos: [{ id: 1, title: "Eat food", isComplete: true }],
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  addTodo: (id: number, task: string) => {
    set((state) => ({
      todos: [...state.todos, { id, title: task, isComplete: false }],
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
