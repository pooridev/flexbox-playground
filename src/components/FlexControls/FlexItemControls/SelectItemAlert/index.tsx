import { Button, Stack, Typography } from "@mui/material";
import { useFlexStore } from "../../../../store/flex";
import { getRandomArrayElement } from "./utils";

const SelectItemAlert = () => {
  const selectedItemId = useFlexStore(({ state }) => state.selectedItemId);

  const flexItemIds = useFlexStore(({ state }) => Object.keys(state.flexItemsProps));
  const setSelectedFlexItemId = useFlexStore(({ actions }) => actions.setSelectedFlexItemId);

  const selectRandomFlexItem = () => {
    const randomFlexItemId = getRandomArrayElement(flexItemIds);
    setSelectedFlexItemId(Number(randomFlexItemId));
  };

  if (selectedItemId) return null;

  return (
    <Stack
      height="100%"
      width="100%"
      direction="column"
      gap={1}
      zIndex={2}
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="0"
      left="0"
      sx={{
        backdropFilter: "blur(1.5px)",
      }}
    >
      <Typography fontWeight="bold" boxShadow={1}>
        Please select a flex item to customize it!
      </Typography>
      <Button
        sx={{
          textTransform: "unset",
        }}
        variant="contained"
        color="warning"
        onClick={selectRandomFlexItem}
      >
        (Or) Select one randomly
      </Button>
    </Stack>
  );
};

export default SelectItemAlert;
