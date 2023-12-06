import { create } from "zustand";

interface TodoState {
  isOpen: Boolean;
  todo: {
    title?: String;
    isComplete?: Boolean;
  };
  addTodo: () => void;
  removeTodo: () => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todo: {},
  isOpen: false,
  addTodo: () => set(() => ({ todo: { title: "food", isComplete: true } })),
  removeTodo: () => set({ todo: {} }),
}));

export default useTodoStore;
