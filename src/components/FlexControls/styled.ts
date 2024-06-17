import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Wrapper = styled(Box)`
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (min-width: 48em) {
    width: 36vw;
    max-width: 20rem;
    bottom: unset;
    right: 1rem;
  }
`;
