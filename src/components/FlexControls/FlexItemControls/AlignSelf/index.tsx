import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useFlexStore } from "../../../../store/flex";
import { CSSProperties } from "react";

const AlignSelf = () => {
  const selectedItemId = useFlexStore(({ state }) => state.selectedItemId);

  const alignSelf = useFlexStore(({ state }) => state.flexItemsProps[selectedItemId!]?.alignSelf) ?? "initial";

  const { setFlexItemProps } = useFlexStore(({ actions }) => actions);

  const handleChangeAlignSelf = ({ target }: SelectChangeEvent) => {
    setFlexItemProps({
      alignSelf: target.value as CSSProperties["alignSelf"],
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="align-self">Align Self</InputLabel>
      <Select
        fullWidth
        labelId="Align Self"
        id="align-self"
        value={alignSelf}
        label="Justify Content"
        onChange={handleChangeAlignSelf}
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

export default AlignSelf;
