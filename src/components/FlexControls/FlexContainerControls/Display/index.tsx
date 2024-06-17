import { InputLabel, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useFlexStore } from "../../../../store/flex";
import { MouseEvent } from "react";

const Display = () => {
  const { display } = useFlexStore(({ state }) => state.flexContainerProps);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleDisplayChange = (_: MouseEvent, _display: "inline-flex" | "flex" | undefined) => {
    if (_display) {
      setFlexContainerProps({
        display: _display,
      });
    }
  };

  return (
    <Stack direction="column" flex={1} gap={0.5}>
      <InputLabel>Display</InputLabel>
      <ToggleButtonGroup fullWidth value={display} exclusive onChange={handleDisplayChange} aria-label="Display">
        <ToggleButton sx={{ textWrap: "nowrap" }} value="flex" aria-label="Flex">
          Flex
        </ToggleButton>
        <ToggleButton sx={{ textWrap: "nowrap" }} value="inline-flex" aria-label="Inline Flex">
          Inline Flex
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default Display;
