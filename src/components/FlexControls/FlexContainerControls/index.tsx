import { Stack, useMediaQuery } from "@mui/material";

import FlexWrap from "./FlexWrap";
import JustifyContent from "./JustifyContent";
import FlexDirection from "./FlexDirection";

const FlexContainerControls = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Stack p={2} pt={4} direction="column" gap={2} height={isMobile ? "20rem" : "100%"}>
      <Stack direction="row" gap={2}>
        <FlexDirection />
        <JustifyContent />
      </Stack>
      <FlexWrap />
    </Stack>
  );
};

export default FlexContainerControls;
