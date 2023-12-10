import { create } from "zustand";

interface TimeState {
  mode: String; //focus,long,short
  isRunning: Boolean;
  countDown: number; //1500
  timer: {
    minutes?: number;
    seconds?: number;
  };
  toggleRunning: () => void;
  changeMode: (mode: string) => void;
  nextMode: () => void;
}

const useTimeStore = create<TimeState>((set) => ({
  mode: "focus",
  countDown: 10, //1500
  isRunning: false,
  timer: {},
  toggleRunning: () =>
    set((state: TimeState) => ({ isRunning: !state.isRunning })),
  changeMode: (mode: string) => {
    switch (mode) {
      case "focus":
        set({ mode: mode, countDown: 1500, isRunning: false });
        break;
      case "long":
        set({ mode: mode, countDown: 800, isRunning: false });
        break;
      case "short":
        set({ mode: mode, countDown: 500, isRunning: false });
        break;
    }
  },
  nextMode: () => {
    //code
  },
}));

export default useTimeStore;
