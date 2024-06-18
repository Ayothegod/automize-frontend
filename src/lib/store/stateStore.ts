import { create } from "zustand";

// interface CounterState {
//   count: number;
//   logOutModal: boolean;
//   increment: () => void;
//   decrement: () => void;
//   reset: () => void;
// }

// export const useCounterStore = create<CounterState>((set) => ({
//   count: 0,
//   logOutModal: false,
//   setLogOutModal: () => set((state) => ({ logOutModal: !state.logOutModal })),
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
//   reset: () => set({ count: 0 }),
// }));

// interface ModalState {
//   logOutModal: boolean;
//   setLogOutModal: () => void;
// }
// export const useModalStore = create<ModalState>((set) => ({
//   count: 0,
//   logOutModal: false,
//   setLogOutModal: () => set((state) => ({ logOutModal: !state.logOutModal })),
// }));

interface LoadingState {
  process: boolean;
  setProcess: () => void;
  debtModal: boolean;
  setDebtModal: () => void;
  isCreatingDebt: boolean;
  setIsCreatingDebt: () => void;
}

export const useProcessStore = create<LoadingState>((set) => ({
  process: false,
  setProcess: () => set((state) => ({ process: !state.process })),
  debtModal: false,
  setDebtModal: () => set((state) => ({ debtModal: !state.debtModal })),
  isCreatingDebt: false,
  setIsCreatingDebt: () =>
    set((state) => ({ isCreatingDebt: !state.isCreatingDebt })),
}));
