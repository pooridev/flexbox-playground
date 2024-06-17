import { CSSProperties } from "react";
import { useFlexStore } from "../../../../store/flex";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

const AlignItems = () => {
  const alignItems = useFlexStore(({ state }) => state.flexContainerProps.alignItems);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleChangeAlignItems = ({ target }: SelectChangeEvent) => {
    setFlexContainerProps({
      alignItems: target.value as CSSProperties["alignItems"],
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="align-items">Align Items</InputLabel>
      <Select
        fullWidth
        labelId="Align Items"
        id="align-items"
        value={alignItems}
        label="Align Items"
        onChange={handleChangeAlignItems}
      >
        <MenuItem value="initial">Initial</MenuItem>
        <MenuItem value="flex-start">Flex Start</MenuItem>
        <MenuItem value="flex-end">Flex End</MenuItem>
        <MenuItem value="center">Center</MenuItem>
        <MenuItem value="stretch">Stretch</MenuItem>
        <MenuItem value="baseline">Baseline</MenuItem>
      </Select>
    </FormControl>
  );
};

export default AlignItems;
