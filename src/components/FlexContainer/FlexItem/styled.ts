import styled from "@emotion/styled";
import { Stack } from "@mui/material";

export const Wrapper = styled(Stack)`
  border-radius: 5px;
  padding: 10px;
  position: relative;
  cursor: pointer;

  .removeFlexItemButton {
    position: absolute;
    top: -3px;
    left: -3px;
  }
`;
