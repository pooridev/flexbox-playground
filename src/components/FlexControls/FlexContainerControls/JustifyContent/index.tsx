import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useFlexStore } from "../../../../store/flex";
import { CSSProperties } from "react";

const JustifyContent = () => {
  const { justifyContent } = useFlexStore(({ state }) => state.flexContainerProps);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleChangeJustifyContent = ({ target }: SelectChangeEvent) => {
    setFlexContainerProps({
      justifyContent: target.value as CSSProperties["justifyContent"],
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="justify-content">Justify Content</InputLabel>
      <Select
        fullWidth
        labelId="Justify Content"
        id="justify-content"
        value={justifyContent}
        label="Age"
        onChange={handleChangeJustifyContent}
      >
        <MenuItem value="flex-start">Flex Start</MenuItem>
        <MenuItem value="flex-end">Flex End</MenuItem>
        <MenuItem value="space-between">Space Between</MenuItem>
        <MenuItem value="space-evenly">Space Evenly</MenuItem>
        <MenuItem value="space-around">Space Around</MenuItem>
        <MenuItem value="center">Center</MenuItem>
      </Select>
    </FormControl>
  );
};

export default JustifyContent;
