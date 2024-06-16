import { create } from "zustand";
import { FlexStore } from "./types";

const initialState: FlexStore["state"] = {
  flexItemCount: 3,
  flexContainerProps: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 2,
  },
  selectedItemIndex: 1,
  flexItemsProps: {
    1: {
      width: 100,
    },
    2: {
      width: 100,
    },
    3: {
      width: 100,
    },
  },
};

export const useFlexStore = create<FlexStore>((set) => ({
  state: initialState,
  actions: {
    setFlexContainerProps(containerProps) {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          flexContainerProps: {
            ...store.state.flexContainerProps,
            ...containerProps,
          },
        },
      }));
    },
    setFlexItemProps(itemProps) {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          flexItemsProps: {
            ...store.state.flexItemsProps,
            [store.state.selectedItemIndex]: {
              ...store.state.flexItemsProps[store.state.selectedItemIndex],
              ...itemProps,
            },
          },
        },
      }));
    },
    removeFlexItem() {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          flexItemCount: store.state.flexItemCount > 1 ? store.state.flexItemCount - 1 : 1,
        },
      }));
    },
    addFlexItem() {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          flexItemCount: store.state.flexItemCount > 5 ? store.state.flexItemCount : store.state.flexItemCount + 1,
        },
      }));
    },

    setSelectedItemIndex(itemIndex: number) {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          selectedItemIndex: itemIndex,
        },
      }));
    },
  },
}));
