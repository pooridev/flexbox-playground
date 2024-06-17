import { GridOn } from "@mui/icons-material";
import { Grid, InputLabel, Slider, Stack, useMediaQuery } from "@mui/material";

import { useFlexStore } from "../../../../store/flex";

const Gap = () => {
  const gap = useFlexStore(({ state }) => state.flexContainerProps.gap);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);
  const isMobile = useMediaQuery("(max-width: 48em)");

  const handleSliderChange = (_: Event, _gap: number | number[]) => {
    setFlexContainerProps({
      gap: _gap as number,
    });
  };

  return (
    <Stack gap={0.5} maxWidth={isMobile ? "48%" : "100%"}>
      <InputLabel>Gap</InputLabel>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <GridOn />
        </Grid>
        <Grid item xs>
          <Slider
            getAriaValueText={(_gap) => `${_gap}px`}
            value={gap}
            onChange={handleSliderChange}
            max={30}
            valueLabelDisplay="auto"
            aria-labelledby="gap-slider"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Gap;
