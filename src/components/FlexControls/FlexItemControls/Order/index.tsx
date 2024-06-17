import { QueueOutlined } from "@mui/icons-material";
import { Grid, InputLabel, Slider, Stack } from "@mui/material";

import { useFlexStore } from "../../../../store/flex";

const Order = () => {
  const selectedItemId = useFlexStore(({ state }) => state.selectedItemId);

  const order = useFlexStore(({ state }) => state.flexItemsProps[selectedItemId!]?.order) ?? 0;

  const { setFlexItemProps } = useFlexStore(({ actions }) => actions);

  const handleSliderChange = (_: Event, _order: number | number[]) => {
    setFlexItemProps({
      order: _order as number,
    });
  };

  return (
    <Stack gap={0.5} flex={1}>
      <InputLabel>Order</InputLabel>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <QueueOutlined />
        </Grid>
        <Grid item xs>
          <Slider
            getAriaValueText={(_order) => `${_order}px`}
            value={order}
            onChange={handleSliderChange}
            max={10}
            valueLabelDisplay="auto"
            aria-labelledby="order-slider"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Order;
