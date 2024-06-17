import { InputLabel, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";

import { useFlexStore } from "../../../../store/flex";
import { CSSProperties, MouseEvent } from "react";

const FlexWrap = () => {
  const flexWrap = useFlexStore(({ state }) => state.flexContainerProps.flexWrap);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleFlexWrapChange = (_: MouseEvent, _flexWrap: CSSProperties["flexWrap"] | undefined) => {
    if (_flexWrap) {
      setFlexContainerProps({
        flexWrap: _flexWrap,
      });
    }
  };

  return (
    <Stack flex={1} direction="column" gap={0.5}>
      <InputLabel>Flex Wrap</InputLabel>
      <ToggleButtonGroup fullWidth value={flexWrap} exclusive onChange={handleFlexWrapChange} aria-label="Flex wrap">
        <ToggleButton size="small" value="wrap" aria-label="Wrap">
          Wrap
        </ToggleButton>
        <ToggleButton size="small" value="nowrap" aria-label="No Wrap">
          No Wrap
        </ToggleButton>

        <ToggleButton size="small" value="wrap-reverse" aria-label="Wrap">
          Wrap Reverse
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default FlexWrap;
