import { SpaceBarOutlined } from "@mui/icons-material";
import { Grid, InputLabel, Slider, Stack } from "@mui/material";

import { useFlexStore } from "../../../../store/flex";

const FlexShrink = () => {
  const selectedItemId = useFlexStore(({ state }) => state.selectedItemId);

  const flexShrink = useFlexStore(({ state }) => state.flexItemsProps[selectedItemId!]?.flexShrink) ?? 0;

  const { setFlexItemProps } = useFlexStore(({ actions }) => actions);

  const handleSliderChange = (_: Event, _flexShrink: number | number[]) => {
    setFlexItemProps({
      flexShrink: _flexShrink as number,
    });
  };

  return (
    <Stack gap={0.5} flex={1}>
      <InputLabel>Flex Shrink</InputLabel>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <SpaceBarOutlined />
        </Grid>
        <Grid item xs>
          <Slider
            getAriaValueText={(_flexShrink) => `${_flexShrink}px`}
            value={flexShrink}
            onChange={handleSliderChange}
            max={10}
            valueLabelDisplay="auto"
            aria-labelledby="flex-shrink-slider"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FlexShrink;
