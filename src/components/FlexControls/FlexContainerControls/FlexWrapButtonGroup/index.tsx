import { InputLabel, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";

import { useFlexStore } from "../../../../store/flex";
import { CSSProperties, MouseEvent } from "react";

const FlexWrapButtonGroup = () => {
  const { flexWrap } = useFlexStore(({ state }) => state.flexContainerProps);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleFlexWrapChange = (_: MouseEvent, newFlexWrap: CSSProperties["flexWrap"]) => {
    setFlexContainerProps({
      flexWrap: newFlexWrap,
    });
  };

  return (
    <Stack direction="column" gap={0.5}>
      <InputLabel>Flex Wrap</InputLabel>
      <ToggleButtonGroup value={flexWrap} exclusive onChange={handleFlexWrapChange} aria-label="Flex wrap">
        <ToggleButton value="wrap" aria-label="Wrap">
          Wrap
        </ToggleButton>
        <ToggleButton value="nowrap" aria-label="No Wrap">
          No Wrap
        </ToggleButton>

        <ToggleButton value="wrap-reverse" aria-label="Wrap">
          Wrap Reverse
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default FlexWrapButtonGroup;
