import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UIStateType {
  openCover: boolean;
  dataParams?: {
    name?: string;
    config?: string;
  };
}

interface UIStoreType extends UIStateType {
  setOpenCover: (value: boolean) => void;
  setDataParams: (value: UIStateType["dataParams"]) => void;
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
  }))
);

export default useUIStore;
