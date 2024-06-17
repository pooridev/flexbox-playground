import { create } from "zustand";
import { FlexStore } from "./types";
import { excludeObjectProps, generateId } from "./utils";

const INITIAL_FLEX_ITEM_PROPS = {
  flexGrow: 0,
  flexShrink: 0,
};

const initialState: FlexStore["state"] = {
  flexContainerProps: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    alignItems: "initial",
    alignContent: "initial",
    gap: 10,
  },
  selectedItemId: null,
  flexItemsProps: {
    [generateId()]: INITIAL_FLEX_ITEM_PROPS,
    [generateId()]: INITIAL_FLEX_ITEM_PROPS,
    [generateId()]: INITIAL_FLEX_ITEM_PROPS,
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

    setFlexItemProps(flexItemProps) {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          flexItemsProps: {
            ...store.state.flexItemsProps,
            [store.state.selectedItemId!]: {
              ...store.state.flexItemsProps[store.state.selectedItemId!],
              ...flexItemProps,
            },
          },
        },
      }));
    },

    removeFlexItem(flexItemId) {
      set((store) => {
        const currentFlexItemsProps = store.state.flexItemsProps;
        const onlyOneFlexItemLeft = Object.keys(currentFlexItemsProps).length == 1;

        // Do not let user to remove the last flex item
        if (onlyOneFlexItemLeft) return store;

        const newFlexItemsProps = excludeObjectProps(currentFlexItemsProps, [flexItemId]);

        return {
          ...store,
          state: {
            ...store.state,
            selectedItemId: flexItemId == store.state.selectedItemId ? null : store.state.selectedItemId,
            flexItemsProps: newFlexItemsProps,
          },
        };
      });
    },

    addFlexItem() {
      set((store) => {
        const haveFiveFlexItems = Object.keys(store.state.flexItemsProps).length == 5;

        // Do not let user to add more than 5 flex items
        if (haveFiveFlexItems) return store;

        return {
          ...store,
          state: {
            ...store.state,
            flexItemsProps: {
              ...store.state.flexItemsProps,
              [generateId()]: INITIAL_FLEX_ITEM_PROPS,
            },
          },
        };
      });
    },

    setSelectedFlexItemId(flexItemId) {
      set((store) => ({
        ...store,
        state: {
          ...store.state,
          selectedItemId: flexItemId,
        },
      }));
    },

    resetFlexProps() {
      set((store) => ({
        ...store,
        state: initialState,
      }));
    },
  },
}));
