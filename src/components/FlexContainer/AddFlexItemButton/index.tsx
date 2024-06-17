import { Add } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { useFlexStore } from "../../../store/flex";

const AddFlexItemButton = () => {
  const addFlexItem = useFlexStore(({ actions }) => actions.addFlexItem);
  return (
    <Tooltip placement="top" title="Add flex item">
      <Button
        onClick={addFlexItem}
        size="large"
        variant="contained"
        color="warning"
        sx={{
          boxShadow: 2,
          p: "5px",
          minWidth: "unset",
          borderRadius: "50px",
          position: "absolute",
          bottom: -1,
          left: "50%",
          transform: "translate(-50%, 50%)",
        }}
      >
        <Add />
      </Button>
    </Tooltip>
  );
};

export default AddFlexItemButton;
