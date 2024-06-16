import { IconButton } from "@mui/material";
import { useFlexStore } from "../../../store/flex";
import { Wrapper } from "./styled";
import { RemoveCircle } from "@mui/icons-material";

interface Props {
  itemIndex: number;
  handleSelectItem: () => void;
  isSelected: boolean;
}

const FlexItem = ({ itemIndex, handleSelectItem, isSelected }: Props) => {
  const { flexItemsProps, selectedItemIndex } = useFlexStore(({ state }) => state);
  const { removeFlexItem } = useFlexStore(({ actions }) => actions);

  const currentFlexItemProps = flexItemsProps[selectedItemIndex];

  return (
    <Wrapper
      sx={{ bgcolor: isSelected ? "#4c59ca" : "#45484e" }}
      onClick={handleSelectItem}
      {...currentFlexItemProps}
      justifyContent="center"
      alignItems="center"
    >
      <IconButton onClick={removeFlexItem} className="removeFlexItemButton">
        <RemoveCircle />
      </IconButton>

      {itemIndex}
    </Wrapper>
  );
};

export default FlexItem;
