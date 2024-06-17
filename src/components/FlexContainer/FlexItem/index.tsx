import { IconButton } from "@mui/material";
import { useFlexStore } from "../../../store/flex";
import { Wrapper } from "./styled";
import { RemoveCircle } from "@mui/icons-material";
import { FlexItemId, FlexItemProps } from "../../../store/types";

interface Props {
  label: number;
  handleSelectItem: (itemId: FlexItemId) => void;
  isSelected: boolean;
  itemId: FlexItemId;
  flexProps: FlexItemProps;
}

const FlexItem = ({ label, handleSelectItem, isSelected, flexProps, itemId }: Props) => {
  const removeFlexItem = useFlexStore(({ actions }) => actions.removeFlexItem);

  return (
    <Wrapper
      sx={{ bgcolor: isSelected ? "#4c59ca" : "#45484e" }}
      onClick={() => handleSelectItem(itemId)}
      {...flexProps}
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        onClick={(e) => {
          e.stopPropagation();
          removeFlexItem(itemId);
        }}
        className="removeFlexItemButton"
      >
        <RemoveCircle />
      </IconButton>

      {label}
    </Wrapper>
  );
};

export default FlexItem;
