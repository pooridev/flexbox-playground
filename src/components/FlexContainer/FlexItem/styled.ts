import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Wrapper = styled(Stack)`
  border-radius: 5px;
  padding: 1rem 2rem;
  position: relative;
  cursor: pointer;

  .removeFlexItemButton {
    position: absolute;
    top: -3px;
    left: -3px;
  }
`;
