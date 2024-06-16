import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useFlexStore } from "../../../../store/flex";
import { CSSProperties } from "react";

const FlexDirectionSelect = () => {
  const { flexDirection } = useFlexStore(({ state }) => state.flexContainerProps);
  const { setFlexContainerProps } = useFlexStore(({ actions }) => actions);

  const handleChangeFlexDirection = ({ target }: SelectChangeEvent) => {
    setFlexContainerProps({
      flexDirection: target.value as CSSProperties["flexDirection"],
    });
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="flex-direction">Flex Direction</InputLabel>
      <Select
        fullWidth
        labelId="Flex Direction"
        id="flex-direction"
        value={flexDirection}
        label="Age"
        onChange={handleChangeFlexDirection}
      >
        <MenuItem value="column">Column</MenuItem>
        <MenuItem value="column-reverse">Column Reverse</MenuItem>
        <MenuItem value="row">Row</MenuItem>
        <MenuItem value="row-reverse">Row Reverse</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FlexDirectionSelect;
