import { Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import FlexContainerControls from "../FlexContainerControls";
import FlexItemControls from "../FlexItemControls";
import { Undo } from "@mui/icons-material";
import { useFlexStore } from "../../../store/flex";

const DesktopControls = () => {
  const resetFlexProps = useFlexStore(({ actions }) => actions.resetFlexProps);
  return (
    <Stack maxHeight="95dvh" boxShadow={3} mt={2}>
      <Stack pt="1rem" direction="row" px="1rem" alignItems="center" justifyContent="space-between">
        <Typography fontWeight="bold">Container properties</Typography>

        <Tooltip placement="left" title="Reset all properties">
          <IconButton onClick={resetFlexProps}>
            <Undo />
          </IconButton>
        </Tooltip>
      </Stack>

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
