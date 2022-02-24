import create from "zustand/vanilla";

export const store = create((set) => ({
  depth: 14,
  frame: 10,
  color: "#000000",
  endColor: "#FFB7C5",
  setDepth: (newDepth) => set({ depth: newDepth }),
  setFrame: (newFrame) => set({ frame: newFrame }),
  setColor: (newColor) => set({ color: newColor }),
  setEndColor: (newEndColor) => set({ endColor: newEndColor }),
}));

export const { getState, setState, subscribe, destroy } = store;
