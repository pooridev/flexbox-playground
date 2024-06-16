import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (min-width: 48em) {
    width: 25vw;
    bottom: unset;
    right: 10px;
  }
`;
