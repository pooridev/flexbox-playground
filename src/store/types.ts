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
  flexGrow?: number;
  flexShrink?: number;
  alignSelf?: CSSProperties["alignSelf"];
  order?: number;
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
