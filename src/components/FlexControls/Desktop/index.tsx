import { Divider, Stack, Typography } from "@mui/material";
import FlexContainerControls from "../FlexContainerControls";
import FlexItemControls from "../FlexItemControls";

const DesktopControls = () => {
  return (
    <Stack boxShadow={3} mt={2}>
      <Typography pt="1rem" fontWeight="bold" px="1rem">
        Container properties
      </Typography>
      <FlexContainerControls />
      <Divider />
      <Typography pt="1rem" fontWeight="bold" px="1rem">
        Item properties
      </Typography>
      <FlexItemControls />
    </Stack>
  );
};

export default DesktopControls;
