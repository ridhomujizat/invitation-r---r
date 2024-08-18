import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIStateType {
  openCover: boolean;
  dataParams?: {
    name?: string;
    config?: string;
  };
  trigger?: {
    alamat?: number;
    calender?: number;
  };
}

interface UIStoreType extends UIStateType {
  setOpenCover: (value: boolean) => void;
  setDataParams: (value: UIStateType["dataParams"]) => void;
  setTriggerAlamat: () => void;
  setTriggerCalender: () => void;
}

const initialState: UIStateType = {
  openCover: false,
};

const useUIStore = create(
  devtools<UIStoreType>((set) => ({
    ...initialState,
    setOpenCover: (value: boolean) => set(() => ({ openCover: value })),
    setDataParams: (value: UIStateType["dataParams"]) =>
      set((state) => ({ dataParams: { ...state.dataParams, ...value } })),
    setTriggerAlamat: () =>
      set((state) => ({
        trigger: {
          ...state.trigger,
          alamat: (state?.trigger?.alamat || 0) + 1,
        },
      })),
    setTriggerCalender: () =>
      set((state) => ({
        trigger: {
          ...state.trigger,
          calender: (state?.trigger?.calender || 0) + 1,
        },
      })),
  }))
);

export default useUIStore;
