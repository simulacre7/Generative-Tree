import create from "zustand/vanilla";

const store = create(() => ({
  isOn: false,
}));

export const { getState, setState, subscribe, destroy } = store;
