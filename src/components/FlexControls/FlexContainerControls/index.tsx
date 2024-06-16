import { Stack, useMediaQuery } from "@mui/material";

import FlexWrapButtonGroup from "./FlexWrapButtonGroup";
import JustifyContentSelect from "./JustifyContentSelect";
import FlexDirectionSelect from "./FlexDirectionSelect";

const FlexContainerControls = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <Stack p={2} pt={4} direction="column" gap={2} height={isMobile ? "20rem" : "100%"}>
      <Stack direction="row" gap={2}>
        <FlexDirectionSelect />
        <JustifyContentSelect />
      </Stack>
      <FlexWrapButtonGroup />
    </Stack>
  );
};

export default FlexContainerControls;
