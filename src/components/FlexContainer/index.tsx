import { Wrapper } from "./styled";

import { useFlexStore } from "../../store/flex";
import FlexItem from "./FlexItem";

const FlexContainer = () => {
  const { flexContainerProps, flexItemCount, selectedItemIndex } = useFlexStore(({ state }) => state);
  const { setSelectedItemIndex } = useFlexStore(({ actions }) => actions);

  const handleSelectItem = (itemIndex: number) => {
    return () => setSelectedItemIndex(itemIndex + 1);
  };

  return (
    <Wrapper {...flexContainerProps} boxShadow={1} height="40vh" maxHeight={320} minWidth={300} width="40%">
      {Array(flexItemCount)
        .fill(undefined)
        .map((_, index) => (
          <FlexItem
            isSelected={selectedItemIndex == index + 1}
            handleSelectItem={handleSelectItem(index)}
            itemIndex={index + 1}
          />
        ))}
    </Wrapper>
  );
};

export default FlexContainer;
