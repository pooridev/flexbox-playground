import { CSSProperties } from "react";
import { useFlexStore } from "../../../../store/flex";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const AlignContent = () => {
  const alignContent = useFlexStore(({ state }) => state.flexContainerProps.alignContent);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleChangeAlignContent = ({ target }: SelectChangeEvent) => {
    setFlexContainerProps({
      alignContent: target.value as CSSProperties["content"],
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="align-content">Align Content</InputLabel>
      <Select
        fullWidth
        labelId="Align Content"
        id="align-content"
        value={alignContent}
        label="Align Content"
        onChange={handleChangeAlignContent}
      >
        <MenuItem value="initial">Initial</MenuItem>
        <MenuItem value="flex-start">Flex Start</MenuItem>
        <MenuItem value="flex-end">Flex End</MenuItem>
        <MenuItem value="space-between">Space Between</MenuItem>
        <MenuItem value="space-evenly">Space Evenly</MenuItem>
        <MenuItem value="space-around">Space Around</MenuItem>
        <MenuItem value="center">Center</MenuItem>
        <MenuItem value="stretch">Stretch</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AlignContent;
