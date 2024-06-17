import { SpaceBarOutlined } from "@mui/icons-material";
import { Grid, InputLabel, Slider, Stack } from "@mui/material";

import { useFlexStore } from "../../../../store/flex";

const FlexGrow = () => {
  const selectedItemId = useFlexStore(({ state }) => state.selectedItemId);

  const flexGrow = useFlexStore(({ state }) => state.flexItemsProps[selectedItemId!]?.flexGrow) ?? 0;

  const { setFlexItemProps } = useFlexStore(({ actions }) => actions);

  const handleSliderChange = (_: Event, _flexGrow: number | number[]) => {
    setFlexItemProps({
      flexGrow: _flexGrow as number,
    });
  };

  return (
    <Stack gap={0.5} flex={1}>
      <InputLabel>Flex Grow</InputLabel>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <SpaceBarOutlined />
        </Grid>
        <Grid item xs>
          <Slider
            getAriaValueText={(_flexGrow) => `${_flexGrow}px`}
            value={flexGrow}
            onChange={handleSliderChange}
            max={10}
            valueLabelDisplay="auto"
            aria-labelledby="flex-grow-slider"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default FlexGrow;
