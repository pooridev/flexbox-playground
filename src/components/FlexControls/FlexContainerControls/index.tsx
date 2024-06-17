import { Stack, useMediaQuery } from "@mui/material";

import FlexWrap from "./FlexWrap";
import JustifyContent from "./JustifyContent";
import FlexDirection from "./FlexDirection";
import AlignItems from "./AlignItems";
import AlignContent from "./AlignContent";
import Gap from "./Gap";
import Display from "./Display";

const FlexContainerControls = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Stack p={2} pb={3} pt={4} direction="column" gap={2} overflow="auto" height={isMobile ? "20rem" : "100%"}>
      <Stack direction="row" gap={2}>
        <FlexDirection />
        <JustifyContent />
      </Stack>

      <Stack direction="row" gap={2}>
        <AlignItems />
        <AlignContent />
      </Stack>
      <Stack alignItems="center" flexWrap="wrap" direction="row" gap={2}>
        <FlexWrap />
        <Display />
      </Stack>

      <Gap />
    </Stack>
  );
};

export default FlexContainerControls;
