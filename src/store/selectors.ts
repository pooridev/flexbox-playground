import { FlexStore } from "./types";

export const flexDirectionSelector = (store: FlexStore) => {
  return store.state.flexContainerProps.flexDirection;
};
