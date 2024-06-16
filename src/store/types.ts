import { CSSProperties } from "react";

export interface FlexContainerProps {
  gap?: number;
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

type ItemIndex = number;

export interface FlexStore {
  state: {
    flexItemCount: number;
    flexContainerProps: FlexContainerProps;
    flexItemsProps: Record<ItemIndex, FlexItemProps>;
    selectedItemIndex: ItemIndex;
  };

  actions: {
    setFlexContainerProps: (containerProps: FlexContainerProps) => void;
    setFlexItemProps: (itemProps: FlexItemProps) => void;
    removeFlexItem: () => void;
    addFlexItem: () => void;
    setSelectedItemIndex: (itemIndex: ItemIndex) => void;
  };
}
