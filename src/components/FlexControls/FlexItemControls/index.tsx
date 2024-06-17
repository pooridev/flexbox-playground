import { Stack, useMediaQuery } from "@mui/material";
import FlexShrink from "./FlexShrink";
import FlexGrow from "./FlexGrow";
import AlignSelf from "./AlignSelf";
import Order from "./Order";
import SelectItemAlert from "./SelectItemAlert";

const FlexItemControls = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Stack
      position="relative"
      p={2}
      pb={3}
      pt={4}
      direction="column"
      gap={2}
      height={isMobile ? "20rem" : "100%"}
      overflow="auto"
    >
      <SelectItemAlert />
      <Stack direction="row" width="100%" gap={2}>
        <FlexGrow />
        <FlexShrink />
      </Stack>

      <AlignSelf />
      <Order />
    </Stack>
  );
};

export default FlexItemControls;
