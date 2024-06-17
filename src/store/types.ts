import { CSSProperties } from "react";

export interface FlexContainerProps {
  gap?: number;
  display?: "inline-flex" | "flex";
  flexDirection?: CSSProperties["flexDirection"];
  flexWrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
}

export interface FlexItemProps {
  flexGrow?: CSSProperties["flexGrow"];
  flexShrink?: CSSProperties["flexShrink"];
  flexBasis?: CSSProperties["flexBasis"];
  alignSelf?: CSSProperties["alignSelf"];
  order?: CSSProperties["order"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}

export type FlexItemId = number;

export interface FlexStore {
  state: {
    flexContainerProps: FlexContainerProps;
    flexItemsProps: Record<FlexItemId, FlexItemProps>;
    selectedItemId: FlexItemId | null;
  };

  actions: {
    setFlexContainerProps: (containerProps: FlexContainerProps) => void;
    setFlexItemProps: (flexItemProps: FlexItemProps) => void;
    removeFlexItem: (flexItemId: FlexItemId) => void;
    addFlexItem: () => void;
    setSelectedFlexItemId: (flexItemId: FlexItemId) => void;
  };
}
