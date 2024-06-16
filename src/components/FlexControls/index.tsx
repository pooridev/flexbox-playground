import { Wrapper } from "./styled";

import MobileControls from "./Mobile";
import DesktopControls from "./Desktop";
import { useMediaQuery } from "@mui/material";

const FlexControls = () => {
  const isMobile = useMediaQuery("(max-width: 48em)");

  return <Wrapper>{isMobile ? <MobileControls /> : <DesktopControls />}</Wrapper>;
};

export default FlexControls;
