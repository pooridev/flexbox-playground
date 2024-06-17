import { Wrapper } from "./styled";

import { useFlexStore } from "../../store/flex";
import FlexItem from "./FlexItem";

import AddFlexItemButton from "./AddFlexItemButton";

const FlexContainer = () => {
  const flexContainerProps = useFlexStore(({ state }) => state.flexContainerProps);
  const flexItemsProps = useFlexStore(({ state }) => state.flexItemsProps);
  const selectedItemId = useFlexStore(({ state }) => state.selectedItemId);
  const setSelectedFlexItemId = useFlexStore(({ actions }) => actions.setSelectedFlexItemId);

  return (
    <Wrapper
      position="relative"
      gap={flexContainerProps.gap + "px"}
      flexDirection={flexContainerProps.flexDirection}
      flexWrap={flexContainerProps.flexWrap}
      alignItems={flexContainerProps.alignItems}
      alignContent={flexContainerProps.alignContent}
      justifyContent={flexContainerProps.justifyContent}
      display={flexContainerProps.display}
      boxShadow={1}
      height="40vh"
      maxHeight={320}
      minWidth={300}
      width="40%"
    >
      {Object.entries(flexItemsProps).map(([itemId, props], index) => (
        <FlexItem
          key={itemId}
          isSelected={selectedItemId == Number(itemId)}
          handleSelectItem={() => setSelectedFlexItemId(Number(itemId))}
          itemId={Number(itemId)}
          label={index + 1}
          flexProps={props}
        />
      ))}

      <AddFlexItemButton />
    </Wrapper>
  );
};

export default FlexContainer;
